
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, FileText, Image, MessageSquare } from 'lucide-react';

const ToolsPage: React.FC = () => {
  const tools = [
    {
      id: '1',
      title: 'Problem-Solution Checker',
      description: 'Validate whether your solution actually solves the target problem and if there is real market demand.',
      icon: <Search className="h-10 w-10 text-blue-600" />,
      category: 'Market Research',
    },
    {
      id: '2',
      title: 'Market Map Generator',
      description: 'Visualize your competitive landscape and identify opportunities in the market.',
      icon: <Image className="h-10 w-10 text-blue-600" />,
      category: 'Market Research',
    },
    {
      id: '3',
      title: 'Pitch Deck Generator',
      description: 'Create a professional pitch deck for your startup idea with customizable templates.',
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      category: 'Presentation',
    },
    {
      id: '4',
      title: 'Monetization Advisor',
      description: 'Explore different revenue models and pricing strategies for your startup idea.',
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
      category: 'Business Model',
    },
    {
      id: '5',
      title: 'Go-to-Market Planner',
      description: 'Develop a comprehensive strategy for launching your product to the market.',
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      category: 'Strategy',
    },
    {
      id: '6',
      title: 'Target Audience Analyzer',
      description: 'Define and understand your ideal customer profiles with demographic insights.',
      icon: <Search className="h-10 w-10 text-blue-600" />,
      category: 'Market Research',
    },
    {
      id: '7',
      title: 'Financial Forecast Generator',
      description: 'Create realistic financial projections for your startup based on your business model.',
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      category: 'Finance',
    },
    {
      id: '8',
      title: 'Founder DNA Analyzer',
      description: 'Assess your strengths and weaknesses as a founder and identify potential co-founder profiles.',
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
      category: 'Team',
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Startup Tools</h1>
          <p className="text-gray-600 mt-1">Tools to help you validate and refine your startup ideas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <Card key={tool.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-6 flex justify-center">
                {tool.icon}
              </div>
              <CardContent className="p-6">
                <div className="mb-1">
                  <span className="text-xs font-medium text-gray-500">{tool.category}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <Button className="w-full" size="sm">Start Tool</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Need a custom tool?</h2>
          <p className="text-gray-700 mb-4">
            If you need help with a specific aspect of your startup idea, chat with our AI assistant for personalized guidance and insights.
          </p>
          <Button variant="outline" className="bg-white">
            Chat with AI Assistant
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ToolsPage;
