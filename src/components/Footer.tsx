
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Shakti</h3>
            <p className="text-gray-300">
              Empowering women with legal and financial resources to help them navigate challenges and achieve their full potential.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-brand-purple transition-colors">Home</Link></li>
              <li><Link to="/legal-resources" className="hover:text-brand-purple transition-colors">Legal Resources</Link></li>
              <li><Link to="/financial-assistance" className="hover:text-brand-purple transition-colors">Financial Assistance</Link></li>
              <li><Link to="/complaint-form" className="hover:text-brand-purple transition-colors">Lodge Complaint</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <p className="text-gray-300">Email: support@shakti.org</p>
            <p className="text-gray-300">Phone: +91 1234567890</p>
            <p className="text-gray-300">Emergency Helpline: 1098</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shakti - Empowering Women. All rights reserved.</p>
          <p className="mt-1 text-sm">This website is a demonstration project for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
