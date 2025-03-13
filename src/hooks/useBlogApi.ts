
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog, Blog } from '@/services/api';

export const useBlogList = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

export const useBlogDetail = (id: string) => {
  return useQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (newBlog: Omit<Blog, 'id'>) => createBlog(newBlog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, blog }: { id: string; blog: Partial<Blog> }) => updateBlog(id, blog),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      queryClient.invalidateQueries({ queryKey: ['blog', variables.id] });
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => deleteBlog(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};
