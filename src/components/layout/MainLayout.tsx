
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="text-xl font-bold">Startup Idea Validator</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/explore" className="text-gray-600 hover:text-gray-900">Explore</Link>
            <Link to="/tools" className="text-gray-600 hover:text-gray-900">Tools</Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
            <Button asChild>
              <Link to="/register">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Startup Idea Validator</h3>
              <p className="text-gray-600">Validate your startup ideas with community feedback and AI insights.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/explore" className="text-gray-600 hover:text-gray-900">Explore Ideas</Link></li>
                <li><Link to="/tools" className="text-gray-600 hover:text-gray-900">Tools</Link></li>
                <li><Link to="/ai-chat" className="text-gray-600 hover:text-gray-900">AI Chat</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-center">© {new Date().getFullYear()} Startup Idea Validator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
