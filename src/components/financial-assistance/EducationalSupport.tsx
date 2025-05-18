
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const EducationalSupport: React.FC = () => {
  return (
    <div>
      <h2 className="section-title">Educational Support Programs</h2>
      <p className="text-gray-600 mb-6">
        Scholarships, grants, and educational programs designed to support women's education and skill development.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pragati Scholarship Scheme for Girls</CardTitle>
            <CardDescription>AICTE scholarship for technical education</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Pragati is a scheme by the All India Council for Technical Education (AICTE) that provides financial assistance to meritorious girl students pursuing technical education.
            </p>
            
            <h4 className="font-semibold mb-2">Benefits:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>₹50,000 per annum or tuition fees, whichever is less</li>
              <li>Covers degree and diploma programs</li>
              <li>Up to 4,000 scholarships per year</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">Eligibility:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Admitted to first year of Degree/Diploma program or second year through lateral entry</li>
              <li>Family income less than ₹8 lakh per annum</li>
              <li>Maximum two girl children per family</li>
            </ul>
          </CardContent>
          <CardFooter>
               <Button className="w-full" variant="outline">
                         <a href="https://fellowship.aicte.gov.in/" target="_blank" rel="noopener noreferrer" className="w-full">
                           Official Website
                         </a>
                       </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Support to Training and Employment Programme for Women (STEP)</CardTitle>
            <CardDescription>Skill development for women</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              STEP aims to provide skills that give employability to women and to provide competencies and skills that enable women to become self-employed/entrepreneurs.
            </p>
            
            <h4 className="font-semibold mb-2">Sectors Covered:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Agriculture</li>
              <li>Horticulture</li>
              <li>Food processing</li>
              <li>Handloom</li>
              <li>Traditional crafts</li>
              <li>IT and services</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">Training Components:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Basic and advanced technical training</li>
              <li>Management and entrepreneurship development</li>
              <li>Soft skills training</li>
              <li>On-the-job training</li>
            </ul>
          </CardContent>
          <CardFooter>
              <Button className="w-full" variant="outline">
                         <a href="https://www.stepupforstudents.org/" target="_blank" rel="noopener noreferrer" className="w-full">
                           Official Website
                         </a>
                       </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>National Scholarship Portal (Women Specific Schemes)</CardTitle>
            <CardDescription>Centralized scholarships for women</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The National Scholarship Portal provides multiple scholarships specifically for women across different educational levels.
            </p>
            
            <h4 className="font-semibold mb-2">Major Scholarships:</h4>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Post Graduate Indira Gandhi Scholarship for Single Girl Child</AccordionTrigger>
                <AccordionContent>
                  <p>Provides financial assistance to single girl child for pursuing higher education.</p>
                  <p className="mt-2"><strong>Amount:</strong> ₹36,200 per annum</p>
                  <p><strong>Eligibility:</strong> Single girl child for postgraduate studies in non-professional courses</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>CSIR Innovation Award for School Children</AccordionTrigger>
                <AccordionContent>
                  <p>Encourages scientific temperament among school children with special focus on girl students.</p>
                  <p className="mt-2"><strong>Award:</strong> Up to ₹1,00,000</p>
                  <p><strong>Eligibility:</strong> Students up to class 12</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>DHESTBT West Bengal Free Scholarship Scheme</AccordionTrigger>
                <AccordionContent>
                  <p>Provides financial support to meritorious students from economically weaker sections.</p>
                  <p className="mt-2"><strong>Priority:</strong> Given to girl students</p>
                  <p><strong>Eligibility:</strong> Students of West Bengal pursuing higher education</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer" className="w-full">
                Visit National Scholarship Portal
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default EducationalSupport;
