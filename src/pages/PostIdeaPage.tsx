
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

const PostIdeaPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleAddCategory = () => {
    if (category.trim() && !categories.includes(category.trim())) {
      setCategories([...categories, category.trim()]);
      setCategory('');
    }
  };

  const handleRemoveCategory = (categoryToRemove: string) => {
    setCategories(categories.filter(c => c !== categoryToRemove));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Post a New Idea</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Idea Details</CardTitle>
            <CardDescription>
              Share the details of your startup idea to get feedback from the community.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="title">Idea Title</Label>
                <Input 
                  id="title" 
                  placeholder="Give your idea a catchy name" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your idea in detail. What problem does it solve? Who is it for? How will it make money?"
                  rows={6}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Categories</Label>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Add category" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddCategory();
                      }
                    }}
                  />
                  <Button type="button" onClick={handleAddCategory}>Add</Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map((cat) => (
                    <Badge key={cat} className="flex items-center gap-1">
                      {cat}
                      <button type="button" onClick={() => handleRemoveCategory(cat)}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Image (optional)</Label>
                <Input 
                  id="image" 
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <div className="mt-4">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="max-h-64 rounded-md object-cover"
                    />
                  </div>
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save as Draft</Button>
            <Button>Submit Idea</Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PostIdeaPage;
