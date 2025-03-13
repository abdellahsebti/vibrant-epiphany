
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getNews, getNewsById, createNews, updateNews, deleteNews, News } from '@/services/api';

export const useNewsList = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });
};

export const useNewsDetail = (id: string) => {
  return useQuery({
    queryKey: ['news', id],
    queryFn: () => getNewsById(id),
    enabled: !!id,
  });
};

export const useCreateNews = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (newsItem: Omit<News, 'id'>) => createNews(newsItem),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
};

export const useUpdateNews = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, news }: { id: string; news: Partial<News> }) => updateNews(id, news),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
      queryClient.invalidateQueries({ queryKey: ['news', variables.id] });
    },
  });
};

export const useDeleteNews = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => deleteNews(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
};
