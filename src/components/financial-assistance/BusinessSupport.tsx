
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const BusinessSupport: React.FC = () => {
  return (
    <div>
      <h2 className="section-title">Business Support Programs</h2>
      <p className="text-gray-600 mb-6">
        Programs and initiatives designed to support women entrepreneurs with mentorship, training, and networking opportunities.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>SIDBI Mahila Udyam Nidhi</CardTitle>
            <CardDescription>Support for small and medium enterprises</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This scheme provides equity support to women entrepreneurs for setting up projects in the small-scale sector.
            </p>
            
            <h4 className="font-semibold mb-2">Services Offered:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Financial assistance</li>
              <li>Technical support</li>
              <li>Business mentoring</li>
              <li>Marketing guidance</li>
            </ul>
            
            <div className="bg-brand-purple bg-opacity-10 p-4 rounded-md mt-4">
              <h5 className="font-semibold text-brand-purple-dark">Success Story:</h5>
              <p className="text-sm">
                "With support from SIDBI Mahila Udyam Nidhi, I was able to expand my handloom business from local markets to international buyers. The mentorship provided helped me navigate export regulations and find reliable buyers abroad."
                <br />- Sunita Sharma, Owner of Bunkar Textiles
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
                          <a href="https://www.smfgindiacredit.com/mahila-udyam-nidhi-scheme.aspx" target="_blank" rel="noopener noreferrer" className="w-full">
                            Official Website
                          </a>
                        </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Trade Related Entrepreneurship Assistance and Development (TREAD)</CardTitle>
            <CardDescription>Government support for women entrepreneurs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              TREAD aims to empower women economically through development of their entrepreneurial skills in non-farm activities.
            </p>
            
            <h4 className="font-semibold mb-2">Key Components:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Credit support through NGOs</li>
              <li>Training and counseling</li>
              <li>Market development assistance</li>
              <li>Up to 30% of the loan amount as a grant</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <a href="https://www.msmediagra.gov.in/womentread.htm" target="_blank" rel="noopener noreferrer" className="w-full">
                Visit TREAD Portal
              </a>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Women Entrepreneurship Platform (WEP)</CardTitle>
            <CardDescription>NITI Aayog initiative for women entrepreneurs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              WEP is a unified portal that brings together women from different regions, backgrounds, and sectors to help them realize their entrepreneurial aspirations.
            </p>
            
            <h4 className="font-semibold mb-2">Services Offered:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Incubation and acceleration support</li>
              <li>Entrepreneurship skill development</li>
              <li>Marketing assistance</li>
              <li>Compliance and tax support</li>
              <li>Funding and financial assistance</li>
              <li>Mentorship connections</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <a href="https://wep.gov.in/" target="_blank" rel="noopener noreferrer" className="w-full">
                Visit WEP Portal
              </a>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Mahila E-Haat</CardTitle>
            <CardDescription>Digital marketing platform for women entrepreneurs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Mahila E-Haat is an initiative for meeting aspirations and needs of women entrepreneurs. It is a bilingual online marketing platform that leverages technology to support women entrepreneurs, SHGs, and NGOs.
            </p>
            
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Direct online marketing platform</li>
              <li>No third-party involvement</li>
              <li>Zero registration cost</li>
              <li>Product categories include clothing, accessories, grocery items, home décor, etc.</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <a href="https://en.vikaspedia.in/viewcontent/e-governance/women-and-e-governance/mahila-e-haat" target="_blank" rel="noopener noreferrer" className="w-full">
                Visit Mahila E-Haat
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BusinessSupport;
