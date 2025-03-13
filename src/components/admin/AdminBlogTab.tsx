
import React, { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { useBlogList, useDeleteBlog } from '@/hooks/useBlogApi';

const AdminBlogTab = () => {
  const { data: blogs, isLoading, isError } = useBlogList();
  const deleteBlogMutation = useDeleteBlog();
  const { toast } = useToast();

  const handleEdit = (id: string) => {
    // Placeholder for edit functionality
    toast({
      title: "Edit initiated",
      description: `Opening editor for blog ID: ${id}`,
    });
  };

  const handleDelete = (id: string) => {
    deleteBlogMutation.mutate(id, {
      onSuccess: () => {
        toast({
          title: "Blog deleted",
          description: "The blog has been successfully deleted.",
        });
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: "Failed to delete the blog. Please try again.",
          variant: "destructive",
        });
        console.error("Delete error:", error);
      }
    });
  };

  if (isLoading) {
    return <div>Loading blogs...</div>;
  }

  if (isError) {
    return <div>Error loading blogs. Please try again.</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage Blogs</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Blog
        </Button>
      </div>

      {blogs && blogs.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Published Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell className="font-medium">{blog.title}</TableCell>
                <TableCell>{blog.publishedDate}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    blog.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {blog.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(blog.id)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleDelete(blog.id)}
                    disabled={deleteBlogMutation.isPending}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No blogs found. Create your first blog post!</p>
        </div>
      )}
    </div>
  );
};

export default AdminBlogTab;
