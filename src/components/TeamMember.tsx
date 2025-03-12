
import React, { useRef, useEffect } from 'react';
import { Mail, Linkedin, Twitter, Globe } from 'lucide-react';

interface SocialLink {
  type: 'email' | 'linkedin' | 'twitter' | 'website';
  url: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  socialLinks?: SocialLink[];
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  image = '/placeholder.svg',
  socialLinks = [],
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

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <Mail size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'twitter':
        return <Twitter size={18} />;
      case 'website':
        return <Globe size={18} />;
      default:
        return null;
    }
  };

  return (
    <div 
      ref={cardRef}
      className="glass-panel overflow-hidden group opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <div className="flex justify-center space-x-3 mb-4">
              {socialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-light/90 flex items-center justify-center text-dark hover:bg-primary transition-colors duration-300"
                  aria-label={`${link.type} link for ${name}`}
                >
                  {getSocialIcon(link.type)}
                </a>
              ))}
            </div>
            
            <p className="text-light text-sm line-clamp-3 text-center">
              {bio}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-5 text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-dark/70 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
