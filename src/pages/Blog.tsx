
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import BlogCard from '../components/BlogCard';

const MOCK_BLOGS = [
  {
    id: "1",
    title: "The Future of Quantum Computing in Scientific Research",
    excerpt: "Explore how quantum computing is revolutionizing scientific research across various disciplines.",
    author: {
      name: "Dr. Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    date: "May 15, 2023",
    readTime: "6 min",
    commentCount: 23,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Quantum Computing", "Research"]
  },
  {
    id: "2",
    title: "Advancements in CRISPR Technology: Ethical Implications",
    excerpt: "A deep dive into recent CRISPR breakthroughs and the ethical questions they raise for society.",
    author: {
      name: "Prof. Michael Lee"
    },
    date: "April 27, 2023",
    readTime: "8 min",
    commentCount: 47,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Biotechnology", "Ethics", "CRISPR"]
  },
  {
    id: "3",
    title: "The Role of Artificial Intelligence in Climate Change Modeling",
    excerpt: "How AI and machine learning are enhancing our ability to predict and mitigate climate change effects.",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    date: "June 3, 2023",
    readTime: "5 min",
    commentCount: 19,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "Climate Science", "Machine Learning"]
  },
  {
    id: "4",
    title: "Neuroscience Breakthroughs: Understanding Brain Plasticity",
    excerpt: "Recent discoveries in neuroscience that are changing our understanding of brain plasticity and adaptation.",
    author: {
      name: "Dr. Robert Chen"
    },
    date: "March 18, 2023",
    readTime: "7 min",
    commentCount: 31,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Neuroscience", "Brain Research"]
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  
  // Get all unique tags
  const allTags = [...new Set(MOCK_BLOGS.flatMap(blog => blog.tags))];
  
  // Filter blogs based on search term and selected tag
  const filteredBlogs = MOCK_BLOGS.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? blog.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-light">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <BlogCard 
              key={blog.id}
              id={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              author={blog.author}
              date={blog.date}
              readTime={blog.readTime}
              commentCount={blog.commentCount}
              image={blog.image}
              tags={blog.tags}
              index={index}
            />
          ))}
        </div>
        
        {filteredBlogs.length === 0 && (
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
