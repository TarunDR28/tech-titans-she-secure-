import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import ResourceCard from '@/components/ResourceCard';

const Index: React.FC = () => {
  // Your featuredResources as before
  const featuredResources = [
    {
      title: "Understanding Domestic Violence Laws",
      description:
        "Learn about your legal rights and protections under the Protection of Women from Domestic Violence Act, 2005.",
      link: "/legal-resources",
      linkText: "Read More",
      category: "Legal",
    },
    {
      title: "Mudra Loan Scheme for Women Entrepreneurs",
      description:
        "Discover how the Pradhan Mantri Mudra Yojana can help you start or expand your business with loans up to ₹10 lakh.",
      link: "/financial-assistance",
      linkText: "Explore",
      category: "Financial",
    },
    {
      title: "Property Rights for Women in India",
      description:
        "Know your inheritance and property ownership rights as per the latest amendments to succession laws.",
      link: "/legal-resources",
      linkText: "Learn More",
      category: "Legal",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Women with Legal & Financial Tools
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-10">
            Access resources, get answers to your questions, and find support for legal and financial
            challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-brand-purple-dark hover:bg-gray-100"
              asChild
            >
              <Link to="/legal-resources">Explore Legal Resources</Link>
            </Button>
            <Button size="lg" className="bg-brand-purple-dark hover:bg-brand-purple-darker" asChild>
              <Link to="/financial-assistance">Find Financial Assistance</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How Shakti Can Help You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Legal Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
                  <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
                  <path d="M18 22V5l-6-3-6 3v17" />
                  <path d="M12 7v5" />
                  <path d="M10 9h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Legal Resources</h3>
              <p className="text-gray-600 mb-4">
                Explore comprehensive guides on family laws, property rights, workplace rights, and
                criminal justice.
              </p>
              <Button
                variant="outline"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                asChild
              >
                <Link to="/legal-resources">Browse Resources</Link>
              </Button>
            </div>

            {/* Financial Assistance */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M18 3a3 3 0 0 0-3 3c0 .6.13 1.2.4 1.7.27.5.4 1.1.4 1.7A3.5 3.5 0 0 1 12.5 13a3.5 3.5 0 0 1-3.4-2.6c-.27-.5-.4-1.1-.4-1.7a4.5 4.5 0 0 0-4.5-4.5 4.5 4.5 0 0 0-4.2 6"></path>
                  <path d="M2.5 5.5 2 8h3"></path>
                  <path d="M22 13.5V12a2 2 0 0 0-2-2h-5.5"></path>
                  <path d="M15 20a2 2 0 0 0 2-2v-.5h1a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2v-1"></path>
                  <path d="M10 7.5V8a2 2 0 0 1-2 2H5"></path>
                  <path d="m9 13 2 6c.2.6.8 1 1.4 1H15"></path>
                  <path d="M9 14a2 2 0 0 1-2-2v-1H5a2 2 0 0 1-2-2V8H1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Assistance</h3>
              <p className="text-gray-600 mb-4">
                Discover government schemes, low-interest loans, and business support programs
                designed for women.
              </p>
              <Button
                variant="outline"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                asChild
              >
                <Link to="/financial-assistance">Find Support</Link>
              </Button>
            </div>

            {/* Lodge Complaints */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lodge Complaints</h3>
              <p className="text-gray-600 mb-4">
                File complaints directly through our platform and get connected with legal experts for
                guidance.
              </p>
              <Button
                variant="outline"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                asChild
              >
                <Link to="/complaint-form">File Complaint</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Featured Resources</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Explore some of our most helpful resources to understand your rights and available support
            systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <ResourceCard
                key={index}
                title={resource.title}
                description={resource.description}
                link={resource.link}
                linkText={resource.linkText}
                category={resource.category}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-brand-purple hover:bg-brand-purple-dark" size="lg" asChild>
              <Link to="/legal-resources">View All Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-10 bg-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Emergency Help</h3>
          <p className="text-lg">
            If you are in danger, please call the national helpline immediately:
            <br />
            <a href="tel:1091" className="underline font-semibold">
              1091
            </a>
          </p>
        </div>
      </section>

      <ChatBot />

      <Footer />
    </div>
  );
};

export default Index;
