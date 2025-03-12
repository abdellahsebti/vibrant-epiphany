
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                <span className="font-bold text-dark text-lg">E</span>
              </div>
              <span className="font-bold text-xl text-light">Epiphany</span>
            </Link>
            
            <p className="text-light/70 mb-6">
              Discovering the wonders of science and fostering a community of curious minds since 2023.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-light/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-light/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-light/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-light/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-light/70 hover:text-primary transition-colors duration-300 flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-light/70 hover:text-primary transition-colors duration-300 flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  News
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-light/70 hover:text-primary transition-colors duration-300 flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-light/70 hover:text-primary transition-colors duration-300 flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Events
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light/70 hover:text-primary transition-colors duration-300 flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-3 text-primary flex-shrink-0" />
                <span className="text-light/70">123 Science Street, Innovation Valley, CA 94103</span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 text-primary flex-shrink-0" />
                <span className="text-light/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 text-primary flex-shrink-0" />
                <span className="text-light/70">info@epiphanyclub.org</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-light/70 mb-4">
              Stay updated with our latest news and events. Subscribe to our newsletter.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-lg bg-light/10 border border-light/20 text-light focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <button 
                type="submit" 
                className="w-full bg-primary text-dark font-medium py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-light/10 text-center">
          <p className="text-light/50 text-sm">
            © {new Date().getFullYear()} Epiphany Scientific Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
