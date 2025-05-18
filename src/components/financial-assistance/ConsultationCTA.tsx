import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Phone, Mail, MapPin } from "lucide-react";

const ConsultationCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const expert = {
    name: "Ravi Kumar",
    brief:
      "Ravi is a financial-assistance specialist with 15+ years of experience helping individuals and small businesses secure funding and maximise government benefits.",
    phone: "+91 91234 56789",
    email: "ravi.kumar@financialhelp.com",
    address: "123 Finance Street, Connaught Place, New Delhi 110001",
  };

  return (
    <>
      {/* CTA strip */}
      <section className="py-16 bg-brand-purple-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="mb-8 max-w-3xl mx-auto text-lg">
            Our financial assistance experts can help you identify the right schemes and programs
            for your needs and guide you through the application process.
          </p>
          <Button
            className="bg-white text-brand-purple-dark hover:bg-gray-100"
            size="lg"
            onClick={() => setIsOpen(true)}
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold mb-2">{expert.name}</h3>
            <p className="text-gray-700 mb-4">{expert.brief}</p>

            <div className="space-y-3 text-gray-800">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-brand-purple-dark" />
                <span>{expert.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-purple-dark" />
                <span>{expert.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-purple-dark" />
                <span>{expert.address}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationCTA;
