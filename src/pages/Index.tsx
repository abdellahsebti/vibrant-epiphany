
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import NewsCard from '../components/NewsCard';
import BlogCard from '../components/BlogCard';
import EventCard from '../components/EventCard';

// Sample data
const newsItems = [
  {
    id: '1',
    title: 'New Research Breakthrough in Quantum Computing',
    excerpt: 'Our team has achieved a significant breakthrough in quantum computing that could revolutionize the field.',
    date: 'June 10, 2023',
    category: 'Research',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'Epiphany Club Receives Major Grant',
    excerpt: 'We are pleased to announce that our club has been awarded a substantial grant to support our ongoing research initiatives.',
    date: 'May 28, 2023',
    category: 'Announcement',
    image: '/placeholder.svg'
  },
  {
    id: '3',
    title: 'New Partnerships with Leading Research Institutions',
    excerpt: 'Epiphany Club is forming strategic partnerships with several prestigious research institutions to collaborate on cutting-edge projects.',
    date: 'May 15, 2023',
    category: 'Partnership',
    image: '/placeholder.svg'
  }
];

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Artificial Intelligence in Scientific Research',
    excerpt: 'Exploring how AI is transforming the way we conduct scientific research and what this means for the future.',
    author: {
      name: 'Dr. Sarah Johnson',
      avatar: '/placeholder.svg'
    },
    date: 'June 5, 2023',
    readTime: '8 min read',
    commentCount: 24,
    tags: ['AI', 'Research'],
    image: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'Understanding Climate Models: A Comprehensive Guide',
    excerpt: 'A detailed look at how climate models work and why they are essential for predicting environmental changes.',
    author: {
      name: 'Prof. Michael Chen',
      avatar: '/placeholder.svg'
    },
    date: 'May 22, 2023',
    readTime: '12 min read',
    commentCount: 18,
    tags: ['Climate', 'Models'],
    image: '/placeholder.svg'
  }
];

const upcomingEvents = [
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
  }
];

const Index = () => {
  const sectionRefs = {
    news: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null),
    events: useRef<HTMLDivElement>(null)
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });
    
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        const headings = ref.current.querySelectorAll('.section-heading');
        headings.forEach(heading => observer.observe(heading));
      }
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Latest News Section */}
      <section ref={sectionRefs.news} className="section-padding bg-neutral/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="section-heading opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-3xl font-bold mb-2">Latest News</h2>
              <p className="text-dark/70">Stay updated with the latest happenings at Epiphany</p>
            </div>
            <Link 
              to="/news" 
              className="inline-flex items-center text-primary font-medium mt-4 md:mt-0 group opacity-0 translate-y-10 transition-all duration-700 delay-100"
            >
              View all news
              <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <NewsCard 
                key={item.id}
                id={item.id}
                title={item.title}
                excerpt={item.excerpt}
                date={item.date}
                image={item.image}
                category={item.category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section ref={sectionRefs.blog} className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="section-heading opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-3xl font-bold mb-2">Featured Articles</h2>
              <p className="text-dark/70">Insights and perspectives from our members</p>
            </div>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary font-medium mt-4 md:mt-0 group opacity-0 translate-y-10 transition-all duration-700 delay-100"
            >
              Explore all articles
              <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard 
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
                commentCount={post.commentCount}
                image={post.image}
                tags={post.tags}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section ref={sectionRefs.events} className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="section-heading opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
              <p className="text-dark/70">Join us for exciting events and learning opportunities</p>
            </div>
            <Link 
              to="/events" 
              className="inline-flex items-center text-primary font-medium mt-4 md:mt-0 group opacity-0 translate-y-10 transition-all duration-700 delay-100"
            >
              All events
              <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
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
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="section-padding bg-dark text-light">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Become a Member
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to join the Epiphany community?
            </h2>
            <p className="text-light/70 mb-8 text-lg">
              Connect with like-minded scientists, participate in groundbreaking research, and be part of a community that's shaping the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup" className="btn-primary">
                Sign up now
              </Link>
              <Link to="/about" className="bg-transparent text-light border border-light/30 font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:bg-light/10">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
