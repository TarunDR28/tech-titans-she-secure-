
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GovernmentSchemes: React.FC = () => {
  return (
    <div>
      <h2 className="section-title">Government Schemes for Women</h2>
      <p className="text-gray-600 mb-6">
        The Indian government has introduced several initiatives and schemes to promote women's empowerment and provide financial support.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Pradhan Mantri Matru Vandana Yojana (PMMVY)</CardTitle>
              <Badge>Maternity</Badge>
            </div>
            <CardDescription>Maternity benefit program</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Provides financial support to pregnant women and lactating mothers for the first living child. The scheme aims to improve the health and nutrition of mothers and newborn children.
            </p>
            
            <h4 className="font-semibold mb-2">Benefits:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cash incentive of ₹5,000 in three installments</li>
              <li>Additional ₹1,000 under Janani Suraksha Yojana for institutional delivery</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">Eligibility:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>All pregnant women and lactating mothers (PW&LM) for first living child</li>
              <li>Age 19 years and above</li>
              <li>Excludes those who are in regular employment with the Central/State Government or PSUs</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <a href="https://pmmvy.wcd.gov.in/" target="_blank" rel="noopener noreferrer" className="w-full">
                Official Website
              </a>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Mahila Shakti Kendra</CardTitle>
              <Badge>Empowerment</Badge>
            </div>
            <CardDescription>Women empowerment and skill development</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This scheme aims to empower rural women by providing them with opportunities to develop skills and gain knowledge. It provides an interface for rural women to approach the government for their entitlements.
            </p>
            
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Community engagement through College Student Volunteers</li>
              <li>Support service provision at the district and block level</li>
              <li>Training and capacity building for women</li>
              <li>Awareness generation and outreach activities</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <a href="https://missionshakti.wcd.gov.in/" target="_blank" rel="noopener noreferrer" className="w-full">
                Official Website
              </a>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Beti Bachao, Beti Padhao</CardTitle>
              <Badge>Education</Badge>
            </div>
            <CardDescription>Save girl child, educate girl child</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This scheme aims to address the declining Child Sex Ratio (CSR) and related issues of women empowerment through a multi-sectoral approach.
            </p>
            
            <h4 className="font-semibold mb-2">Key Objectives:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prevent gender-biased sex-selective elimination</li>
              <li>Ensure survival and protection of girl children</li>
              <li>Ensure education and participation of the girl child</li>
              <li>Financial literacy and skills training for girls</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <a href="https://wcdhry.gov.in/schemes-for-women/beti-bachao-beti-padhao/" target="_blank" rel="noopener noreferrer" className="w-full">
                Official Website
              </a>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Working Women Hostel Scheme</CardTitle>
              <Badge>Housing</Badge>
            </div>
            <CardDescription>Safe and affordable accommodation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This scheme provides safe and convenient accommodation for working women who have moved away from their hometowns. It aims to support working women and promote their economic independence.
            </p>
            
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Safe and affordable hostel accommodation</li>
              <li>Day-care center for children of working women</li>
              <li>Preferential admission to women from disadvantaged sections</li>
              <li>Located in urban, semi-urban, or rural areas</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">Eligibility:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Women with income not exceeding ₹50,000 per month in metropolitan cities</li>
              <li>Women with income not exceeding ₹35,000 per month in other areas</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <a href="https://wcdhry.gov.in/schemes-for-women/working-women-hostel/" target="_blank" rel="noopener noreferrer" className="w-full">
                Official Website
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default GovernmentSchemes;
