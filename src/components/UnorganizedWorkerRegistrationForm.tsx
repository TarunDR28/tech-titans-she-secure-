import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Camera, Phone, Mail, MapPin } from "lucide-react";

// Define the form schema with Zod
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  occupation: z.string().min(2, { message: "Occupation is required." }),
  productName: z.string().min(2, { message: "Product name is required." }),
  productDescription: z.string().min(10, { message: "Please provide a description of at least 10 characters." }),
  category: z.string().min(1, { message: "Please select a category." }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit Indian phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal('')),
  location: z.string().min(3, { message: "Location is required." }),
  state: z.string().min(2, { message: "Please select a state." }),
});

type FormValues = z.infer<typeof formSchema>;

interface UnorganizedWorkerRegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAddWorker: (worker: any) => void;  // added this prop
}

const UnorganizedWorkerRegistrationForm: React.FC<UnorganizedWorkerRegistrationFormProps> = ({
  isOpen,
  onClose,
  onAddWorker,
}) => {
  const { toast } = useToast();
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      occupation: "",
      productName: "",
      productDescription: "",
      category: "",
      phone: "",
      email: "",
      location: "",
      state: "",
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const remainingSlots = 3 - uploadedImages.length;
      const filesToProcess = Array.from(files).slice(0, remainingSlots);

      filesToProcess.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImages((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    setTimeout(() => {
      const newWorker = {
        name: data.fullName,
        title: data.occupation,
        category: data.category,
        products: data.productName + " - " + data.productDescription,
        location: data.location + ", " + data.state,
        contact: data.phone || data.email,
        rating: 0,
        reviews: 0,
        contactType: data.phone ? "phone" : "email",
        images: uploadedImages,
      };

      onAddWorker(newWorker); // call the prop to add new worker

      toast({
        title: "Registration submitted",
        description: "We'll contact you soon.",
      });

      setIsSubmitting(false);
      onClose();
      form.reset();
      setUploadedImages([]);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-brand-purple-dark">
            Register as an Unorganized Sector Worker
          </DialogTitle>
          <DialogDescription className="text-center">
            Showcase your skills, products, and services to potential customers.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium border-b pb-2 mb-4">Personal Information</h3>
              </div>

              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occupation/Skill*</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Handloom Weaver, Potter, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number*</FormLabel>
                    <FormControl>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span className="ml-1">+91</span>
                        </span>
                        <Input className="rounded-l-none" placeholder="10-digit number" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email (Optional)</FormLabel>
                    <FormControl>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                          <Mail className="h-4 w-4 text-gray-500" />
                        </span>
                        <Input className="rounded-l-none" placeholder="your@email.com" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City/Village*</FormLabel>
                    <FormControl>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                          <MapPin className="h-4 w-4 text-gray-500" />
                        </span>
                        <Input className="rounded-l-none" placeholder="Your city or village" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>States</SelectLabel>
                          <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                          <SelectItem value="assam">Assam</SelectItem>
                          <SelectItem value="bihar">Bihar</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="gujarat">Gujarat</SelectItem>
                          <SelectItem value="haryana">Haryana</SelectItem>
                          <SelectItem value="karnataka">Karnataka</SelectItem>
                          <SelectItem value="kerala">Kerala</SelectItem>
                          <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                          <SelectItem value="maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="punjab">Punjab</SelectItem>
                          <SelectItem value="rajasthan">Rajasthan</SelectItem>
                          <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                          <SelectItem value="telangana">Telangana</SelectItem>
                          <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                          <SelectItem value="west-bengal">West Bengal</SelectItem>
                          {/* Add other states as needed */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Product Information */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium border-b pb-2 mb-4">Product/Service Information</h3>
              </div>

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Category*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="handicrafts">Handicrafts</SelectItem>
                          <SelectItem value="textiles">Textiles & Clothing</SelectItem>
                          <SelectItem value="food">Food Products</SelectItem>
                          <SelectItem value="domestic">Domestic Help</SelectItem>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Product/Service Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="What do you make/offer?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="productDescription"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Description*</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your products or services in detail"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Include details about materials, techniques, pricing, etc.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Image Upload */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium border-b pb-2 mb-4">Product Photos</h3>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Upload up to 3 photos of your products/services
                  </p>

                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100">
                      <Camera className="h-8 w-8 text-gray-500 mb-2" />
                      <span className="text-xs text-gray-500">Add Photos</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                        disabled={uploadedImages.length >= 3}
                      />
                    </label>

                    {/* Preview uploaded images */}
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative w-32 h-32">
                        <img
                          src={image}
                          alt={`Uploaded product ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    {uploadedImages.length}/3 photos uploaded. Clear, well-lit images help showcase your
                    products better.
                  </p>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" type="button" onClick={onClose} className="mr-2">
                Cancel
              </Button>
              <Button type="submit" className="bg-brand-purple hover:bg-brand-purple-dark" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UnorganizedWorkerRegistrationForm;
