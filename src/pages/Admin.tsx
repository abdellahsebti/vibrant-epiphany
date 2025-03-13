
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import AdminBlogTab from '@/components/admin/AdminBlogTab';
import AdminNewsTab from '@/components/admin/AdminNewsTab';
import AdminEventsTab from '@/components/admin/AdminEventsTab';

const Admin = () => {
  const navigate = useNavigate();
  // In a real application, you would check authentication status here
  // For example: const {isAuthenticated} = useAuth();
  const isAuthenticated = true; // Placeholder for actual auth check
  
  if (!isAuthenticated) {
    // In actual implementation, redirect to login
    // navigate('/login');
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
        <p className="mb-6">Please log in to access the admin dashboard.</p>
        <Button asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <Helmet>
        <title>Admin Dashboard | Epiphany Scientific Club</title>
      </Helmet>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage your website content</p>
      </div>
      
      <Tabs defaultValue="blogs" className="w-full">
        <TabsList className="mb-6 w-full border-b rounded-none justify-start">
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="blogs">
          <AdminBlogTab />
        </TabsContent>
        
        <TabsContent value="news">
          <AdminNewsTab />
        </TabsContent>
        
        <TabsContent value="events">
          <AdminEventsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
