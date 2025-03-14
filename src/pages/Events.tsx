
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import EventCard from '../components/EventCard';
import { useEventsList } from '../hooks/useEventsApi';

const Events = () => {
  const { data: eventsData, isLoading, error } = useEventsList();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get all unique categories from the events data
  const categories = ["All", ...Array.from(new Set((eventsData || []).map(event => event.category)))];
  
  // Filter events based on search term and category
  const filteredEvents = (eventsData || []).filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-light">
      <Helmet>
        <title>Events | Epiphany Scientific Club</title>
        <meta name="description" content="Upcoming events, workshops, and lectures hosted by Epiphany Scientific Club." />
      </Helmet>
      
      <div className="hero-gradient py-20 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">Join us for exciting events, workshops, and lectures. Expand your knowledge and connect with fellow science enthusiasts.</p>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full md:w-80 px-4 py-2 rounded-lg glass-panel"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="w-full md:w-auto flex flex-wrap gap-2 justify-center md:justify-end">
            {categories.map(category => (
              <button 
                key={category}
                className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category ? "bg-dark text-light" : "bg-neutral text-dark"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {isLoading && (
          <div className="text-center py-20">
            <p className="text-xl">Loading events...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-20">
            <p className="text-xl text-red-500">Error loading events. Please try again later.</p>
          </div>
        )}
        
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        )}
        
        {!isLoading && !error && filteredEvents.length === 0 && (
          <div className="text-center py-10">
            <h3 className="text-xl font-semibold">No events found</h3>
            <p className="text-dark/60">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
