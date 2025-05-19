
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import IdeaCard from '@/components/ideas/IdeaCard';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const ExplorePage: React.FC = () => {
  // Mock data
  const ideas = [
    {
      id: '1',
      title: 'AI-powered Resume Builder',
      description: 'A tool that uses AI to help job seekers create professional resumes tailored to specific job descriptions and industries.',
      categories: ['SaaS', 'AI', 'Career'],
      author: {
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
        initials: 'JS',
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
        name: 'Alex Chen',
        avatar: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
        initials: 'AC',
      },
      likes: 17,
      comments: 5,
    },
    {
      id: '3',
      title: 'Smart Home Energy Optimizer',
      description: 'An IoT device that monitors and optimizes energy usage in homes, reducing bills and environmental impact through AI-powered recommendations.',
      categories: ['IoT', 'CleanTech', 'AI'],
      author: {
        name: 'Naomi Parker',
        avatar: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
        initials: 'NP',
      },
      likes: 32,
      comments: 12,
    },
    {
      id: '4',
      title: 'Peer-to-Peer Skill Exchange Platform',
      description: "A platform where users can exchange skills and knowledge without money, based on a time-banking system where everyone's time is valued equally.",
      categories: ['EdTech', 'Marketplace', 'Social'],
      author: {
        name: 'Carlos Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        initials: 'CR',
      },
      likes: 45,
      comments: 23,
    },
    {
      id: '5',
      title: 'Virtual Reality Therapy Platform',
      description: 'A VR platform delivering therapeutic experiences for anxiety, PTSD, and phobias, making mental health treatment more accessible and effective.',
      categories: ['HealthTech', 'VR', 'Mental Health'],
      author: {
        name: 'Emma Taylor',
        avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        initials: 'ET',
      },
      likes: 56,
      comments: 15,
    },
    {
      id: '6',
      title: 'Subscription-based Plant Care Service',
      description: 'A service that delivers indoor plants to subscribers and provides ongoing care instructions and maintenance through an app.',
      categories: ['Subscription', 'Home', 'Sustainability'],
      author: {
        name: 'David Wilson',
        avatar: '',
        initials: 'DW',
      },
      likes: 19,
      comments: 7,
    },
  ];

  const popularCategories = [
    'AI', 'SaaS', 'Marketplace', 'HealthTech', 'EdTech', 
    'CleanTech', 'FinTech', 'IoT', 'Mobile', 'Social',
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Explore Ideas</h1>
            <p className="text-gray-600 mt-1">Discover and provide feedback on startup ideas</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Search</CardTitle>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search ideas..."
                    className="pl-8"
                  />
                </div>
              </div>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {popularCategories.map((category) => (
                    <Badge
                      key={category}
                      variant="secondary"
                      className="cursor-pointer hover:bg-secondary/80"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Filters */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Filter</CardTitle>
              </CardHeader>
              <div className="px-6 pb-6 space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Most Recent
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Most Popular
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Highest Rated
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Needs Feedback
                </Button>
              </div>
            </Card>
          </div>

          {/* Main content */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ideas.map((idea) => (
                <IdeaCard key={idea.id} {...idea} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" disabled>
                  &lt;
                </Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="icon">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ExplorePage;
