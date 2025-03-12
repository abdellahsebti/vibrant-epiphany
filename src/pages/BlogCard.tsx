
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Clock, MessageSquare } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  commentCount: number;
  image?: string;
  tags: string[];
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  author,
  date,
  readTime,
  commentCount,
  image = '/placeholder.svg',
  tags,
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
      className="glass-panel overflow-hidden card-hover opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-light/90 text-dark px-3 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl mb-3 line-clamp-2 hover:text-primary transition-colors duration-300">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-dark/80 line-clamp-2 mb-4">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-neutral">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-neutral mr-2 overflow-hidden">
              {author.avatar ? (
                <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
              ) : (
                <User size={20} className="w-full h-full p-1" />
              )}
            </div>
            <span className="text-sm font-medium">{author.name}</span>
          </div>
          
          <div className="flex text-dark/60 text-xs">
            <span className="flex items-center mr-3">
              <Clock size={12} className="mr-1" />
              {readTime}
            </span>
            <span className="flex items-center">
              <MessageSquare size={12} className="mr-1" />
              {commentCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
