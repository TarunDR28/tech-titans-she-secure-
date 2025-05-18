
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GovernmentSchemes from '@/components/financial-assistance/GovernmentSchemes';
import LoansCredit from '@/components/financial-assistance/LoansCredit';
import BusinessSupport from '@/components/financial-assistance/BusinessSupport';
import EducationalSupport from '@/components/financial-assistance/EducationalSupport';
import UnorganizedSector from '@/components/financial-assistance/UnorganizedSector';
import SuccessStories from '@/components/financial-assistance/SuccessStories';
import ConsultationCTA from '@/components/financial-assistance/ConsultationCTA';

const FinancialAssistance: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Financial Assistance for Women</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Discover government schemes, loans, support programs, and connect with women workers from the unorganized sector.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="page-container">
        <Tabs defaultValue="govt" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="govt">Government Schemes</TabsTrigger>
            <TabsTrigger value="loans">Loans & Credit</TabsTrigger>
            <TabsTrigger value="business">Business Support</TabsTrigger>
            <TabsTrigger value="education">Educational Support</TabsTrigger>
            <TabsTrigger value="unorganized">Unorganized Sector</TabsTrigger>
          </TabsList>
          
          <TabsContent value="govt" className="mt-6">
            <GovernmentSchemes />
          </TabsContent>
          
          <TabsContent value="loans" className="mt-6">
            <LoansCredit />
          </TabsContent>
          
          <TabsContent value="business" className="mt-6">
            <BusinessSupport />
          </TabsContent>
          
          <TabsContent value="education" className="mt-6">
            <EducationalSupport />
          </TabsContent>

          <TabsContent value="unorganized" className="mt-6">
            <UnorganizedSector />
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Success Stories */}
      <SuccessStories />
      
      {/* Apply Now Section */}
      <ConsultationCTA />
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default FinancialAssistance;
