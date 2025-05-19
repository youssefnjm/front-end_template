
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import IdeaCard from '@/components/ideas/IdeaCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const ProfilePage: React.FC = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    bio: 'Tech entrepreneur and product manager with 5+ years of experience in SaaS and mobile apps. Passionate about AI and solving real-world problems.',
    avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    role: 'Founder',
    location: 'San Francisco, CA',
    website: 'johndoe.com',
    twitter: '@johndoe',
    linkedin: 'linkedin.com/in/johndoe',
  };

  // Mock ideas data
  const ideas = [
    {
      id: '1',
      title: 'AI-powered Resume Builder',
      description: 'A tool that uses AI to help job seekers create professional resumes tailored to specific job descriptions and industries.',
      categories: ['SaaS', 'AI', 'Career'],
      author: {
        name: user.name,
        avatar: user.avatar,
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
        name: user.name,
        avatar: user.avatar,
        initials: 'JD',
      },
      likes: 17,
      comments: 5,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="ideas">My Ideas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-8 pt-6">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <Badge variant="outline">{user.role}</Badge>
                </div>
                <p className="text-gray-600">@{user.username}</p>
                <p>{user.bio}</p>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {user.location}
                  </span>
                  <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    {user.website}
                  </a>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm">Edit Profile</Button>
                </div>
              </div>
            </div>
            
            {/* Profile Edit Form */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your profile information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue={user.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue={user.username} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={user.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select defaultValue={user.role.toLowerCase()}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="founder">Founder</SelectItem>
                          <SelectItem value="mentor">Mentor</SelectItem>
                          <SelectItem value="investor">Investor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue={user.location} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" defaultValue={user.website} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input id="twitter" defaultValue={user.twitter} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input id="linkedin" defaultValue={user.linkedin} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Biography</Label>
                      <Textarea id="bio" defaultValue={user.bio} rows={4} />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ideas" className="space-y-6 pt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">My Ideas</h2>
              <Button asChild>
                <Link to="/post-idea">Post New Idea</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ideas.map((idea) => (
                <IdeaCard key={idea.id} {...idea} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
