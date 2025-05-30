
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Blog', path: '/blog' },
    { name: 'Events', path: '/events' },
    { name: 'Magazine', path: '/magazine' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/"
          className="flex items-center space-x-2"
        >
          <img 
            src="/lovable-uploads/7fa7b3fe-705a-4c6e-8f71-59878a0ae8b8.png" 
            alt="Epiphany Logo" 
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl text-light">Epiphany</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-all duration-300 hover:text-primary relative ${
                isActive(link.path) 
                  ? 'text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary' 
                  : 'text-light'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="btn-outline text-sm text-light border-light hover:text-dark">
            Log in
          </Link>
          <Link to="/signup" className="btn-primary text-sm">
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-light"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-dark shadow-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-2 px-4 rounded-lg font-medium ${
                isActive(link.path) ? 'bg-neutral text-primary' : 'text-light hover:bg-neutral'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-4 border-t border-neutral">
            <Link to="/login" className="btn-outline text-center text-light border-light hover:text-dark">
              Log in
            </Link>
            <Link to="/signup" className="btn-primary text-center">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
