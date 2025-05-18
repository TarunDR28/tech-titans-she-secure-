
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Star, MapPin, Phone, Mail, ShoppingBag, X } from "lucide-react";
import UnorganizedWorkerRegistrationForm from "@/components/UnorganizedWorkerRegistrationForm";

// Worker interface (same as before)
interface Worker {
  name: string;
  title: string;
  category: string;
  products: string;
  location: string;
  contact: string;
  rating: number;
  reviews: number;
  contactType: "phone" | "email";

  // Added full address and description fields for modal display
  age?: number;
  dob?: string;
  village?: string;
  district?: string;
  taluk?: string;
  address?: string;  // Complete address
  description?: string; // Additional description if needed
}

const initialWorkers: Worker[] = [
  {
    name: "Lakshmi Devi",
    title: "Handloom Weaver",
    category: "Handicrafts",
    products: "Handwoven sarees, stoles, and fabrics",
    location: "Delhi, Uttar Pradesh",
    contact: "+91 98765 43210",
    rating: 4,
    reviews: 15,
    contactType: "phone",
    address: "House No. 12, Sector 8, Delhi, Uttar Pradesh, 110045",
    description: "Experienced in traditional handloom weaving with 10+ years of expertise.",
  },
  {
    name: "Meena Kumari",
    title: "Traditional Embroidery Artist",
    category: "Textiles",
    products: "Embroidered garments, home decor items",
    location: "Jaipur, Rajasthan",
    contact: "meena.crafts@gmail.com",
    rating: 5,
    reviews: 28,
    contactType: "email",
    address: "45 Bapu Nagar, Jaipur, Rajasthan, 302015",
    description: "Specializes in intricate embroidery techniques passed down generations.",
  },
  // ... other workers with similar address & description fields
   {
    name: "Sunita Singh",
    title: "Food Producer",
    category: "Food Products",
    products: "Homemade pickles, jams, and spice mixes",
    location: "Dehradun, Uttarakhand",
    contact: "+91 87654 32109",
    rating: 4.5,
    reviews: 42,
    contactType: "phone",
  },
  {
    name: "Radha Patel",
    title: "Pottery Artist",
    category: "Handicrafts",
    products: "Traditional pottery, clay art, decorative items",
    location: "Khurja, Uttar Pradesh",
    contact: "+91 76543 21098",
    rating: 4.7,
    reviews: 31,
    contactType: "phone",
  },
  {
    name: "Anita Sharma",
    title: "Bamboo Craft Artisan",
    category: "Handicrafts",
    products: "Bamboo furniture, baskets, decorative items",
    location: "Guwahati, Assam",
    contact: "anita.bamboo@gmail.com",
    rating: 4.3,
    reviews: 19,
    contactType: "email",
  },
  {
    name: "Kavita Reddy",
    title: "Organic Farmer",
    category: "Agriculture",
    products: "Organic vegetables, fruits, and grains",
    location: "Coimbatore, Tamil Nadu",
    contact: "+91 65432 10987",
    rating: 5,
    reviews: 37,
    contactType: "phone",
  },
];

const UnorganizedSector: React.FC = () => {
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);
  const [workers, setWorkers] = useState<Worker[]>(initialWorkers);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // New state to handle modal open + selected worker details
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);

  const handleAddWorker = (newWorker: Worker) => {
    setWorkers((prev) => [...prev, newWorker]);
  };

  const filteredWorkers = workers.filter(
    (worker) =>
      (worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        worker.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        worker.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (categoryFilter === "" || worker.category === categoryFilter) &&
      (locationFilter === "" ||
        worker.location.toLowerCase().includes(locationFilter.toLowerCase()))
  );

  return (
    <div className="px-4 md:px-8 py-6">
      {/* ... other code remains unchanged ... */}

      {/* Workers List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {filteredWorkers.map((worker, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <div className="flex justify-between">
                <div className="flex-1">
                  <CardTitle>{worker.name}</CardTitle>
                  <CardDescription>{worker.title}</CardDescription>
                  <Badge className="mt-2">{worker.category}</Badge>
                </div>
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  Photo
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-gray-500" />
                  <span>{worker.products}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{worker.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  {worker.contactType === "email" ? (
                    <Mail className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Phone className="w-4 h-4 text-gray-500" />
                  )}
                  <span>{worker.contact}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(Math.floor(worker.rating))].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {worker.rating % 1 !== 0 && (
                    <Star className="w-4 h-4 text-yellow-400" />
                  )}
                  <span className="ml-2 text-sm font-medium">
                    {worker.rating} ({worker.reviews} reviews)
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button
                className="w-full bg-brand-purple hover:bg-brand-purple-dark"
                onClick={() => setSelectedWorker(worker)} // Open modal with worker details
              >
                Contact
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Contact Modal */}
      {selectedWorker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSelectedWorker(null)} // Close modal on backdrop click
        >
          <div
            className="bg-white rounded-lg p-6 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedWorker(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedWorker.name}</h2>
            <p className="mb-2">
              <strong>Title:</strong> {selectedWorker.title}
            </p>
            <p className="mb-2">
              <strong>Category:</strong> {selectedWorker.category}
            </p>
            <p className="mb-2">
              <strong>Products:</strong> {selectedWorker.products}
            </p>
            <p className="mb-2 flex items-center gap-1">
              <MapPin />
              <span>{selectedWorker.address ?? selectedWorker.location}</span>
            </p>
            <p className="mb-2 flex items-center gap-1">
              {selectedWorker.contactType === "email" ? (
                <Mail />
              ) : (
                <Phone />
              )}
              <span>{selectedWorker.contact}</span>
            </p>
            {selectedWorker.description && (
              <p className="mb-2">
                <strong>Description:</strong> {selectedWorker.description}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Registration Banner and other components unchanged */}

      <div className="bg-brand-purple bg-opacity-10 p-6 rounded-lg mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h3 className="text-xl font-bold text-brand-purple-dark mb-2">
              Are you a woman worker in the unorganized sector?
            </h3>
            <p className="text-gray-700">
              Register your profile to showcase your skills and products to
              potential employers and customers.
            </p>
          </div>
          <Button
            onClick={() => setIsRegistrationFormOpen(true)}
            className="bg-brand-purple hover:bg-brand-purple-dark"
          >
            Register Now
          </Button>
        </div>
      </div>

      {/* Success Stories Table */}
      {/* ... same as before ... */}

      <UnorganizedWorkerRegistrationForm
        isOpen={isRegistrationFormOpen}
        onClose={() => setIsRegistrationFormOpen(false)}
        onAddWorker={handleAddWorker}
      />
    </div>
  );
};

export default UnorganizedSector;
