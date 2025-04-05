import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  HelpCircle,
  FileText,
  Video,
  MessageCircle,
  Search,
  Book,
  Play,
  Settings,
  Users,
  Upload,
  DownloadCloud,
  Share2,
  ArrowRight
} from 'lucide-react';

const FaqSection = () => {
  const faqs = [
    {
      question: "How do I start recording my screen?",
      answer: "To start recording your screen, click on the 'Start record' button in the sidebar or go to the Record page. Select the screen or application window you want to record, adjust your settings if needed, then click the red 'Start Recording' button to begin."
    },
    {
      question: "What's the maximum recording time?",
      answer: "Free accounts can record up to 30 minutes per video and have a weekly limit of 120 minutes total recording time. Upgrade to Pro for unlimited recording time and no weekly limits."
    },
    {
      question: "How do I share my recordings with my team?",
      answer: "After creating a recording, go to the video details page and click the 'Share' button. You can choose to share with specific team members, create a shareable link, or add it to a team workspace for everyone to access."
    },
    {
      question: "Can I download my recordings to my computer?",
      answer: "Yes, you can download any of your recordings to your computer. Just open the video you want to download and click the 'Download' button in the player controls. You can choose different quality options for the download."
    },
    {
      question: "How do I add comments to a specific timestamp in a video?",
      answer: "While watching a video, pause at the moment you want to comment on. Click the 'Add Comment' button below the video or use the comment icon in the player. Your comment will be linked to that specific timestamp in the video."
    },
    {
      question: "What video formats are supported for upload?",
      answer: "Clippy supports most common video formats including MP4, MOV, AVI, and WebM. For best performance, we recommend using MP4 with H.264 encoding. Maximum file size is 2GB for free accounts and 10GB for Pro accounts."
    },
    {
      question: "How do I organize my videos into collections?",
      answer: "On the Home page, click the 'Create Collection' button. Give your collection a name and description, then you can add videos by selecting them from your library or dragging them into the collection. You can also organize collections by project or team."
    },
    {
      question: "Can I restrict who can view my videos?",
      answer: "Yes, you can set permissions for each video. In the video settings, choose from options like 'Private' (only you), 'Team' (only your team members), 'Password protected' (requires a password), or 'Public' (anyone with the link)."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 border-t pt-6">
        <h3 className="font-medium mb-2">Still have questions?</h3>
        <Button className="bg-teal-500 hover:bg-teal-600">Contact Support</Button>
      </div>
    </div>
  );
};

const GuidesSection = () => {
  const guides = [
    {
      title: "Getting Started with Clippy",
      description: "Learn the basics of recording, editing, and sharing videos",
      icon: <Play className="h-5 w-5 text-teal-500" />,
      time: "5 min read"
    },
    {
      title: "Screen Recording Tips & Tricks",
      description: "Pro tips for creating high-quality screen recordings",
      icon: <Video className="h-5 w-5 text-teal-500" />,
      time: "8 min read"
    },
    {
      title: "Team Collaboration Guide",
      description: "How to effectively collaborate with your team using Clippy",
      icon: <Users className="h-5 w-5 text-teal-500" />,
      time: "7 min read"
    },
    {
      title: "Advanced Video Settings",
      description: "Customize your recording settings for optimal quality",
      icon: <Settings className="h-5 w-5 text-teal-500" />,
      time: "6 min read"
    },
    {
      title: "Uploading External Videos",
      description: "How to upload and manage videos from other sources",
      icon: <Upload className="h-5 w-5 text-teal-500" />,
      time: "4 min read"
    },
    {
      title: "Managing Your Video Library",
      description: "Organization techniques for your growing video collection",
      icon: <Book className="h-5 w-5 text-teal-500" />,
      time: "5 min read"
    }
  ];

  const videoTutorials = [
    {
      title: "Complete Walkthrough",
      description: "A comprehensive tour of all Clippy features",
      duration: "12:45",
      thumbnail: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Recording Best Practices",
      description: "How to create professional screen recordings",
      duration: "08:32",
      thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Team Permissions Setup",
      description: "Setting up your team and managing permissions",
      duration: "06:18",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Help Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start mb-2">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mr-3 flex-shrink-0">
                  {guide.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{guide.title}</h3>
                  <p className="text-xs text-gray-500">{guide.time}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
              <div className="flex items-center text-teal-500 text-sm font-medium">
                <span>Read guide</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">Video Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videoTutorials.map((tutorial, index) => (
            <div key={index} className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-video relative">
                <img src={tutorial.thumbnail} alt={tutorial.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Play className="h-5 w-5 text-teal-500 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {tutorial.duration}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm">{tutorial.title}</h3>
                <p className="text-xs text-gray-500">{tutorial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SupportSection = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
        <p className="text-gray-600 mb-6">
          Our support team is here to help with any questions or issues you may have.
          We usually respond within 24 hours during business days.
        </p>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input id="email" type="email" placeholder="your.email@example.com" />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <Input id="subject" placeholder="What is your question about?" />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              id="message" 
              rows={5} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Please describe your issue or question in detail"
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <input 
              id="attach-files" 
              type="checkbox" 
              className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
            />
            <label htmlFor="attach-files" className="ml-2 block text-sm text-gray-700">
              I would like to attach files to explain my issue
            </label>
          </div>
          
          <Button className="bg-teal-500 hover:bg-teal-600 w-full sm:w-auto">Submit Request</Button>
        </form>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <MessageCircle className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Live Chat</h3>
          <p className="text-sm text-gray-600 mb-4">Chat with our support team in real-time during business hours.</p>
          <Button variant="outline" className="w-full">Start Chat</Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Book className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="font-semibold mb-2">Knowledge Base</h3>
          <p className="text-sm text-gray-600 mb-4">Browse our extensive collection of articles and tutorials.</p>
          <Button variant="outline" className="w-full">Explore Articles</Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-amber-600" />
          </div>
          <h3 className="font-semibold mb-2">Community Forum</h3>
          <p className="text-sm text-gray-600 mb-4">Connect with other users and share tips and solutions.</p>
          <Button variant="outline" className="w-full">Join Community</Button>
        </div>
      </div>
    </div>
  );
};

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <Header />
      
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-teal-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Clippy Help Center</h1>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Find answers to your questions and learn how to get the most out of Clippy
          </p>
          
          <div className="relative max-w-lg mx-auto">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help articles, tutorials, FAQs..."
              className="pl-10 h-12"
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg border shadow-sm flex items-center cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
              <FileText className="h-5 w-5 text-teal-500" />
            </div>
            <div>
              <h3 className="font-medium">Getting Started</h3>
              <p className="text-sm text-gray-500">Learn the basics</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border shadow-sm flex items-center cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <Video className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-medium">Recording Features</h3>
              <p className="text-sm text-gray-500">Recording tips and settings</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border shadow-sm flex items-center cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
              <Share2 className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <h3 className="font-medium">Sharing & Collaboration</h3>
              <p className="text-sm text-gray-500">Share with your team</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <Tabs defaultValue="faq">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="faq" className="rounded-md">FAQs</TabsTrigger>
              <TabsTrigger value="guides" className="rounded-md">Guides & Tutorials</TabsTrigger>
              <TabsTrigger value="support" className="rounded-md">Contact Support</TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              <TabsContent value="faq">
                <FaqSection />
              </TabsContent>
              
              <TabsContent value="guides">
                <GuidesSection />
              </TabsContent>
              
              <TabsContent value="support">
                <SupportSection />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;