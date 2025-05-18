
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const LoansCredit: React.FC = () => {
  return (
    <div>
      <h2 className="section-title">Loans & Credit Schemes</h2>
      <p className="text-gray-600 mb-6">
        Various financial institutions offer specialized loan products with lower interest rates and favorable terms for women.
      </p>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pradhan Mantri Mudra Yojana (PMMY)</CardTitle>
            <CardDescription>Micro loans for women entrepreneurs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              PMMY provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises. Women entrepreneurs receive preferential treatment with lower interest rates.
            </p>
            
            <h4 className="font-semibold mb-2">Loan Categories:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded p-4">
                <h5 className="font-semibold mb-2">Shishu</h5>
                <p>Loans up to ₹50,000</p>
                <p className="text-sm text-gray-500 mt-2">For startups and very small businesses</p>
              </div>
              <div className="border rounded p-4">
                <h5 className="font-semibold mb-2">Kishor</h5>
                <p>Loans from ₹50,001 to ₹5 lakh</p>
                <p className="text-sm text-gray-500 mt-2">For established small businesses</p>
              </div>
              <div className="border rounded p-4">
                <h5 className="font-semibold mb-2">Tarun</h5>
                <p>Loans from ₹5,00,001 to ₹10 lakh</p>
                <p className="text-sm text-gray-500 mt-2">For expanding businesses</p>
              </div>
            </div>
            
            <h4 className="font-semibold mt-6 mb-2">Benefits for Women:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Interest rates generally lower by 0.25% to 0.50%</li>
              <li>No collateral required</li>
              <li>Simplified application process</li>
              <li>Special focus on empowering women entrepreneurs</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-brand-purple hover:bg-brand-purple-dark">
              <a href="https://www.mudra.org.in/" target="_blank" rel="noopener noreferrer" className="w-full">
                Apply Now
              </a>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Stree Shakti Package by SBI</CardTitle>
            <CardDescription>Special loan scheme for women entrepreneurs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              State Bank of India offers this special loan package for women entrepreneurs who have majority ownership (over 50%) in a small business.
            </p>
            
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Interest rate concession of 0.50% on loans above ₹2 lakh</li>
              <li>No processing fee</li>
              <li>Collateral-free loans up to ₹5 lakh in case of CGTSME coverage</li>
              <li>Enhanced working capital limits</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">Eligibility:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Women entrepreneurs with more than 50% share in ownership of the firm/business</li>
              <li>Small businesses in manufacturing or service sector</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-brand-purple hover:bg-brand-purple-dark">
              <a href="https://www.sbi.co.in" target="_blank" rel="noopener noreferrer" className="w-full">
                Apply Now
              </a>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Mahila Udyam Nidhi Scheme</CardTitle>
            <CardDescription>Small industries development scheme</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This scheme promoted by Small Industries Development Bank of India (SIDBI) provides financial assistance to women entrepreneurs for setting up new projects in the small-scale sector.
            </p>
            
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Loans up to ₹10 lakh</li>
              <li>Repayment period up to 10 years</li>
              <li>Interest rates as per SIDBI guidelines</li>
              <li>Grace period of up to 5 years</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">Eligible Projects:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Manufacturing</li>
              <li>Service sector</li>
              <li>Retail trade</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-brand-purple hover:bg-brand-purple-dark">
              <a href="https://www.sidbi.in/" target="_blank" rel="noopener noreferrer" className="w-full">
                Apply Now
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoansCredit;
