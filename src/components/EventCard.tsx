
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendeeCount: number;
  maxAttendees?: number;
  image?: string;
  category: string;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  description,
  date,
  time,
  location,
  attendeeCount,
  maxAttendees,
  image = '/placeholder.svg',
  category,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const percentFilled = maxAttendees ? (attendeeCount / maxAttendees) * 100 : 0;
  
  return (
    <div 
      ref={cardRef}
      className="glass-panel card-hover opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary/90 px-3 py-1 rounded-full text-xs font-medium text-dark">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl mb-3 line-clamp-2 hover:text-primary transition-colors duration-300">
          <Link to={`/events/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-light/70 line-clamp-2 mb-4">
          {description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-light/80 text-sm">
            <Calendar size={16} className="mr-2 text-primary" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-light/80 text-sm">
            <Clock size={16} className="mr-2 text-primary" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-light/80 text-sm">
            <MapPin size={16} className="mr-2 text-primary" />
            <span>{location}</span>
          </div>
        </div>
        
        {maxAttendees && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="flex items-center">
                <Users size={16} className="mr-1" />
                <span>{attendeeCount} attending</span>
              </span>
              <span className="text-light/60">{maxAttendees - attendeeCount} spots left</span>
            </div>
            <div className="w-full h-2 bg-dark/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${percentFilled}%` }}
              ></div>
            </div>
          </div>
        )}
        
        <Link 
          to={`/events/${id}`}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <span>Reserve my spot</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
