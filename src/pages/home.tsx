import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // 🔎 read saved user safely
  let userName = '';
  try {
    const raw = localStorage.getItem('user');
    if (raw) userName = JSON.parse(raw).name || '';
  } catch {
    /* ignore parse errors */
  }

  // optional logout
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header with greeting */}
      <header className="w-full flex items-center justify-end px-6 py-3 bg-white shadow">
        {userName && (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Hi, {userName}</span>
            <Button variant="outline" size="sm" onClick={logout}>
              Log out
            </Button>
          </div>
        )}
      </header>

      {/* Main dashboard content */}
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <p className="text-gray-700">
          This is your home page content. Replace with your actual dashboard modules.
        </p>
      </main>
    </div>
  );
};

export default Home;
