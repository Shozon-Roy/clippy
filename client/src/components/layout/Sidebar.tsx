import React from 'react';
import { useLocation } from 'wouter';
import { 
  Home, 
  Video, 
  User, 
  Users, 
  Settings, 
  LogOut,
  HelpCircle,
  Zap
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, path, active }) => {
  const [, navigate] = useLocation();
  
  return (
    <a 
      href={path} 
      className={`flex items-center px-5 py-3 ${active 
        ? 'bg-teal-500 text-white rounded-r-full transition-colors' 
        : 'text-gray-700 hover:bg-[#C5F1E5] rounded-r-full transition-colors'} mb-2 mx-2 group`}
      onClick={(e) => {
        e.preventDefault();
        navigate(path);
      }}
    >
      <div className={`w-8 h-8 flex items-center justify-center ${active ? 'rounded-full bg-white' : 'group-hover:bg-white/60 rounded-full'}`}>
        {React.cloneElement(icon as React.ReactElement, { 
          className: `h-5 w-5 ${active ? 'text-teal-500' : 'group-hover:text-teal-600'}` 
        })}
      </div>
      <span className="ml-3 font-medium">{label}</span>
    </a>
  );
};

const Sidebar: React.FC = () => {
  const [location] = useLocation();
  
  const mainNavItems = [
    { icon: <Home />, label: 'Home', path: '/' },
    { icon: <Video />, label: 'Start record', path: '/record' },
    { icon: <User />, label: 'Account', path: '/account' },
    { icon: <Users />, label: 'Team', path: '/team' }
  ];
  
  const bottomNavItems = [
    { icon: <Settings />, label: 'Settings', path: '/settings' },
    { icon: <HelpCircle />, label: 'Help', path: '/help' },
    { icon: <LogOut />, label: 'Log out', path: '/logout' }
  ];
  
  return (
    <div className="w-48 bg-[#E0FAF5] flex-shrink-0 min-h-screen hidden sm:flex flex-col">
      <div className="px-5 py-6 flex items-center">
        <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center mr-2">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-teal-500">Clippy</h1>
      </div>
      
      <nav className="mt-6 flex-1">
        <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Main</div>
        {mainNavItems.map((item, index) => (
          <NavItem 
            key={index}
            icon={item.icon}
            label={item.label}
            path={item.path}
            active={location === item.path}
          />
        ))}
        
        <div className="mt-8 mb-2 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Pro Features</div>
        <div className="mx-4 mb-4 bg-teal-100 rounded-lg p-3">
          <div className="text-xs font-medium text-teal-800 mb-1">Upgrade to Pro</div>
          <div className="text-xs text-teal-700 mb-2">Get unlimited recording time and team features</div>
          <button className="w-full py-1.5 bg-teal-500 text-white rounded-md text-xs font-medium hover:bg-teal-600 transition-colors">
            Upgrade Now
          </button>
        </div>
      </nav>
      
      <div className="mb-6">
        {bottomNavItems.map((item, index) => (
          <NavItem 
            key={index}
            icon={item.icon}
            label={item.label}
            path={item.path}
            active={location === item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
