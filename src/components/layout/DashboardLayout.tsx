
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Search, 
  Settings, 
  MessageSquare, 
  User, 
  List 
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const navigationItems = [
    { title: 'Dashboard', path: '/dashboard', icon: Home },
    { title: 'My Ideas', path: '/post-idea', icon: FileText },
    { title: 'Explore', path: '/explore', icon: Search },
    { title: 'AI Chat', path: '/ai-chat', icon: MessageSquare },
    { title: 'Tools', path: '/tools', icon: List },
    { title: 'Profile', path: '/profile', icon: User },
    { title: 'Settings', path: '#', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <div className="flex items-center justify-between h-14 px-4 border-b">
            <Link to="/" className="text-lg font-bold">
              Idea Validator
            </Link>
          </div>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title} active={isActive(item.path)}>
                      <SidebarMenuButton asChild>
                        <Link to={item.path} className="flex items-center gap-3">
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <div className="flex items-center h-14 px-4 border-b bg-white justify-between">
            <SidebarTrigger className={isMobile ? "block" : "hidden"} />
            <div className="flex items-center gap-4">
              <Link to="/profile" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">John Doe</span>
              </Link>
            </div>
          </div>
          <div className="p-4 md:p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
