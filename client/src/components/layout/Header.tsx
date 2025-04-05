import React, { useState } from 'react';
import { Search, Menu, Bell, HelpCircle } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { useUser } from '@/lib/data';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [, navigate] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: user } = useUser();
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Start record', path: '/record' },
    { label: 'Account', path: '/account' },
    { label: 'Team', path: '/team' },
    { label: 'Settings', path: '/settings' },
    { label: 'Log out', path: '/logout' },
  ];
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="p-4 flex justify-between items-center border-b relative bg-white z-10 shadow-sm">
      {/* Mobile Menu Button - Only visible on small screens */}
      <button 
        className="sm:hidden mr-2 p-2 rounded-md hover:bg-gray-100"
        onClick={toggleMobileMenu}
      >
        <Menu className="h-5 w-5 text-gray-600" />
      </button>
      
      {/* Mobile Menu - Only shown when toggled */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 sm:hidden">
          <div className="py-2">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.path} 
                className="block px-4 py-3 text-gray-600 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative flex-1 max-w-md mx-2 sm:mx-4">
        <input 
          type="text" 
          placeholder="Search your videos..." 
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute left-3.5 top-2.5">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      
      {/* Right Side Actions */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full h-9 w-9">
          <HelpCircle className="h-5 w-5 text-gray-500" />
        </Button>
        
        <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 relative">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 rounded-full w-4 h-4 text-xs text-white flex items-center justify-center">3</span>
        </Button>
        
        {/* Language Selector */}
        <div className="hidden sm:flex items-center space-x-2 border-l border-gray-200 pl-3">
          <span className="text-sm font-medium">EN</span>
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-gray-200">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" 
              alt="English" 
              className="w-6 h-6 object-cover" 
            />
          </div>
        </div>
        
        {/* User Avatar */}
        {user && (
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 cursor-pointer" onClick={() => navigate('/account')}>
            {user.avatar ? (
              <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-teal-100 flex items-center justify-center text-teal-500 font-medium">
                {user.username.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
