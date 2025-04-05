import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { Video, Mic, Camera, Pause, Play, Settings, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { recordingLimit } from '@/lib/data';
import { ProgressCircle } from '@/components/ui/progress-circle';

const RecordOptions = () => {
  const [selectedOption, setSelectedOption] = useState<'screen' | 'camera' | 'both'>('screen');
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-xl font-semibold mb-4">Recording Options</h2>
      
      <div className="flex flex-wrap gap-4">
        <Button
          variant={selectedOption === 'screen' ? 'default' : 'outline'} 
          className={`flex items-center space-x-2 px-4 py-6 ${selectedOption === 'screen' ? 'bg-teal-500 hover:bg-teal-600' : ''}`}
          onClick={() => setSelectedOption('screen')}
        >
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
            <Video className="h-5 w-5 text-teal-500" />
          </div>
          <div className="text-left">
            <div className="font-medium">Screen Only</div>
            <div className="text-xs text-gray-500">Record your screen</div>
          </div>
        </Button>
        
        <Button
          variant={selectedOption === 'camera' ? 'default' : 'outline'} 
          className={`flex items-center space-x-2 px-4 py-6 ${selectedOption === 'camera' ? 'bg-teal-500 hover:bg-teal-600' : ''}`}
          onClick={() => setSelectedOption('camera')}
        >
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
            <Camera className="h-5 w-5 text-teal-500" />
          </div>
          <div className="text-left">
            <div className="font-medium">Camera Only</div>
            <div className="text-xs text-gray-500">Record your camera</div>
          </div>
        </Button>
        
        <Button
          variant={selectedOption === 'both' ? 'default' : 'outline'} 
          className={`flex items-center space-x-2 px-4 py-6 ${selectedOption === 'both' ? 'bg-teal-500 hover:bg-teal-600' : ''}`}
          onClick={() => setSelectedOption('both')}
        >
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
            <div className="relative">
              <Video className="h-5 w-5 text-teal-500" />
              <Camera className="h-3 w-3 text-teal-500 absolute -bottom-1 -right-1" />
            </div>
          </div>
          <div className="text-left">
            <div className="font-medium">Screen & Camera</div>
            <div className="text-xs text-gray-500">Record both</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

const RecordingPreview = () => {
  const [isRecording, setIsRecording] = useState(false);
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Button>
        </div>
      </div>
      
      <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-gray-500">Camera preview will appear here</div>
          <div className="flex justify-center">
            <ProgressCircle 
              value={recordingLimit.current} 
              max={recordingLimit.total} 
              size={64}
              indicatorColor="text-teal-500"
            >
              <span className="text-sm font-medium">{recordingLimit.current}/{recordingLimit.total}</span>
            </ProgressCircle>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button 
          variant="outline" 
          size="lg" 
          className="rounded-full w-12 h-12 p-0 flex items-center justify-center"
        >
          <Mic className="h-5 w-5" />
        </Button>
        
        <Button 
          onClick={toggleRecording}
          className="rounded-full w-16 h-16 p-0 flex items-center justify-center bg-teal-500 hover:bg-teal-600"
        >
          {isRecording ? 
            <Pause className="h-8 w-8 text-white" /> : 
            <Play className="h-8 w-8 text-white" />
          }
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="rounded-full w-12 h-12 p-0 flex items-center justify-center"
        >
          <Camera className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

const RecentRecordings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Recordings</h2>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <Upload className="h-4 w-4" />
          <span>Upload</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="aspect-video bg-gray-200 relative">
              <img 
                src={`https://picsum.photos/seed/${item}/500/300`} 
                alt={`Recording ${item}`} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm">Recording {item}</h3>
              <p className="text-xs text-gray-500">Just now • 2:30</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Record: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <Header />
      
      <div className="p-4 sm:p-6 max-w-6xl mx-auto">
        <RecordOptions />
        <RecordingPreview />
        <RecentRecordings />
      </div>
    </div>
  );
};

export default Record;