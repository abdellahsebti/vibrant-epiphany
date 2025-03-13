
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, User, Calendar, Clock, Tag, Share2, Bookmark, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

// Simulated blog data
const blogPostData = {
  id: "1",
  title: "Exploring Quantum Computing: A Beginner's Guide",
  content: `
    <p>Quantum computing represents one of the most fascinating frontiers in modern science. Unlike classical computers that use bits as the smallest unit of data (either a 0 or a 1), quantum computers leverage quantum bits or "qubits" that can exist in multiple states simultaneously thanks to the principles of superposition.</p>
    
    <h2>What Makes Quantum Computing Different?</h2>
    <p>The fundamental difference between quantum and classical computing lies in how they process information. Classical computers perform calculations sequentially, while quantum computers can explore multiple possibilities at once. This parallelism gives quantum computers their theoretical advantage for certain types of problems.</p>
    
    <p>Key quantum computing concepts include:</p>
    <ul>
      <li><strong>Superposition:</strong> Qubits can exist in multiple states at once, not just 0 or 1</li>
      <li><strong>Entanglement:</strong> Qubits can be correlated in ways that have no classical analog</li>
      <li><strong>Quantum interference:</strong> The ability to amplify correct computation paths and cancel incorrect ones</li>
    </ul>
    
    <h2>Practical Applications</h2>
    <p>While quantum computers are still in their early developmental stages, researchers have identified several promising applications:</p>
    
    <p><strong>Cryptography:</strong> Quantum computers could potentially break many of the encryption systems we use today, but also create new, more secure ones.</p>
    
    <p><strong>Drug discovery:</strong> Simulating molecular interactions at the quantum level could revolutionize how we develop new medicines.</p>
    
    <p><strong>Optimization problems:</strong> From logistics to financial modeling, quantum algorithms may solve complex optimization problems more efficiently.</p>
    
    <h2>Learning Resources</h2>
    <p>For those interested in learning more about quantum computing, several resources are available:</p>
    <ul>
      <li>IBM's Quantum Experience platform offers cloud access to real quantum processors</li>
      <li>Microsoft's Quantum Development Kit provides tools for quantum programming</li>
      <li>Online courses from platforms like Coursera and edX introduce quantum computing concepts</li>
    </ul>
    
    <p>As quantum computing continues to develop, we can expect to see increasingly practical applications emerging. The field represents not just a new type of computing, but potentially a new way of understanding and interacting with the physical world.</p>
  `,
  author: {
    name: "Dr. Sarah Chen",
    avatar: "/placeholder.svg",
    role: "Quantum Physics Researcher"
  },
  date: "March 15, 2023",
  readTime: "8 min read",
  commentCount: 24,
  image: "/placeholder.svg",
  tags: ["Quantum Computing", "Technology", "Science", "Physics"]
};

// More blog posts could be added here for demo purposes

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(blogPostData);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate fetching blog data
    const timer = setTimeout(() => {
      setBlog(blogPostData);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Blog post link has been copied to clipboard",
    });
  };
  
  const handleBookmark = () => {
    toast({
      title: "Bookmarked",
      description: "Blog post has been saved to your bookmarks",
    });
  };

  if (loading) {
    return (
      <div className="py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl animate-pulse">
        <div className="h-10 bg-neutral/40 rounded w-3/4 mb-4"></div>
        <div className="h-80 bg-neutral/40 rounded w-full mb-6"></div>
        <div className="space-y-3">
          <div className="h-4 bg-neutral/40 rounded w-full"></div>
          <div className="h-4 bg-neutral/40 rounded w-5/6"></div>
          <div className="h-4 bg-neutral/40 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      <Helmet>
        <title>{blog.title} | Epiphany Scientific Club</title>
        <meta name="description" content={blog.content.substring(0, 160)} />
      </Helmet>
      
      <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to all blogs
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-dark/70 mb-6">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                <AvatarFallback>
                  <User size={20} />
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{blog.author.name}</div>
                <div className="text-sm text-dark/60">{blog.author.role}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{blog.date}</span>
            </div>
            
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{blog.readTime}</span>
            </div>
            
            <div className="flex items-center">
              <MessageSquare size={16} className="mr-2" />
              <span>{blog.commentCount} comments</span>
            </div>
          </div>
        </div>
        
        {blog.image && (
          <div className="mb-10">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-16">
            <div className="md:sticky md:top-24 flex md:flex-col gap-4 md:gap-6">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full hover:text-primary hover:border-primary"
                onClick={handleShare}
              >
                <Share2 size={20} />
                <span className="sr-only">Share</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full hover:text-primary hover:border-primary"
                onClick={handleBookmark}
              >
                <Bookmark size={20} />
                <span className="sr-only">Bookmark</span>
              </Button>
            </div>
          </div>
          
          <div className="flex-1">
            <article 
              className="prose prose-stone max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            
            <Separator className="my-8" />
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Link 
                    key={tag} 
                    to={`/blog?tag=${tag}`}
                    className="px-3 py-1 rounded-full bg-neutral hover:bg-neutral/80 text-dark/80 text-sm"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Comments ({blog.commentCount})</h3>
              <p className="text-dark/70">Login to view and post comments</p>
              <div className="mt-4">
                <Link to="/login">
                  <Button>Sign in to comment</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
