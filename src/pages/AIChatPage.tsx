
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Plus, Send } from 'lucide-react';

const AIChatPage: React.FC = () => {
  const [message, setMessage] = useState('');
  
  // Mock chat history data
  const chatSessions = [
    { id: '1', title: 'How do I monetize an AI app?', date: '2023-05-10' },
    { id: '2', title: 'Market research for my startup', date: '2023-05-08' },
    { id: '3', title: 'Improving user retention', date: '2023-05-05' },
    { id: '4', title: 'Competitor analysis help', date: '2023-05-02' },
    { id: '5', title: 'Creating a pitch deck', date: '2023-04-28' },
  ];

  const currentChatMessages = [
    { 
      id: '1', 
      sender: 'user', 
      content: 'How do I monetize an AI app?', 
      timestamp: '10:05 AM' 
    },
    { 
      id: '2', 
      sender: 'ai', 
      content: `There are several effective monetization strategies for AI applications. Here are some of the most common approaches:

1. **Subscription Model**: Offer basic features for free and premium features for a monthly/annual subscription. This works well for AI tools that provide ongoing value.

2. **Freemium Model**: Provide a limited free version with paid upgrades for additional features, higher usage limits, or advanced capabilities.

3. **API as a Service**: Charge developers who want to integrate your AI capabilities into their own applications based on API calls or usage.

4. **Enterprise Licensing**: Sell tailored versions of your AI solution to businesses with custom features, support, and SLAs.

5. **Usage-Based Pricing**: Charge based on the volume of AI processing or specific metrics (queries processed, images analyzed, etc.).

6. **One-Time Purchase**: Sell your AI application for a single upfront payment, which can work for standalone tools.

7. **Advertising**: Use targeted advertising if your AI application has a large consumer user base.

Would you like me to elaborate on any of these approaches based on your specific AI application?`, 
      timestamp: '10:06 AM' 
    },
    { 
      id: '3', 
      sender: 'user', 
      content: 'Could you explain more about the subscription model and how to price it?', 
      timestamp: '10:08 AM' 
    },
    { 
      id: '4', 
      sender: 'ai', 
      content: `The subscription model is one of the most popular ways to monetize AI applications because it provides recurring revenue. Here's how to approach subscription pricing:

### Subscription Tiers
Most successful AI applications offer 2-4 tiers:

1. **Free tier**: Limited functionality to attract users and demonstrate value
2. **Basic tier**: ($10-20/month) Core functionality for individual users
3. **Professional tier**: ($30-100/month) Enhanced features for professionals
4. **Enterprise tier**: (Custom pricing) Full features with support for teams

### How to Price Your Tiers

1. **Value-Based Pricing**: Determine how much value your AI creates for users. If your AI tool saves users 10 hours a month and they value their time at $50/hour, you could price at $100-200/month (offering a 2-5x ROI).

2. **Competitor Analysis**: Research similar AI applications to understand market rates, then position yourself accordingly.

3. **Cost-Plus Pricing**: Calculate your costs (development, hosting, support) per user and add a profit margin.

4. **Tiered Features**: Each tier should add meaningful value through additional features, higher usage limits, priority support, etc.

### Common Subscription Features to Differentiate Tiers

- Processing limits (number of queries, documents, images, etc.)
- Access to premium AI models or capabilities
- Export and integration options
- Team collaboration features
- White-labeling options
- Priority support
- Training and onboarding

Would you like me to help you structure specific pricing tiers for your AI application?`, 
      timestamp: '10:10 AM' 
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // In a real app, would handle sending the message here
    setMessage('');
  };

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-5rem)] overflow-hidden">
        {/* Sidebar with chat history */}
        <div className="w-64 border-r border-gray-200 flex flex-col bg-gray-50">
          <div className="p-3 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search conversations"
                className="pl-8 text-sm"
              />
            </div>
          </div>
          
          <div className="p-3 border-b">
            <Button className="w-full flex items-center gap-2 text-sm" size="sm">
              <Plus className="h-4 w-4" /> New Chat
            </Button>
          </div>
          
          <div className="flex-1 overflow-auto">
            {chatSessions.map((session) => (
              <div
                key={session.id}
                className={`p-3 border-b border-gray-100 hover:bg-gray-100 cursor-pointer ${session.id === '1' ? 'bg-gray-100' : ''}`}
              >
                <h4 className="text-sm font-medium line-clamp-1">{session.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{session.date}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-auto p-6">
            {currentChatMessages.map((msg) => (
              <div 
                key={msg.id}
                className={`mb-6 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3 max-w-3xl`}>
                  <Avatar className={`${msg.sender === 'user' ? 'mt-1' : 'mt-1'}`}>
                    {msg.sender === 'user' ? (
                      <>
                        <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" />
                        <AvatarFallback>JD</AvatarFallback>
                      </>
                    ) : (
                      <>
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-blue-600 text-white">AI</AvatarFallback>
                      </>
                    )}
                  </Avatar>
                  <div>
                    <Card className={`${msg.sender === 'user' ? 'bg-blue-50' : 'bg-white'} shadow-sm`}>
                      <CardContent className="p-3 whitespace-pre-line">
                        {msg.content}
                      </CardContent>
                    </Card>
                    <p className={`text-xs text-gray-500 mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Input area */}
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                placeholder="Ask about startup ideas, business models, market research..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              AI chat is designed to provide guidance but not legal or financial advice.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AIChatPage;
