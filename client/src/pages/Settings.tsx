import React from 'react';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sliders, Monitor, VideoIcon, Mic, Globe, Lock, KeyRound, PencilLine, LayoutGrid } from 'lucide-react';

const GeneralSettings = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Appearance</h3>
        
        <div className="bg-white p-4 rounded-lg border space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="theme">Theme</Label>
              <div className="text-sm text-gray-500">Choose your preferred theme</div>
            </div>
            <Select defaultValue="light">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="density">Layout Density</Label>
              <div className="text-sm text-gray-500">Adjust the spacing of UI elements</div>
            </div>
            <Select defaultValue="comfortable">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compact">Compact</SelectItem>
                <SelectItem value="comfortable">Comfortable</SelectItem>
                <SelectItem value="spacious">Spacious</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Language & Region</h3>
        
        <div className="bg-white p-4 rounded-lg border space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="language">Language</Label>
              <div className="text-sm text-gray-500">Choose your preferred language</div>
            </div>
            <Select defaultValue="en">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <div className="text-sm text-gray-500">Set your local timezone</div>
            </div>
            <Select defaultValue="utc">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                <SelectItem value="est">Eastern Time (GMT-5)</SelectItem>
                <SelectItem value="pst">Pacific Time (GMT-8)</SelectItem>
                <SelectItem value="ist">India (GMT+5:30)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Dashboard Preferences</h3>
        
        <div className="bg-white p-4 rounded-lg border space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="startPage">Start Page</Label>
              <div className="text-sm text-gray-500">Choose which page to show when you log in</div>
            </div>
            <Select defaultValue="home">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="record">Record</SelectItem>
                <SelectItem value="team">Team</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="recentItems">Recent Items</Label>
              <div className="text-sm text-gray-500">Number of recent items to show</div>
            </div>
            <Select defaultValue="5">
              <SelectTrigger className="w-20">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="20">20</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecordingSettings = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Video Settings</h3>
        
        <div className="bg-white p-4 rounded-lg border space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="resolution">Recording Resolution</Label>
              <div className="text-sm text-gray-500">Choose your preferred resolution</div>
            </div>
            <Select defaultValue="720p">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="480p">480p</SelectItem>
                <SelectItem value="720p">720p HD</SelectItem>
                <SelectItem value="1080p">1080p Full HD</SelectItem>
                <SelectItem value="1440p">1440p QHD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="quality">Recording Quality</Label>
              <div className="text-sm text-gray-500">Higher quality uses more storage</div>
            </div>
            <Select defaultValue="high">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="ultra">Ultra</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Auto-optimize for bandwidth</Label>
              <div className="text-sm text-gray-500">Adjust quality based on your connection</div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Show cursor in recordings</Label>
              <div className="text-sm text-gray-500">Include mouse cursor in screen recordings</div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Audio Settings</h3>
        
        <div className="bg-white p-4 rounded-lg border space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="mic">Microphone</Label>
              <div className="text-sm text-gray-500">Select which microphone to use</div>
            </div>
            <Select defaultValue="default">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default Microphone</SelectItem>
                <SelectItem value="builtin">Built-in Microphone</SelectItem>
                <SelectItem value="external">External Microphone</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Noise suppression</Label>
              <div className="text-sm text-gray-500">Reduce background noise in recordings</div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Echo cancellation</Label>
              <div className="text-sm text-gray-500">Reduce echo in recordings</div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Storage</h3>
        
        <div className="bg-white p-4 rounded-lg border space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="storage">Storage Location</Label>
              <div className="text-sm text-gray-500">Choose where to store your recordings</div>
            </div>
            <Select defaultValue="cloud">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cloud">Cloud</SelectItem>
                <SelectItem value="local">Local</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Auto-delete after 30 days</Label>
              <div className="text-sm text-gray-500">Save storage by removing old recordings</div>
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacySettings = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Privacy Controls</h3>
        
        <div className="bg-white p-4 rounded-lg border space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Make recordings private by default</Label>
              <div className="text-sm text-gray-500">Only you can see your recordings</div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Require password for shared recordings</Label>
              <div className="text-sm text-gray-500">Add password protection to shared videos</div>
            </div>
            <Switch />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="permissions">Default sharing permissions</Label>
              <div className="text-sm text-gray-500">Set who can view your recordings</div>
            </div>
            <Select defaultValue="team">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="team">Team only</SelectItem>
                <SelectItem value="anyone">Anyone with link</SelectItem>
                <SelectItem value="public">Public</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Data & Analytics</h3>
        
        <div className="bg-white p-4 rounded-lg border space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Allow usage analytics</Label>
              <div className="text-sm text-gray-500">Help us improve by sending anonymous usage data</div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Show view statistics</Label>
              <div className="text-sm text-gray-500">See how many views your recordings get</div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-3">
        <Button variant="outline">Reset to Defaults</Button>
        <Button variant="default" className="bg-teal-500 hover:bg-teal-600">Save Changes</Button>
      </div>
    </div>
  );
};

const Settings: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <Header />
      
      <div className="p-4 sm:p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <Tabs defaultValue="general" className="w-full">
          <div className="flex overflow-auto pb-2 mb-6">
            <TabsList className="inline-flex">
              <TabsTrigger value="general" className="flex items-center gap-2">
                <Sliders className="h-4 w-4" />
                <span>General</span>
              </TabsTrigger>
              <TabsTrigger value="recording" className="flex items-center gap-2">
                <VideoIcon className="h-4 w-4" />
                <span>Recording</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Privacy</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="bg-gray-50 rounded-lg">
            <TabsContent value="general">
              <GeneralSettings />
            </TabsContent>
            
            <TabsContent value="recording">
              <RecordingSettings />
            </TabsContent>
            
            <TabsContent value="privacy">
              <PrivacySettings />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;