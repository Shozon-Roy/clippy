import React from 'react';
import Header from '@/components/layout/Header';
import { useVideos, useTeamMembers, useStats } from '@/lib/data';
import { Users, Video, MessageSquare } from 'lucide-react';

const SubscriptionBanner: React.FC = () => {
  return (
    <div className="bg-[#3B82F6] rounded-lg p-5 mb-6 text-white">
      <h2 className="text-xl font-medium mb-1">To record more than 50 videos they need to subscribe to a monthly paid plan.</h2>
      <p className="text-blue-100 mb-4">Listen to trending books in this months</p>
      <button className="bg-gray-900 hover:bg-black text-white font-medium py-2 px-6 rounded-md">Subscribe</button>
    </div>
  );
};

const VideoSection: React.FC = () => {
  const { data: videos, isLoading } = useVideos();
  
  if (isLoading || !videos) {
    return (
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Video</h2>
          <a href="#" className="text-sm text-gray-500 hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="rounded-lg overflow-hidden animate-pulse">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-2">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Video</h2>
        <a href="#" className="text-sm text-gray-500 hover:underline">View all</a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-32 bg-gray-200 relative">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="font-medium text-sm">{video.title}</h3>
              <p className="text-xs text-gray-500">{video.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamMemberSection: React.FC = () => {
  const { data: teamMembers, isLoading: loadingMembers } = useTeamMembers();
  const { data: stats, isLoading: loadingStats } = useStats();
  
  if (loadingMembers || loadingStats || !teamMembers || !stats) {
    return <div className="animate-pulse h-64 bg-gray-100 rounded-lg"></div>;
  }
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Team Member</h2>
        <a href="#" className="text-sm text-gray-500 hover:underline">View all</a>
      </div>
      
      <div className="flex flex-wrap gap-6 mb-8 justify-center sm:justify-start">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-100 mb-2">
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-sm font-medium">{member.name}</span>
          </div>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-[#E0FAF5] p-4 rounded-lg flex items-center">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
            <Video className="h-6 w-6 text-teal-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">{stats.videoCount}</div>
            <div className="text-sm text-gray-500">Videos</div>
          </div>
        </div>
        
        <div className="bg-[#E0FAF5] p-4 rounded-lg flex items-center">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
            <Users className="h-6 w-6 text-teal-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">{stats.memberCount}</div>
            <div className="text-sm text-gray-500">Members</div>
          </div>
        </div>
        
        <div className="bg-[#E0FAF5] p-4 rounded-lg flex items-center">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
            <MessageSquare className="h-6 w-6 text-teal-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">{stats.commentCount}</div>
            <div className="text-sm text-gray-500">Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex-1 bg-white overflow-auto">
      <Header />
      
      <div className="p-4">
        <SubscriptionBanner />
        <VideoSection />
        <TeamMemberSection />
      </div>
    </div>
  );
};

export default Home;
