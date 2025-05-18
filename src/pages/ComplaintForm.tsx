import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

const ComplaintForm: React.FC = () => {
  const [complaintType, setComplaintType] = useState('');
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [submittedComplaints, setSubmittedComplaints] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: '', city: '', state: '', pincode: '',
    incidentDate: '', incidentLocation: '', complaintDetails: '', evidenceAvailable: 'no',
    willingToTestify: false, preferredContact: 'phone', urgency: 'medium', referralNeeded: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };
  const handleSelectChange = (name: string, value: string) => {
    setFormData(p => ({ ...p, [name]: value }));
  };
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(p => ({ ...p, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: 'Complaint Submitted', description: 'Your complaint has been submitted successfully.' });
      setIsSubmitting(false);
      setSubmittedComplaints(prev => [...prev, { ...formData, complaintType }]);
      setFormData({
        name: '', phone: '', email: '', address: '', city: '', state: '', pincode: '',
        incidentDate: '', incidentLocation: '', complaintDetails: '', evidenceAvailable: 'no',
        willingToTestify: false, preferredContact: 'phone', urgency: 'medium', referralNeeded: false,
      });
      setStep(1);
      setComplaintType('');
    }, 1200);
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <section className="hero-section">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Lodge a Complaint</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">File complaints directly through our platform and get connected with legal experts for guidance.</p>
        </div>
      </section>

      <section className="page-container pb-16">
        <div className="max-w-3xl mx-auto">
          {step === 1 && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>What type of complaint do you want to file?</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['domestic', 'workplace', 'property', 'other'].map(type => (
                  <Card key={type} className={`cursor-pointer border ${complaintType === type ? 'border-purple-500' : ''}`} onClick={() => setComplaintType(type)}>
                    <CardHeader>
                      <CardTitle>{type.charAt(0).toUpperCase() + type.slice(1)} Complaint</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Description for {type} complaint type.</p>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
              <CardFooter className="justify-end">
                <Button onClick={nextStep} disabled={!complaintType}>Continue</Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <Input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <Textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                <div className="grid grid-cols-3 gap-4">
                  <Input name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                  <Input name="state" placeholder="State" value={formData.state} onChange={e => handleSelectChange('state', e.target.value)} required />
                  <Input name="pincode" placeholder="PIN Code" value={formData.pincode} onChange={handleChange} required />
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep} disabled={!formData.name || !formData.phone || !formData.address}>Continue</Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Complaint Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input type="date" name="incidentDate" value={formData.incidentDate} onChange={handleChange} required />
                <Input name="incidentLocation" placeholder="Incident Location" value={formData.incidentLocation} onChange={handleChange} required />
                <Textarea name="complaintDetails" placeholder="Details" value={formData.complaintDetails} onChange={handleChange} required />
                <Select value={formData.urgency} onValueChange={val => handleSelectChange('urgency', val)}>
                  <SelectTrigger><SelectValue placeholder="Urgency" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline" onClick={prevStep}>Back</Button>
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>

        {submittedComplaints.length > 0 && (
          <div className="max-w-5xl mx-auto px-4 mt-16">
            <h2 className="text-2xl font-bold text-center mb-6">Submitted Complaints</h2>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>{['Name','Type','Date','Location','Details','Urgency'].map(h=>(<th key={h} className="px-4 py-3 border-b font-semibold text-left">{h}</th>))}</tr>
                </thead>
                <tbody>
                  {submittedComplaints.map((c,i)=>(
                    <tr key={i} className="even:bg-gray-50">
                      <td className="px-4 py-2 border-b">{c.name}</td>
                      <td className="px-4 py-2 border-b capitalize">{c.complaintType}</td>
                      <td className="px-4 py-2 border-b">{c.incidentDate}</td>
                      <td className="px-4 py-2 border-b">{c.incidentLocation}</td>
                      <td className="px-4 py-2 border-b max-w-xs truncate" title={c.complaintDetails}>{c.complaintDetails}</td>
                      <td className="px-4 py-2 border-b capitalize">{c.urgency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default ComplaintForm;
