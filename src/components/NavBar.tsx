import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem('user');
      if (raw) {
        const user = JSON.parse(raw);
        setUserName(user.name || null);
      } else {
        setUserName(null);
      }
    } catch {
      setUserName(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUserName(null);
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-brand-purple-dark">Shakti</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-purple transition-colors">
              Home
            </Link>
            <Link to="/legal-resources" className="text-gray-700 hover:text-brand-purple transition-colors">
              Legal Resources
            </Link>
            <Link to="/financial-assistance" className="text-gray-700 hover:text-brand-purple transition-colors">
              Financial Assistance
            </Link>
            <Link to="/complaint-form" className="text-gray-700 hover:text-brand-purple transition-colors">
              Lodge Complaint
            </Link>

            {userName ? (
              <>
                <span className="text-sm font-medium text-gray-700">Hi, {userName}</span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Log out
                </Button>
              </>
            ) : (
              <Button variant="outline" className="mr-2" asChild>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-inner">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-brand-purple py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/legal-resources"
              className="text-gray-700 hover:text-brand-purple py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Legal Resources
            </Link>
            <Link
              to="/financial-assistance"
              className="text-gray-700 hover:text-brand-purple py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Financial Assistance
            </Link>
            <Link
              to="/complaint-form"
              className="text-gray-700 hover:text-brand-purple py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Lodge Complaint
            </Link>

            {userName ? (
  <>
    <span className="text-lg md:text-xl font-semibold text-brand-purple-dark mr-4 flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-brand-purple"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A11.955 11.955 0 0112 15c2.566 0 4.933.88 6.879 2.379M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>Hi, {userName}</span>
    </span>
    <Button variant="outline" size="sm" onClick={handleLogout}>
      Log out
    </Button>
  </>
) : (
  <Button variant="outline" className="mr-2" asChild>
    <Link to="/login">Login</Link>
  </Button>
)}

          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
