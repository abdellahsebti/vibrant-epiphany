
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });
    
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex items-center pt-24 pb-16 section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <span className="inline-block bg-primary/20 text-dark px-4 py-1 rounded-full text-sm font-medium mb-4">Scientific Club</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Discover the <span className="text-primary">Epiphany</span> behind science
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-dark/80 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Join our community of scientists, researchers, and enthusiasts exploring the frontiers of knowledge and making discoveries that matter.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <Link to="/signup" className="btn-primary">
                Join Epiphany
              </Link>
              <Link to="/events" className="btn-outline group flex items-center gap-2">
                Upcoming Events
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="flex items-center gap-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-neutral flex items-center justify-center border-2 border-light">
                    <span className="text-xs font-medium">{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-dark/70">
                <span className="font-semibold text-dark">800+</span> members have joined
              </p>
            </div>
          </div>
          
          <div className="relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20 blur-3xl"></div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral to-light opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8 w-full">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className={`glass-panel p-6 aspect-square flex flex-col items-center justify-center animate-float ${
                        i % 2 === 0 ? 'animation-delay-500' : 'animation-delay-1000'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full mb-4 ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}></div>
                      <div className="h-2 w-16 bg-dark/10 rounded-full"></div>
                      <div className="h-2 w-24 bg-dark/10 rounded-full mt-2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
