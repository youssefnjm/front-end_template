
import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageSquare, Share, BookmarkPlus } from 'lucide-react';

const IdeaDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data
  const idea = {
    id: id || '1',
    title: 'AI-powered Resume Builder',
    description: 'A tool that uses artificial intelligence to help job seekers create professional resumes tailored to specific job descriptions and industries.\n\nThe platform would analyze job postings to extract key skills and requirements, then help users highlight relevant experiences and skills in their resumes. It would also provide suggestions for improvements and help format the resume according to industry standards.\n\nKey features would include:\n- Job description analyzer\n- Skill matcher\n- ATS-friendly templates\n- Feedback on resume strength\n- Cover letter generator\n- Interview preparation tips based on resume content',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    categories: ['SaaS', 'AI', 'Career'],
    createdAt: '2023-05-15',
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      initials: 'JS',
      bio: 'Product manager with 5+ years of experience in SaaS products. Passionate about AI and automation.',
      role: 'Founder',
    },
    likes: 24,
    comments: [
      {
        id: '1',
        author: {
          name: 'Alex Chen',
          avatar: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
          initials: 'AC',
        },
        content: 'This is a great idea! Have you considered integrating with LinkedIn to pull professional experiences automatically?',
        createdAt: '2023-05-16',
      },
      {
        id: '2',
        author: {
          name: 'Emma Taylor',
          avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
          initials: 'ET',
        },
        content: 'I would pay for this service! The ATS-friendly templates would be extremely valuable.',
        createdAt: '2023-05-17',
      },
    ],
    aiScore: {
      overall: 85,
      market: 80,
      innovation: 75,
      feasibility: 90,
    },
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-3xl font-bold">{idea.title}</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <BookmarkPlus className="h-4 w-4" /> Save
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Share className="h-4 w-4" /> Share
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {idea.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
            <span className="text-sm text-gray-500">Posted on {idea.createdAt}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            {/* Idea description */}
            <Card>
              <CardContent className="pt-6">
                {idea.image && (
                  <div className="mb-6">
                    <img 
                      src={idea.image} 
                      alt={idea.title}
                      className="w-full rounded-md object-cover"
                      style={{ maxHeight: '300px' }}
                    />
                  </div>
                )}
                <div className="whitespace-pre-line">
                  {idea.description}
                </div>
                
                <div className="flex gap-4 mt-6 pt-6 border-t">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Heart className="h-4 w-4" /> Like ({idea.likes})
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" /> Comment ({idea.comments.length})
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Comments section */}
            <Card>
              <CardHeader>
                <CardTitle>Comments ({idea.comments.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Comment form */}
                <div className="space-y-2">
                  <Textarea placeholder="Share your thoughts or feedback..." rows={3} />
                  <div className="flex justify-end">
                    <Button>Post Comment</Button>
                  </div>
                </div>
                
                {/* Comments list */}
                <div className="space-y-6 pt-4">
                  {idea.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-4">
                      <Avatar>
                        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                        <AvatarFallback>{comment.author.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{comment.author.name}</span>
                          <span className="text-xs text-gray-500">{comment.createdAt}</span>
                        </div>
                        <p className="mt-1">{comment.content}</p>
                        <div className="mt-2">
                          <Button variant="ghost" size="sm">Reply</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author info */}
            <Card>
              <CardHeader>
                <CardTitle>Posted by</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={idea.author.avatar} alt={idea.author.name} />
                    <AvatarFallback>{idea.author.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{idea.author.name}</h3>
                    <Badge variant="outline" className="mt-1">{idea.author.role}</Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{idea.author.bio}</p>
              </CardContent>
            </Card>

            {/* AI score */}
            <Card>
              <CardHeader>
                <CardTitle>AI Validation Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Overall</span>
                      <span className="font-medium">{idea.aiScore.overall}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${idea.aiScore.overall}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Market Potential</span>
                      <span className="font-medium">{idea.aiScore.market}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${idea.aiScore.market}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Innovation</span>
                      <span className="font-medium">{idea.aiScore.innovation}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${idea.aiScore.innovation}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Feasibility</span>
                      <span className="font-medium">{idea.aiScore.feasibility}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${idea.aiScore.feasibility}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-6">
                  Get AI Feedback
                </Button>
              </CardContent>
            </Card>

            {/* Related ideas */}
            <Card>
              <CardHeader>
                <CardTitle>Related Ideas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-blue-600 hover:underline">AI Interview Coach</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    An AI tool that simulates job interviews and provides feedback on responses.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-blue-600 hover:underline">Career Path Advisor</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    AI-powered platform that suggests career paths based on skills and interests.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default IdeaDetailsPage;
