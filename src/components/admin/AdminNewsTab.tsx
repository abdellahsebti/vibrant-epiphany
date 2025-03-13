
import React from 'react';
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
import { useNewsList, useDeleteNews } from '@/hooks/useNewsApi';

const AdminNewsTab = () => {
  const { data: news, isLoading, isError } = useNewsList();
  const deleteNewsMutation = useDeleteNews();
  const { toast } = useToast();

  const handleEdit = (id: string) => {
    // Placeholder for edit functionality
    toast({
      title: "Edit initiated",
      description: `Opening editor for news article ID: ${id}`,
    });
  };

  const handleDelete = (id: string) => {
    deleteNewsMutation.mutate(id, {
      onSuccess: () => {
        toast({
          title: "News article deleted",
          description: "The news article has been successfully deleted.",
        });
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: "Failed to delete the news article. Please try again.",
          variant: "destructive",
        });
        console.error("Delete error:", error);
      }
    });
  };

  if (isLoading) {
    return <div>Loading news articles...</div>;
  }

  if (isError) {
    return <div>Error loading news articles. Please try again.</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage News</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Article
        </Button>
      </div>

      {news && news.length > 0 ? (
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
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleDelete(article.id)}
                    disabled={deleteNewsMutation.isPending}
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
          <p className="text-muted-foreground">No news articles found. Create your first news article!</p>
        </div>
      )}
    </div>
  );
};

export default AdminNewsTab;
