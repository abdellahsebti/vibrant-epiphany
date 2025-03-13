
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Share2, Bookmark } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

// Simulated news data
const newsArticleData = {
  id: "1",
  title: "Epiphany Club Awarded Grant for New Research Initiative",
  content: `
    <p>We are thrilled to announce that the Epiphany Scientific Club has been awarded a substantial grant to pursue groundbreaking research in the field of sustainable energy storage solutions.</p>
    
    <h2>A New Chapter for Epiphany Research</h2>
    <p>The grant, valued at $750,000, will fund a two-year research initiative focused on developing novel materials for next-generation battery technology. This project aims to address one of the most pressing challenges in renewable energy adoption: efficient and environmentally friendly energy storage.</p>
    
    <p>"This grant represents a significant milestone for our club," said Dr. Margaret Liu, Epiphany's Research Director. "It will allow our team of researchers and student members to collaborate on solving real-world problems while providing invaluable research experience for our community."</p>
    
    <h2>Research Objectives</h2>
    <p>The research initiative will focus on three primary objectives:</p>
    <ol>
      <li>Identifying and testing new composite materials with higher energy density and lower environmental impact</li>
      <li>Developing improved manufacturing processes that reduce waste and energy consumption</li>
      <li>Creating prototypes for scalable, cost-effective energy storage solutions</li>
    </ol>
    
    <h2>Student Involvement</h2>
    <p>A unique aspect of this initiative is the significant role that student members will play in the research process. Undergraduate and graduate students will have the opportunity to work alongside established researchers, gaining hands-on experience in cutting-edge scientific investigation.</p>
    
    <p>"We believe in the power of mentorship and practical learning," explained Dr. Liu. "By involving students at every stage of the research process, we're not just advancing scientific knowledge—we're nurturing the next generation of scientific leaders."</p>
    
    <h2>Partnership Opportunities</h2>
    <p>The Epiphany Scientific Club is actively seeking additional partners from industry and academia to collaborate on this initiative. Organizations interested in sustainable energy solutions are encouraged to reach out to explore potential synergies.</p>
    
    <p>A series of information sessions about the research initiative and involvement opportunities will be held in the coming weeks. Check our events calendar for details.</p>
    
    <p>This grant award reinforces Epiphany Scientific Club's position as a leader in fostering scientific innovation and education in our community. We look forward to sharing updates as the research progresses.</p>
  `,
  date: "April 5, 2023",
  image: "/placeholder.svg",
  category: "Research",
  source: "Epiphany Scientific Club Press Release",
  relatedArticles: [
    { id: "2", title: "Student Researchers Present Findings at National Conference", category: "Events" },
    { id: "3", title: "New Lab Equipment Expands Experimental Capabilities", category: "Facilities" }
  ]
};

// More news articles could be added here for demo purposes

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(newsArticleData);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate fetching news data
    const timer = setTimeout(() => {
      setNews(newsArticleData);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "News article link has been copied to clipboard",
    });
  };
  
  const handleBookmark = () => {
    toast({
      title: "Bookmarked",
      description: "News article has been saved to your bookmarks",
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
        <title>{news.title} | Epiphany Scientific Club</title>
        <meta name="description" content={news.content.substring(0, 160)} />
      </Helmet>
      
      <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
        <Link to="/news" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to all news
        </Link>
        
        <div className="mb-8">
          <span className="inline-block bg-primary/90 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {news.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{news.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-dark/70 mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{news.date}</span>
            </div>
            
            {news.source && (
              <div>
                <span className="text-dark/60">Source: {news.source}</span>
              </div>
            )}
          </div>
        </div>
        
        {news.image && (
          <div className="mb-10">
            <img 
              src={news.image} 
              alt={news.title} 
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
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
            
            <Separator className="my-8" />
            
            {news.relatedArticles && news.relatedArticles.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <div className="grid gap-4">
                  {news.relatedArticles.map((article) => (
                    <Link 
                      key={article.id} 
                      to={`/news/${article.id}`}
                      className="glass-panel p-4 rounded-lg hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{article.title}</h4>
                        <span className="text-sm bg-neutral/60 px-2 py-0.5 rounded">{article.category}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
