
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
const mockNews = [
  { id: '1', title: 'Epiphany Club Awarded Grant for New Research Initiative', publishedDate: '2023-04-05', category: 'Research' },
  { id: '2', title: 'New Lab Equipment Expands Experimental Capabilities', publishedDate: '2023-03-20', category: 'Facilities' },
  { id: '3', title: 'Student Researchers Present Findings at National Conference', publishedDate: '2023-02-15', category: 'Events' },
];

const AdminNewsTab = () => {
  const [news, setNews] = useState(mockNews);
  const { toast } = useToast();

  const handleEdit = (id: string) => {
    // Placeholder for edit functionality
    toast({
      title: "Edit initiated",
      description: `Opening editor for news article ID: ${id}`,
    });
  };

  const handleDelete = (id: string) => {
    // Placeholder for delete functionality
    setNews(news.filter(item => item.id !== id));
    toast({
      title: "News article deleted",
      description: "The news article has been successfully deleted.",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage News</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Article
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Published Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {news.map((article) => (
            <TableRow key={article.id}>
              <TableCell className="font-medium">{article.title}</TableCell>
              <TableCell>{article.publishedDate}</TableCell>
              <TableCell>
                <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                  {article.category}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" onClick={() => handleEdit(article.id)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDelete(article.id)}>
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

export default AdminNewsTab;
