
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getEvents, getEventById, createEvent, updateEvent, deleteEvent, Event } from '@/services/api';

export const useEventsList = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });
};

export const useEventDetail = (id: string) => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: () => getEventById(id),
    enabled: !!id,
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (event: Omit<Event, 'id'>) => createEvent(event),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, event }: { id: string; event: Partial<Event> }) => updateEvent(id, event),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['event', variables.id] });
    },
  });
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => deleteEvent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });
};
