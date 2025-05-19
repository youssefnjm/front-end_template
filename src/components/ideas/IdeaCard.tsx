
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookmarkPlus, MessageSquare, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IdeaCardProps {
  id: string;
  title: string;
  description: string;
  categories: string[];
  author: {
    name: string;
    avatar: string;
    initials: string;
  };
  likes: number;
  comments: number;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ 
  id, 
  title, 
  description, 
  categories, 
  author, 
  likes, 
  comments 
}) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.initials}</AvatarFallback>
            </Avatar>
            <span className="font-medium text-sm">{author.name}</span>
          </div>
          <Button variant="ghost" size="icon">
            <BookmarkPlus className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <Link to={`/idea/${id}`} className="block">
          <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </Link>
        <div className="flex flex-wrap gap-2 mt-3">
          {categories.map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>{comments}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default IdeaCard;
