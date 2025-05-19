
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import IdeaCard from '@/components/ideas/IdeaCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data
  const recentIdeas = [
    {
      id: '1',
      title: 'AI-powered Resume Builder',
      description: 'A tool that uses AI to help job seekers create professional resumes tailored to specific job descriptions and industries.',
      categories: ['SaaS', 'AI', 'Career'],
      author: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
        initials: 'JD',
      },
      likes: 24,
      comments: 8,
    },
    {
      id: '2',
      title: 'Local Food Delivery Platform',
      description: 'A marketplace connecting home cooks with local customers, enabling people to buy homemade food from their neighbors.',
      categories: ['Marketplace', 'Food', 'Local'],
      author: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
        initials: 'JD',
      },
      likes: 17,
      comments: 5,
    },
  ];

  const stats = [
    { title: 'Ideas Posted', value: '4' },
    { title: 'Total Feedback', value: '32' },
    { title: 'Total Likes', value: '78' },
    { title: 'Validation Score', value: '72%' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome, John!</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your ideas</p>
          </div>
          <Button asChild>
            <Link to="/post-idea" className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Post New Idea
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Ideas */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Your Recent Ideas</CardTitle>
            <CardDescription>
              Your recently posted ideas and their engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentIdeas.map((idea) => (
                <IdeaCard key={idea.id} {...idea} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link to="/post-idea">View All Your Ideas</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Suggested Tools */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Suggested Tools</CardTitle>
            <CardDescription>
              Tools to help develop your ideas further
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Problem-Solution Checker</h3>
                  <p className="text-sm text-gray-600 mb-4">Validate if your solution actually solves the problem</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/tools">Start</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Market Map Generator</h3>
                  <p className="text-sm text-gray-600 mb-4">Generate a map of your competitors and market position</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/tools">Start</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Feedback</h3>
                  <p className="text-sm text-gray-600 mb-4">Get instant AI-powered feedback on your startup idea</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/ai-chat">Start</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
