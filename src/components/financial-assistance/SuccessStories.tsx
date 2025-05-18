
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SuccessStories: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="w-20 h-20 rounded-full bg-brand-purple mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Savita Kumari</h3>
              <p className="text-gray-500 text-center mb-4">Handloom Business Owner, Uttar Pradesh</p>
              <p className="text-gray-700">
                "With a loan from the Mudra Yojana, I was able to expand my handloom business from 2 looms to 10, and now employ 8 women from my village. My annual turnover has grown from ₹2 lakhs to ₹15 lakhs in just three years."
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="w-20 h-20 rounded-full bg-brand-purple mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Meena Sharma</h3>
              <p className="text-gray-500 text-center mb-4">Organic Food Entrepreneur, Karnataka</p>
              <p className="text-gray-700">
                "The training I received through the Support to Training and Employment Programme helped me understand how to scale my organic food business. I also received a loan through Stree Shakti Package which helped me set up a processing unit."
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="w-20 h-20 rounded-full bg-brand-purple mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">P</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Priya Patel</h3>
              <p className="text-gray-500 text-center mb-4">Tech Startup Founder, Maharashtra</p>
              <p className="text-gray-700">
                "The mentorship and networking support from the Women Entrepreneurship Platform helped me refine my business model for my EdTech startup. I also secured seed funding which has helped us develop our product and reach over 10,000 students."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
