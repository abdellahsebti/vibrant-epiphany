
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import BlogCard from '../components/BlogCard';
import { useBlogList } from '../hooks/useBlogApi';

const Blog = () => {
  const { data: blogsData, isLoading, error } = useBlogList();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  
  // Get all unique tags from the blog data
  const allTags = [...new Set((blogsData || []).flatMap(blog => blog.tags))];
  
  // Filter blogs based on search term and selected tag
  const filteredBlogs = (blogsData || []).filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? blog.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-dark">
      <Helmet>
        <title>Blog | Epiphany Scientific Club</title>
        <meta name="description" content="Read the latest scientific insights and discoveries from our club members." />
      </Helmet>
      
      <div className="hero-gradient py-20 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Scientific Insights</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">Explore cutting-edge research and thought-provoking ideas from our community.</p>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full sm:w-80 px-4 py-2 rounded-lg glass-panel"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="w-full sm:w-auto flex flex-wrap gap-2 justify-center sm:justify-end">
            <button 
              className={`px-3 py-1 rounded-full text-sm ${selectedTag === "" ? "bg-dark text-light" : "bg-neutral text-dark"}`}
              onClick={() => setSelectedTag("")}
            >
              All
            </button>
            {allTags.map(tag => (
              <button 
                key={tag}
                className={`px-3 py-1 rounded-full text-sm ${selectedTag === tag ? "bg-dark text-light" : "bg-neutral text-dark"}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {isLoading && (
          <div className="text-center py-20">
            <p className="text-xl">Loading blogs...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-20">
            <p className="text-xl text-red-500">Error loading blogs. Please try again later.</p>
          </div>
        )}
        
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <BlogCard 
                key={blog.id}
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                author={blog.author}
                date={blog.publishedDate}
                readTime={blog.readTime}
                commentCount={blog.commentCount}
                image={blog.image}
                tags={blog.tags}
                index={index}
              />
            ))}
          </div>
        )}
        
        {!isLoading && !error && filteredBlogs.length === 0 && (
          <div className="text-center py-10">
            <h3 className="text-xl font-semibold">No blogs found</h3>
            <p className="text-dark/60">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
