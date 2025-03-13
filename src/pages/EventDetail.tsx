
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Share2, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

// Simulated event data
const eventData = {
  id: "1",
  title: "Workshop: Introduction to Astrophotography",
  description: "Join us for an evening workshop on the basics of astrophotography. Learn how to capture stunning images of the night sky using both professional and consumer-grade equipment.",
  content: `
    <p>The Epiphany Scientific Club is excited to host this hands-on workshop introducing the fascinating world of astrophotography. Whether you're a complete beginner or have some experience with photography, this event will provide valuable insights and practical skills for capturing the beauty of the cosmos.</p>
    
    <h2>What You'll Learn</h2>
    <ul>
      <li>Essential equipment for astrophotography</li>
      <li>Camera settings for night sky photography</li>
      <li>Techniques for capturing different celestial objects</li>
      <li>Basic post-processing to enhance your astronomical images</li>
      <li>Tips for planning your shoots based on celestial events</li>
    </ul>
    
    <h2>Workshop Schedule</h2>
    <p><strong>6:00 PM - 7:00 PM:</strong> Introductory lecture on astrophotography principles</p>
    <p><strong>7:00 PM - 7:30 PM:</strong> Equipment demonstration and setup</p>
    <p><strong>7:30 PM - 9:00 PM:</strong> Outdoor practical session (weather permitting)</p>
    <p><strong>9:00 PM - 9:30 PM:</strong> Post-processing demonstration and Q&A</p>
    
    <h2>What to Bring</h2>
    <p>If you have any of the following equipment, please bring it along:</p>
    <ul>
      <li>DSLR or mirrorless camera</li>
      <li>Tripod</li>
      <li>Wide-angle lens (if available)</li>
      <li>Remote shutter release (if available)</li>
      <li>Laptop with photo editing software (for the post-processing session)</li>
    </ul>
    <p>Don't worry if you don't have all or any of this equipment—we'll have several setups available for participants to use and share during the practical session.</p>
    
    <h2>About the Instructor</h2>
    <p>The workshop will be led by Professor James Chen, an accomplished astrophotographer whose work has been featured in National Geographic and Sky & Telescope magazine. Professor Chen specializes in deep-sky imaging and has been teaching astrophotography techniques for over a decade.</p>
    
    <h2>Important Notes</h2>
    <p>The outdoor portion of the workshop is weather-dependent. In case of cloudy conditions, we will extend the indoor sessions with additional demonstrations and tutorial content.</p>
    <p>Light refreshments will be provided during the event.</p>
    <p>Space is limited to ensure a quality experience for all participants, so early registration is recommended.</p>
  `,
  date: "May 12, 2023",
  time: "6:00 PM - 9:30 PM",
  location: "Science Building, Room 103 & Observatory Deck",
  attendeeCount: 28,
  maxAttendees: 35,
  image: "/placeholder.svg",
  category: "Workshop",
  host: "Prof. James Chen",
  requirements: ["Camera (optional)", "Warm clothing", "Notebook"],
  isFree: false,
  price: "$15.00",
  registrationDeadline: "May 10, 2023"
};

// More events could be added here for demo purposes

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(eventData);
  const [loading, setLoading] = useState(true);
  const [registered, setRegistered] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate fetching event data
    const timer = setTimeout(() => {
      setEvent(eventData);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Event link has been copied to clipboard",
    });
  };
  
  const handleRegister = () => {
    setRegistered(true);
    toast({
      title: "Registration successful",
      description: "You have successfully registered for this event",
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

  const percentFilled = event.maxAttendees ? (event.attendeeCount / event.maxAttendees) * 100 : 0;
  const spotsLeft = event.maxAttendees - event.attendeeCount;
  const isFullyBooked = spotsLeft <= 0;

  return (
    <div className="min-h-screen bg-light">
      <Helmet>
        <title>{event.title} | Epiphany Scientific Club</title>
        <meta name="description" content={event.description} />
      </Helmet>
      
      <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
        <Link to="/events" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to all events
        </Link>
        
        <div className="mb-8">
          <span className="inline-block bg-primary/90 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {event.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
          
          <p className="text-lg text-dark/80 mb-6">{event.description}</p>
        </div>
        
        {event.image && (
          <div className="mb-10">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        )}
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <article 
              className="prose prose-stone max-w-none"
              dangerouslySetInnerHTML={{ __html: event.content }}
            />
          </div>
          
          <div className="lg:w-80">
            <div className="glass-panel p-6 rounded-xl sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Event Details</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Calendar size={18} className="mr-3 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Date</div>
                    <div className="text-dark/70">{event.date}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={18} className="mr-3 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Time</div>
                    <div className="text-dark/70">{event.time}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={18} className="mr-3 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-dark/70">{event.location}</div>
                  </div>
                </div>
                
                {event.host && (
                  <div className="flex items-start">
                    <Users size={18} className="mr-3 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Host</div>
                      <div className="text-dark/70">{event.host}</div>
                    </div>
                  </div>
                )}
                
                {event.price && (
                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      $
                    </div>
                    <div>
                      <div className="font-medium">Price</div>
                      <div className="text-dark/70">{event.isFree ? "Free" : event.price}</div>
                    </div>
                  </div>
                )}
              </div>
              
              {event.registrationDeadline && (
                <div className="mb-4 flex items-start text-sm">
                  <AlertCircle size={16} className="mr-2 text-primary" />
                  <span>Registration closes on {event.registrationDeadline}</span>
                </div>
              )}
              
              {event.maxAttendees && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-dark/70">
                      <span className="font-medium">{event.attendeeCount}</span> attending
                    </span>
                    <span className="text-sm text-dark/70">
                      {spotsLeft > 0 ? `${spotsLeft} spots left` : "Fully booked"}
                    </span>
                  </div>
                  <Progress value={percentFilled} className="h-2" />
                </div>
              )}
              
              {!registered ? (
                <Button 
                  className="w-full"
                  disabled={isFullyBooked}
                  onClick={handleRegister}
                >
                  {isFullyBooked ? "Fully Booked" : "Register Now"}
                </Button>
              ) : (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                  You're registered for this event
                </div>
              )}
              
              <Button
                variant="outline"
                className="w-full mt-3"
                onClick={handleShare}
              >
                <Share2 size={16} className="mr-2" />
                Share Event
              </Button>
              
              {event.requirements && event.requirements.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-medium mb-2">What to bring</h4>
                  <ul className="text-sm space-y-1">
                    {event.requirements.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
