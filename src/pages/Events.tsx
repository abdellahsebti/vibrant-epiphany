
import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

// Sample data
const allEvents = [
  {
    id: '1',
    title: 'Annual Science Symposium',
    description: 'Join us for our annual symposium featuring keynote speakers from around the world.',
    date: 'July 15, 2023',
    time: '9:00 AM - 5:00 PM',
    location: 'Main Campus Auditorium',
    attendeeCount: 120,
    maxAttendees: 200,
    category: 'Conference',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'Workshop: Introduction to Data Science',
    description: 'A hands-on workshop for beginners to learn the fundamentals of data science and its applications.',
    date: 'July 22, 2023',
    time: '2:00 PM - 6:00 PM',
    location: 'Innovation Lab, Building B',
    attendeeCount: 30,
    maxAttendees: 40,
    category: 'Workshop',
    image: '/placeholder.svg'
  },
  {
    id: '3',
    title: 'Guest Lecture: Sustainability in Science',
    description: 'Renowned environmentalist Dr. Maya Patel discusses the importance of sustainability in scientific research.',
    date: 'August 5, 2023',
    time: '4:00 PM - 6:00 PM',
    location: 'Virtual Event',
    attendeeCount: 85,
    maxAttendees: 300,
    category: 'Lecture',
    image: '/placeholder.svg'
  },
  {
    id: '4',
    title: 'Networking Mixer: Connect with Industry Professionals',
    description: 'An opportunity to meet and network with professionals from various scientific industries.',
    date: 'August 12, 2023',
    time: '6:30 PM - 9:00 PM',
    location: 'Science Center Lobby',
    attendeeCount: 50,
    maxAttendees: 100,
    category: 'Networking',
    image: '/placeholder.svg'
  },
  {
    id: '5',
    title: 'Field Trip: Observatory Visit',
    description: 'Join us for a guided tour of the city observatory and a night of stargazing.',
    date: 'August 18, 2023',
    time: '8:00 PM - 11:00 PM',
    location: 'City Observatory',
    attendeeCount: 25,
    maxAttendees: 30,
    category: 'Field Trip',
    image: '/placeholder.svg'
  },
  {
    id: '6',
    title: 'Hackathon: Science Solutions',
    description: 'A 48-hour hackathon to develop innovative solutions to real-world scientific problems.',
    date: 'September 2-4, 2023',
    time: 'All Day',
    location: 'Innovation Hub',
    attendeeCount: 60,
    maxAttendees: 80,
    category: 'Hackathon',
    image: '/placeholder.svg'
  }
];

const categories = ['All', 'Conference', 'Workshop', 'Lecture', 'Networking', 'Field Trip', 'Hackathon'];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredEvents, setFilteredEvents] = useState(allEvents);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterEvents();
  }, [selectedCategory, searchTerm]);

  const filterEvents = () => {
    let filtered = allEvents;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        event => 
          event.title.toLowerCase().includes(term) || 
          event.description.toLowerCase().includes(term) || 
          event.location.toLowerCase().includes(term) ||
          event.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredEvents(filtered);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="section-padding bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Upcoming Events</h1>
          <p className="text-dark/70 max-w-2xl mx-auto mb-8 animate-fadeIn">
            Discover and participate in our upcoming events, workshops, lectures, and more.
          </p>
          
          <div className="max-w-xl mx-auto animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-lg border border-neutral focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-dark/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-10 overflow-x-auto scrollbar-none">
            <div className="flex space-x-3 min-w-max pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-dark font-medium'
                      : 'bg-neutral/50 text-dark/70 hover:bg-neutral'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <EventCard 
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  attendeeCount={event.attendeeCount}
                  maxAttendees={event.maxAttendees}
                  image={event.image}
                  category={event.category}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No events found</h3>
              <p className="text-dark/70">
                We couldn't find any events matching your search. Try different keywords or categories.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <section className="section-padding bg-dark text-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to host an event?</h2>
          <p className="text-light/70 max-w-2xl mx-auto mb-8">
            If you're a member and want to organize an event for the Epiphany community, we'd love to hear from you.
          </p>
          <button className="btn-primary">
            Submit event proposal
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;
