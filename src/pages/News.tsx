
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import NewsCard from '../components/NewsCard';
import { useNewsList } from '../hooks/useNewsApi';

const News = () => {
  const { data: newsData, isLoading, error } = useNewsList();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get all unique categories from the news data
  const categories = ["All", ...Array.from(new Set((newsData || []).map(news => news.category)))];
  
  // Filter news based on search term and category
  const filteredNews = (newsData || []).filter(news => {
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
        
        {isLoading && (
          <div className="text-center py-20">
            <p className="text-xl">Loading news...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-20">
            <p className="text-xl text-red-500">Error loading news. Please try again later.</p>
          </div>
        )}
        
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news, index) => (
              <NewsCard 
                key={news.id}
                id={news.id}
                title={news.title}
                excerpt={news.excerpt}
                date={news.publishedDate}
                image={news.image}
                category={news.category}
                index={index}
              />
            ))}
          </div>
        )}
        
        {!isLoading && !error && filteredNews.length === 0 && (
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
