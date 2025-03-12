
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import NewsCard from '../components/NewsCard';

// Sample news data
const MOCK_NEWS = [
  {
    id: "1",
    title: "New Research Breakthrough in Quantum Computing",
    excerpt: "Our team has achieved a significant breakthrough in quantum computing that could revolutionize the field and lead to faster computation for complex problems.",
    date: "June 10, 2023",
    category: "Research",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Epiphany Club Receives Major Grant",
    excerpt: "We are pleased to announce that our club has been awarded a substantial grant to support our ongoing research initiatives in climate science.",
    date: "May 28, 2023",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "New Partnerships with Leading Research Institutions",
    excerpt: "Epiphany Club is forming strategic partnerships with several prestigious research institutions to collaborate on cutting-edge projects in multiple scientific domains.",
    date: "May 15, 2023",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Members Publish Groundbreaking Paper in Nature",
    excerpt: "A team of our members has published a groundbreaking paper in Nature journal, detailing their discoveries in environmental science and sustainable technology.",
    date: "May 3, 2023",
    category: "Publication",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    title: "Annual Science Fair Winners Announced",
    excerpt: "The results of our annual science fair are in! Congratulations to all participants and especially to our winners who demonstrated exceptional creativity and scientific rigor.",
    date: "April 20, 2023",
    category: "Event",
    image: "https://images.unsplash.com/photo-1581094794329-c8112c4e25b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "6",
    title: "New Laboratory Equipment Acquisition",
    excerpt: "Epiphany Club has acquired state-of-the-art laboratory equipment that will enhance our research capabilities and enable new types of experiments.",
    date: "April 8, 2023",
    category: "Facility",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// Category filter options
const categories = ["All", ...Array.from(new Set(MOCK_NEWS.map(news => news.category)))];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter news based on search term and category
  const filteredNews = MOCK_NEWS.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-light">
      <Helmet>
        <title>News | Epiphany Scientific Club</title>
        <meta name="description" content="Latest news and announcements from Epiphany Scientific Club." />
      </Helmet>
      
      <div className="hero-gradient py-20 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">Stay updated with the latest announcements, achievements, and developments from our scientific community.</p>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search news..."
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news, index) => (
            <NewsCard 
              key={news.id}
              id={news.id}
              title={news.title}
              excerpt={news.excerpt}
              date={news.date}
              image={news.image}
              category={news.category}
              index={index}
            />
          ))}
        </div>
        
        {filteredNews.length === 0 && (
          <div className="text-center py-10">
            <h3 className="text-xl font-semibold">No news found</h3>
            <p className="text-dark/60">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
