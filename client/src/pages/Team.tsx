import React from 'react';
import Header from '@/components/layout/Header';
import { useTeamMembers } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Plus, Mail, MoreVertical, Video, Clock, MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TeamMembers = () => {
  const { data: teamMembers, isLoading } = useTeamMembers();
  
  if (isLoading || !teamMembers) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse bg-white rounded-lg p-6 h-44"></div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member) => (
        <div key={member.id} className="bg-white rounded-lg p-6 shadow-sm flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden mr-3">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h3 className="font-medium">{member.name}</h3>
                <div className="text-sm text-gray-500">Product Designer</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex space-x-2 mb-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <Video className="h-3 w-3" />
              <span>Call</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>Message</span>
            </Button>
          </div>
          
          <div className="mt-auto">
            <div className="text-sm text-gray-500 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>Last active: 2 hours ago</span>
            </div>
          </div>
        </div>
      ))}
      
      <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center h-full">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-3">
          <Plus className="h-6 w-6 text-gray-400" />
        </div>
        <h3 className="font-medium mb-1">Add New Member</h3>
        <p className="text-sm text-gray-500 text-center mb-4">Invite a team member to collaborate</p>
        <Button className="bg-teal-500 hover:bg-teal-600">Invite Member</Button>
      </div>
    </div>
  );
};

const TeamActivities = () => {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg p-4 flex shadow-sm">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
            <img 
              src={`https://i.pravatar.cc/150?img=${i + 10}`} 
              alt={`Team member ${i + 1}`} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium">Team Member {i + 1}</h4>
              <span className="text-xs text-gray-500">{i + 1} hour{i !== 0 ? 's' : ''} ago</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              {i % 3 === 0 ? 'Created a new video recording' : 
               i % 3 === 1 ? 'Commented on your recording' : 
               'Shared a recording with the team'}
            </p>
            {i % 2 === 0 && (
              <div className="rounded-lg overflow-hidden h-32 bg-gray-100">
                <img 
                  src={`https://picsum.photos/seed/${i + 10}/500/300`} 
                  alt="Activity preview" 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const SharedRecordings = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="aspect-video bg-gray-200 relative">
            <img 
              src={`https://picsum.photos/seed/${i + 20}/500/300`} 
              alt={`Shared recording ${i + 1}`} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
              3:{(i + 10).toString().padStart(2, '0')}
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-sm">Shared Recording {i + 1}</h3>
                <p className="text-xs text-gray-500">Shared by Team Member {i % 4 + 1}</p>
              </div>
              <div className="flex -space-x-2">
                {[...Array(i % 3 + 1)].map((_, j) => (
                  <div key={j} className="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                    <img 
                      src={`https://i.pravatar.cc/150?img=${j + 15}`} 
                      alt={`Team member ${j + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <div className="flex items-center mr-3">
                <Clock className="h-3 w-3 mr-1" />
                <span>2 days ago</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-3 w-3 mr-1" />
                <span>{i % 5} comments</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <Header />
      
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h1 className="text-2xl font-bold mb-2 sm:mb-0">Team</h1>
          
          <div className="flex space-x-3">
            <Button variant="outline" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Invite</span>
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600 flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Member</span>
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Marketing Team</h2>
              <p className="text-sm text-gray-500">12 Members</p>
            </div>
            <Button variant="outline">Edit Team</Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['Design', 'Marketing', 'Branding', 'Social Media', 'Video Production'].map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-700 text-xs rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <Tabs defaultValue="members" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="shared">Shared Recordings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="members">
            <TeamMembers />
          </TabsContent>
          
          <TabsContent value="activity">
            <TeamActivities />
          </TabsContent>
          
          <TabsContent value="shared">
            <SharedRecordings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Team;