
import React, { useState } from 'react';
import { Plus, Pencil, Trash2, Calendar } from 'lucide-react';
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
const mockEvents = [
  { id: '1', title: 'Annual Science Fair', date: '2023-09-15', location: 'Main Campus', status: 'Upcoming' },
  { id: '2', title: 'Quantum Computing Workshop', date: '2023-08-22', location: 'Online', status: 'Upcoming' },
  { id: '3', title: 'Research Symposium', date: '2023-06-10', location: 'Conference Center', status: 'Past' },
];

const AdminEventsTab = () => {
  const [events, setEvents] = useState(mockEvents);
  const { toast } = useToast();

  const handleEdit = (id: string) => {
    // Placeholder for edit functionality
    toast({
      title: "Edit initiated",
      description: `Opening editor for event ID: ${id}`,
    });
  };

  const handleDelete = (id: string) => {
    // Placeholder for delete functionality
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Event deleted",
      description: "The event has been successfully deleted.",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage Events</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Event
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="font-medium">{event.title}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  {event.date}
                </div>
              </TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  event.status === 'Upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {event.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" onClick={() => handleEdit(event.id)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDelete(event.id)}>
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

export default AdminEventsTab;
