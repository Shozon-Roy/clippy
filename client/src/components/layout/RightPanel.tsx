import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Clock, Calendar, BarChart, ArrowRight, Share2, MessageSquare, ThumbsUp, Settings, Download } from 'lucide-react';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { useComments, useUser, recordingLimit, useStats } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const UserProfile: React.FC = () => {
  const { data: user, isLoading } = useUser();
  
  if (isLoading || !user) {
    return (
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
        <div className="ml-3 space-y-2">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-16 bg-gray-100 rounded animate-pulse" />
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-500 overflow-hidden">
          {user.avatar ? (
            <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
          ) : (
            <div className="text-lg font-semibold">{user.username.charAt(0).toUpperCase()}</div>
          )}
        </div>
        <div className="ml-3">
          <div className="font-medium">{user.username}</div>
          <div className="text-xs text-gray-500">Product Designer</div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
        <div className="bg-gray-50 rounded-md p-2">
          <div className="text-lg font-semibold text-gray-800">12</div>
          <div className="text-gray-500">Videos</div>
        </div>
        <div className="bg-gray-50 rounded-md p-2">
          <div className="text-lg font-semibold text-gray-800">1.4k</div>
          <div className="text-gray-500">Views</div>
        </div>
        <div className="bg-gray-50 rounded-md p-2">
          <div className="text-lg font-semibold text-gray-800">8</div>
          <div className="text-gray-500">Shares</div>
        </div>
      </div>
      
      <Button variant="outline" size="sm" className="w-full text-xs">
        View Profile
      </Button>
    </div>
  );
};

const RecordingPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium">Recent Recording</h3>
        <Badge variant="outline" className="text-xs font-normal text-teal-600 bg-teal-50 border-teal-100">
          2 days ago
        </Badge>
      </div>
      
      <div className="rounded-lg overflow-hidden mb-3 aspect-video relative bg-gray-100">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
          alt="Recording thumbnail" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <button 
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-500 shadow-lg"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          03:24
        </div>
      </div>
      
      <h4 className="font-medium text-sm mb-1">Product Walkthrough Demo</h4>
      <div className="text-xs text-gray-500 mb-3">Presentation for the design team</div>
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500">
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500">
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500">
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const CommentsSection: React.FC = () => {
  const { data: comments, isLoading } = useComments();
  
  if (isLoading || !comments) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Recent Comments</h3>
          <Button variant="ghost" size="sm" className="h-7 text-xs text-teal-600">View all</Button>
        </div>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex animate-pulse">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 mr-3" />
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-100 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Recent Comments</h3>
        <Button variant="ghost" size="sm" className="h-7 text-xs text-teal-600">View all</Button>
      </div>
      
      <div className="space-y-4">
        {comments.slice(0, 3).map((comment) => (
          <div key={comment.id} className="flex">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mr-3">
              <img 
                src={comment.image} 
                alt={comment.author} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-medium">{comment.author}</h4>
                <span className="text-xs text-gray-400">{comment.timestamp}</span>
              </div>
              <p className="text-xs text-gray-600 mb-1">{comment.title}</p>
              <div className="flex items-center text-xs text-gray-400 space-x-2">
                <button className="hover:text-gray-600">Reply</button>
                <span>•</span>
                <button className="hover:text-gray-600">Like</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Separator className="my-4" />
      
      <div className="relative">
        <input 
          type="text" 
          placeholder="Add a comment..." 
          className="w-full pl-3 pr-10 py-2 text-sm rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
        <Button variant="ghost" size="icon" className="absolute right-1 top-1 h-6 w-6 text-gray-400">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const RecordingLimitTracker: React.FC = () => {
  const { data: stats } = useStats();
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Recording Limits</h3>
        <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex items-center mb-6">
        <ProgressCircle 
          value={recordingLimit.current} 
          max={recordingLimit.total} 
          size={60}
          strokeWidth={8}
          indicatorColor="#14b8a6"
          trackColor="#e2e8f0"
          className="mr-4"
        >
          <span className="text-sm font-semibold">{Math.round((recordingLimit.current / recordingLimit.total) * 100)}%</span>
        </ProgressCircle>
        
        <div>
          <div className="text-sm font-medium mb-0.5">
            {recordingLimit.current} of {recordingLimit.total} used
          </div>
          <div className="text-xs flex items-center text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            <span>Resets in 3 days</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-xs mb-3">
        <div className="flex items-center text-gray-500">
          <Calendar className="h-3 w-3 mr-1" />
          <span>This week's usage</span>
        </div>
        <div className="flex items-center text-gray-500">
          <BarChart className="h-3 w-3 mr-1" />
          <span>24 mins total</span>
        </div>
      </div>
      
      <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
        Upgrade to Pro
      </Button>
    </div>
  );
};

const RightPanel: React.FC = () => {
  return (
    <div className="w-72 bg-white border-l border-gray-200 p-5 hidden lg:block flex-shrink-0 overflow-auto">
      <UserProfile />
      <RecordingPlayer />
      <CommentsSection />
      <RecordingLimitTracker />
    </div>
  );
};

export default RightPanel;
