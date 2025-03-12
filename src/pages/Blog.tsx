
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

// Sample data
const allBlogPosts = [
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
  },
  {
    id: '3',
    title: 'The Ethics of Genetic Engineering',
    excerpt: 'Examining the ethical implications of genetic engineering and CRISPR technology in modern science.',
    author: {
      name: 'Dr. Emily White',
      avatar: '/placeholder.svg'
    },
    date: 'May 15, 2023',
    readTime: '10 min read',
    commentCount: 32,
    tags: ['Ethics', 'Genetics'],
    image: '/placeholder.svg'
  },
  {
    id: '4',
    title: 'Dark Matter: What We Know and What We Don't',
    excerpt: 'A comprehensive overview of our current understanding of dark matter and the mysteries that remain unsolved.',
    author: {
      name: 'Dr. James Wilson',
      avatar: '/placeholder.svg'
    },
    date: 'April 30, 2023',
    readTime: '9 min read',
    commentCount: 15,
    tags: ['Physics', 'Astronomy'],
    image: '/placeholder.svg'
  },
  {
    id: '5',
    title: 'Advancements in Renewable Energy Storage',
    excerpt: 'Recent breakthroughs in energy storage technology that could accelerate the transition to renewable energy sources.',
    author: {
      name: 'Prof. Linda Martinez',
      avatar: '/placeholder.svg'
    },
    date: 'April 18, 2023',
    readTime: '7 min read',
    commentCount: 12,
    tags: ['Energy', 'Technology'],
    image: '/placeholder.svg'
  },
  {
    id: '6',
    title: 'The Role of Microbiomes in Human Health',
    excerpt: 'Understanding how the trillions of microorganisms living in our bodies influence our health and well-being.',
    author: {
      name: 'Dr. David Kim',
      avatar: '/placeholder.svg'
    },
    date: 'April 5, 2023',
    readTime: '11 min read',
    commentCount: 21,
    tags: ['Biology', 'Health'],
    image: '/placeholder.svg'
  }
];

const allTags = ['All', 'AI', 'Research', 'Climate', 'Models', 'Ethics', 'Genetics', 'Physics', 'Astronomy', 'Energy', 'Technology', 'Biology', 'Health'];

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterPosts();
  }, [selectedTag, searchTerm]);

  const filterPosts = () => {
    let filtered = allBlogPosts;
    
    if (selectedTag !== 'All') {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        post => 
          post.title.toLowerCase().includes(term) || 
          post.excerpt.toLowerCase().includes(term) || 
          post.tags.some(tag => tag.toLowerCase().includes(term)) ||
          post.author.name.toLowerCase().includes(term)
      );
    }
    
    setFilteredPosts(filtered);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="section-padding bg-gradient-to-br from-secondary/20 to-primary/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Epiphany Blog</h1>
          <p className="text-dark/70 max-w-2xl mx-auto mb-8 animate-fadeIn">
            Insights, discoveries, and perspectives from our community of scientists and researchers.
          </p>
          
          <div className="max-w-xl mx-auto animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
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
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-primary text-dark font-medium'
                      : 'bg-neutral/50 text-dark/70 hover:bg-neutral'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-dark/70">
                We couldn't find any blog posts matching your search. Try different keywords or tags.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <section className="section-padding bg-neutral/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to contribute?</h2>
          <p className="text-dark/70 max-w-2xl mx-auto mb-8">
            Share your knowledge and insights with our community. Write an article for the Epiphany blog.
          </p>
          <Link to="/login" className="btn-primary">
            Start writing
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
