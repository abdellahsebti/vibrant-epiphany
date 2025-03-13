
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

// Mock data - replace with actual API calls later
const mockBlogs = [
  { id: '1', title: 'The Future of Scientific Research', publishedDate: '2023-05-12', status: 'Published' },
  { id: '2', title: 'Quantum Computing Breakthroughs', publishedDate: '2023-06-28', status: 'Published' },
  { id: '3', title: 'Sustainable Energy Solutions', publishedDate: '2023-07-15', status: 'Draft' },
];

const AdminBlogTab = () => {
  const [blogs, setBlogs] = useState(mockBlogs);
  const { toast } = useToast();

  const handleEdit = (id: string) => {
    // Placeholder for edit functionality
    toast({
      title: "Edit initiated",
      description: `Opening editor for blog ID: ${id}`,
    });
  };

  const handleDelete = (id: string) => {
    // Placeholder for delete functionality
    setBlogs(blogs.filter(blog => blog.id !== id));
    toast({
      title: "Blog deleted",
      description: "The blog has been successfully deleted.",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage Blogs</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Blog
        </Button>
      </div>

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
                <Button variant="ghost" size="sm" onClick={() => handleDelete(blog.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminBlogTab;
