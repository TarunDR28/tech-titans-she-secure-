import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Input,
  Label,
  useToast,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // basic 10-digit India phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      toast({
        title: 'Invalid phone number',
        description: 'Please enter a valid 10-digit Indian phone number.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const user = { name, phone };

      // simulate server delay
      await new Promise((res) => setTimeout(res, 1000));

      localStorage.setItem('user', JSON.stringify(user));

      toast({
        title: 'Login successful',
        description: `Welcome to Shakti, ${name}!`,
      });

      navigate('/'); // 👉 redirects to Home
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome to Shakti</h2>
          <p className="mt-2 text-sm text-gray-600">
            Empowering women with legal &amp; financial resources
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login / Register</CardTitle>
            <CardDescription>Enter your details to continue</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit phone number"
                  maxLength={10}
                  required
                />
                <p className="text-xs text-gray-500">Format: 9876543210</p>
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-purple hover:bg-brand-purple-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Please wait…' : 'Continue'}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-500 text-center">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
