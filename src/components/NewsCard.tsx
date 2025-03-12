
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  category: string;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  id, 
  title, 
  excerpt, 
  date, 
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
        <div className="absolute top-4 left-4 bg-primary/90 px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-dark/60 text-sm mb-2">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        
        <h3 className="font-bold text-xl mb-2 line-clamp-2 hover:text-primary transition-colors duration-300">
          <Link to={`/news/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-dark/80 line-clamp-3 mb-4">
          {excerpt}
        </p>
        
        <Link 
          to={`/news/${id}`}
          className="inline-flex items-center text-primary font-medium group"
        >
          Read more 
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
