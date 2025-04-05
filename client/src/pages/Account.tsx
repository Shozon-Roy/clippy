import React from 'react';
import Header from '@/components/layout/Header';
import { useUser } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { User, CreditCard, Key, Bell, Shield } from 'lucide-react';

const ProfileForm = () => {
  const { data: user, isLoading } = useUser();
  
  if (isLoading || !user) {
    return <div className="animate-pulse p-6 bg-gray-100 rounded-lg h-64"></div>;
  }
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center space-y-3 md:w-1/3">
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.username} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="h-12 w-12 text-gray-500" />
              </div>
            )}
          </div>
          <Button variant="outline" className="w-full">Change Photo</Button>
        </div>
        
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue={user.username} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="user@example.com" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <textarea 
              id="bio" 
              rows={4} 
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              defaultValue="I'm a passionate creator and love to make videos."
            ></textarea>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button className="bg-teal-500 hover:bg-teal-600">Save Changes</Button>
      </div>
    </div>
  );
};

const BillingForm = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Current Plan</h3>
        
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xl font-bold text-teal-500">Free Plan</div>
            <div className="text-sm text-gray-500">5 recordings per week</div>
          </div>
          <Button variant="outline">Upgrade Plan</Button>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-medium mb-2">Plan Features</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-sm">
              <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              5 recordings per week
            </li>
            <li className="flex items-center text-sm">
              <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              720p HD recording quality
            </li>
            <li className="flex items-center text-sm">
              <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Basic editing tools
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
        
        <div className="flex items-center p-4 border rounded-lg mb-4">
          <CreditCard className="h-8 w-8 text-gray-400 mr-3" />
          <div className="flex-1">
            <div className="font-medium">No payment methods added</div>
            <div className="text-sm text-gray-500">Add a payment method to upgrade your plan</div>
          </div>
          <Button variant="outline" size="sm">Add Method</Button>
        </div>
      </div>
    </div>
  );
};

const SecurityForm = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Change Password</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" />
          </div>
          
          <Button className="bg-teal-500 hover:bg-teal-600">Update Password</Button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-medium">Protect your account with 2FA</div>
            <div className="text-sm text-gray-500">Add an extra layer of security to your account</div>
          </div>
          <Button variant="outline">Enable 2FA</Button>
        </div>
      </div>
    </div>
  );
};

const NotificationsForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <div className="font-medium">Email Notifications</div>
            <div className="text-sm text-gray-500">Get notifications via email</div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <div className="font-medium">New Comments</div>
            <div className="text-sm text-gray-500">Get notified when someone comments on your recording</div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <div className="font-medium">Team Invitations</div>
            <div className="text-sm text-gray-500">Get notified when you're invited to a team</div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between py-3">
          <div>
            <div className="font-medium">Marketing Emails</div>
            <div className="text-sm text-gray-500">Receive emails about new features and promotions</div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

const Account: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <Header />
      
      <div className="p-4 sm:p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-6">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Billing</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <TabsContent value="profile">
              <ProfileForm />
            </TabsContent>
            
            <TabsContent value="billing">
              <BillingForm />
            </TabsContent>
            
            <TabsContent value="security">
              <SecurityForm />
            </TabsContent>
            
            <TabsContent value="notifications">
              <NotificationsForm />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;