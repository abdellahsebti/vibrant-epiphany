
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import EventCard from '../components/EventCard';

// Sample event data
const MOCK_EVENTS = [
  {
    id: "1",
    title: "Annual Science Symposium",
    description: "Join us for our annual symposium featuring keynote speakers from around the world discussing the latest scientific breakthroughs.",
    date: "July 15, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Main Campus Auditorium",
    attendeeCount: 145,
    maxAttendees: 200,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Conference"
  },
  {
    id: "2",
    title: "Workshop: Introduction to Data Science",
    description: "A hands-on workshop for beginners to learn the fundamentals of data science and its applications in various fields.",
    date: "July 22, 2023",
    time: "2:00 PM - 6:00 PM",
    location: "Innovation Lab, Building B",
    attendeeCount: 32,
    maxAttendees: 40,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Workshop"
  },
  {
    id: "3",
    title: "Guest Lecture: The Future of Quantum Computing",
    description: "Distinguished Professor Robert Miller discusses the current state and future potential of quantum computing.",
    date: "August 5, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Lecture Hall C",
    attendeeCount: 78,
    maxAttendees: 120,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lecture"
  },
  {
    id: "4",
    title: "Networking Mixer for Young Scientists",
    description: "Connect with peers and established professionals in your field at this casual networking event.",
    date: "August 12, 2023",
    time: "6:00 PM - 9:00 PM",
    location: "Science Center Atrium",
    attendeeCount: 45,
    maxAttendees: 100,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Networking"
  },
  {
    id: "5",
    title: "Field Trip: Observatory Night",
    description: "Join us for a night of stargazing at the university observatory with expert astronomers guiding the session.",
    date: "August 19, 2023",
    time: "8:00 PM - 11:00 PM",
    location: "University Observatory",
    attendeeCount: 28,
    maxAttendees: 30,
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Field Trip"
  }
];

// Category filter options
const categories = ["All", ...Array.from(new Set(MOCK_EVENTS.map(event => event.category)))];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter events based on search term and category
  const filteredEvents = MOCK_EVENTS.filter(event => {
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
        
        {filteredEvents.length === 0 && (
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
