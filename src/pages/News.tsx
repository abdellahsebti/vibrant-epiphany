
import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';

// Sample data
const allNewsItems = [
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
  },
  {
    id: '4',
    title: 'Epiphany Members Present at International Conference',
    excerpt: 'Several members of our club presented their research findings at the International Science Conference in London last week.',
    date: 'April 30, 2023',
    category: 'Conference',
    image: '/placeholder.svg'
  },
  {
    id: '5',
    title: 'New Laboratory Equipment Acquisition',
    excerpt: 'The club has acquired new state-of-the-art laboratory equipment that will enhance our research capabilities.',
    date: 'April 15, 2023',
    category: 'Infrastructure',
    image: '/placeholder.svg'
  },
  {
    id: '6',
    title: 'Upcoming Webinar Series on Climate Science',
    excerpt: 'We are excited to announce a new webinar series focusing on the latest developments in climate science.',
    date: 'April 8, 2023',
    category: 'Education',
    image: '/placeholder.svg'
  },
  {
    id: '7',
    title: 'Member Spotlight: Dr. Jennifer Lee',
    excerpt: 'This month, we highlight the remarkable achievements of Dr. Jennifer Lee in the field of microbiology.',
    date: 'March 22, 2023',
    category: 'Member Spotlight',
    image: '/placeholder.svg'
  },
  {
    id: '8',
    title: 'Annual Science Fair Winners Announced',
    excerpt: 'The results of our annual science fair are in! Congratulations to all participants and especially to our winners.',
    date: 'March 10, 2023',
    category: 'Event',
    image: '/placeholder.svg'
  },
  {
    id: '9',
    title: 'New Science Outreach Program for Schools',
    excerpt: 'Epiphany is launching a new outreach program to bring science education to underprivileged schools in the area.',
    date: 'February 25, 2023',
    category: 'Community',
    image: '/placeholder.svg'
  }
];

const categories = ['All', 'Research', 'Announcement', 'Partnership', 'Conference', 'Infrastructure', 'Education', 'Member Spotlight', 'Event', 'Community'];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredNews, setFilteredNews] = useState(allNewsItems);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterNews();
  }, [selectedCategory, searchTerm]);

  const filterNews = () => {
    let filtered = allNewsItems;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        item => 
          item.title.toLowerCase().includes(term) || 
          item.excerpt.toLowerCase().includes(term) || 
          item.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredNews(filtered);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="section-padding bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Latest News</h1>
          <p className="text-dark/70 max-w-2xl mx-auto mb-8 animate-fadeIn">
            Stay updated with the latest events, announcements, and happenings at Epiphany Scientific Club.
          </p>
          
          <div className="max-w-xl mx-auto animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-lg border border-neutral focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-dark/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-10 overflow-x-auto scrollbar-none">
            <div className="flex space-x-3 min-w-max pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-dark font-medium'
                      : 'bg-neutral/50 text-dark/70 hover:bg-neutral'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p className="text-dark/70">
                We couldn't find any news matching your search. Try different keywords or categories.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
