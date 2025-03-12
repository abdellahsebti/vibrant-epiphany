
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TeamMember from '../components/TeamMember';
import { Helmet } from 'react-helmet';

// Sample data
const founderMembers = [
  {
    name: 'Dr. Elizabeth Chen',
    role: 'Founder & President',
    bio: 'Ph.D. in Quantum Physics with over 15 years of research experience. Founded Epiphany to bridge the gap between theoretical science and practical applications.',
    image: '/placeholder.svg',
    socialLinks: [
      { type: 'email' as const, url: 'mailto:elizabeth@epiphanyclub.org' },
      { type: 'linkedin' as const, url: '#' },
      { type: 'twitter' as const, url: '#' }
    ]
  },
  {
    name: 'Prof. James Wilson',
    role: 'Co-Founder & Research Director',
    bio: 'Professor of Biochemistry with a passion for mentoring young scientists. Leads the research initiatives and partnerships at Epiphany.',
    image: '/placeholder.svg',
    socialLinks: [
      { type: 'email' as const, url: 'mailto:james@epiphanyclub.org' },
      { type: 'linkedin' as const, url: '#' },
      { type: 'website' as const, url: '#' }
    ]
  },
  {
    name: 'Dr. Sarah Johnson',
    role: 'Co-Founder & Education Chair',
    bio: 'Specializes in science education and communication. Passionate about making complex scientific concepts accessible to everyone.',
    image: '/placeholder.svg',
    socialLinks: [
      { type: 'email' as const, url: 'mailto:sarah@epiphanyclub.org' },
      { type: 'twitter' as const, url: '#' },
      { type: 'website' as const, url: '#' }
    ]
  }
];

const teamMembers = [
  {
    name: 'Dr. Michael Brown',
    role: 'Lead Researcher, AI Division',
    bio: 'Expert in artificial intelligence and machine learning, leading our cutting-edge AI research division.',
    image: '/placeholder.svg',
    socialLinks: [
      { type: 'email' as const, url: 'mailto:michael@epiphanyclub.org' },
      { type: 'linkedin' as const, url: '#' }
    ]
  },
  {
    name: 'Prof. Linda Martinez',
    role: 'Environmental Science Chair',
    bio: 'Professor of Environmental Science focusing on climate change solutions and sustainable development.',
    image: '/placeholder.svg',
    socialLinks: [
      { type: 'email' as const, url: 'mailto:linda@epiphanyclub.org' },
      { type: 'twitter' as const, url: '#' }
    ]
  },
  {
    name: 'Dr. David Kim',
    role: 'Biotechnology Director',
    bio: 'Leading our biotechnology initiatives with a focus on medical applications and healthcare innovations.',
    image: '/placeholder.svg',
    socialLinks: [
      { type: 'email' as const, url: 'mailto:david@epiphanyclub.org' },
      { type: 'linkedin' as const, url: '#' }
    ]
  },
  {
    name: 'Dr. Emily White',
    role: 'Ethics Committee Chair',
    bio: 'Specializes in ethics in scientific research and technology, ensuring our work adheres to the highest ethical standards.',
    image: '/placeholder.svg',
    socialLinks: [
      { type: 'email' as const, url: 'mailto:emily@epiphanyclub.org' },
      { type: 'website' as const, url: '#' }
    ]
  },
  {
    name: 'Alex Johnson',
    role: 'Community Outreach Coordinator',
    bio: 'Passionate about science communication and public engagement, leading our outreach programs.',
    image: '/placeholder.svg',
    socialLinks: [
      { type: 'email' as const, url: 'mailto:alex@epiphanyclub.org' },
      { type: 'twitter' as const, url: '#' }
    ]
  },
  {
    name: 'Dr. Rachel Lee',
    role: 'Data Science Lead',
    bio: 'Expert in data science and analytics, helping transform complex data into meaningful insights.',
    image: '/placeholder.svg',
    socialLinks: [
      { type: 'email' as const, url: 'mailto:rachel@epiphanyclub.org' },
      { type: 'linkedin' as const, url: '#' }
    ]
  }
];

const About = () => {
  const sectionRefs = {
    mission: useRef<HTMLDivElement>(null),
    founders: useRef<HTMLDivElement>(null),
    team: useRef<HTMLDivElement>(null),
    timeline: useRef<HTMLDivElement>(null),
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        const elements = ref.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));
      }
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>About Us | Epiphany Scientific Club</title>
        <meta name="description" content="Learn about the Epiphany Scientific Club, our mission, and the team behind our innovative research and community." />
      </Helmet>
      
      <section className="section-padding bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">About Epiphany</h1>
          <p className="text-dark/70 max-w-3xl mx-auto mb-8 animate-fadeIn">
            Discover our story, mission, and the passionate team behind the Epiphany Scientific Club.
          </p>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section ref={sectionRefs.mission} className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <span className="inline-block bg-primary/20 text-dark px-4 py-1 rounded-full text-sm font-medium mb-4">Our Mission</span>
              <h2 className="text-3xl font-bold mb-6">Advancing science through collaboration and innovation</h2>
              <p className="text-dark/80 mb-4">
                Epiphany Scientific Club was founded with a simple yet powerful mission: to create a collaborative environment where scientists, researchers, and enthusiasts can come together to advance scientific knowledge and make discoveries that matter.
              </p>
              <p className="text-dark/80 mb-6">
                We believe in the power of community, the importance of mentorship, and the value of diverse perspectives in scientific inquiry. Our club provides resources, support, and opportunities for members to explore their scientific interests, develop their skills, and contribute to meaningful research.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral/30 rounded-lg p-5 text-center">
                  <div className="text-primary text-3xl font-bold mb-2">800+</div>
                  <div className="text-dark/70">Active Members</div>
                </div>
                <div className="bg-neutral/30 rounded-lg p-5 text-center">
                  <div className="text-primary text-3xl font-bold mb-2">50+</div>
                  <div className="text-dark/70">Research Projects</div>
                </div>
                <div className="bg-neutral/30 rounded-lg p-5 text-center">
                  <div className="text-primary text-3xl font-bold mb-2">30+</div>
                  <div className="text-dark/70">Partner Institutions</div>
                </div>
                <div className="bg-neutral/30 rounded-lg p-5 text-center">
                  <div className="text-primary text-3xl font-bold mb-2">100+</div>
                  <div className="text-dark/70">Annual Events</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl -z-10"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Scientists collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founders Section */}
      <section ref={sectionRefs.founders} className="section-padding bg-neutral/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/20 text-dark px-4 py-1 rounded-full text-sm font-medium mb-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">Our Founders</span>
            <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">The visionaries behind Epiphany</h2>
            <p className="text-dark/70 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              Meet the brilliant minds who established Epiphany with a vision to transform scientific collaboration and discovery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {founderMembers.map((member, index) => (
              <TeamMember 
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                socialLinks={member.socialLinks}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section ref={sectionRefs.team} className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/20 text-dark px-4 py-1 rounded-full text-sm font-medium mb-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">Our Team</span>
            <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">Meet our dedicated team</h2>
            <p className="text-dark/70 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              Our team comprises passionate scientists, researchers, and educators committed to advancing scientific knowledge and fostering a community of curious minds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                socialLinks={member.socialLinks}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section ref={sectionRefs.timeline} className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/20 text-dark px-4 py-1 rounded-full text-sm font-medium mb-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">Our Journey</span>
            <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">Epiphany through the years</h2>
            <p className="text-dark/70 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              From our humble beginnings to our current growth, explore the key milestones in our journey.
            </p>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary/30 transform md:translate-x-[-50%]"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                { year: '2023', title: 'Epiphany Club Founded', description: 'Dr. Elizabeth Chen, Prof. James Wilson, and Dr. Sarah Johnson establish the Epiphany Scientific Club with an initial group of 50 members.' },
                { year: '2023', title: 'First Research Grant', description: 'The club secures its first major research grant to fund innovative projects in quantum computing and environmental science.' },
                { year: '2023', title: 'Launch of Educational Outreach', description: 'Introduction of the Science for All initiative, bringing science education to underserved communities.' },
                { year: '2023', title: 'First Annual Symposium', description: 'Hosting our inaugural scientific symposium with over 300 attendees and presentations from leading researchers.' },
                { year: '2023', title: 'Expansion to 500 Members', description: 'Club membership grows to 500, with members from diverse scientific backgrounds and institutions.' },
                { year: '2023', title: 'Present Day', description: 'With over 800 members, numerous research projects, and strong partnerships, Epiphany continues to grow and make an impact in the scientific community.' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } animate-on-scroll opacity-0 translate-y-10 transition-all duration-700`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1">
                    <div className={`relative bg-white rounded-lg p-6 shadow-md ${
                      index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                    }`}>
                      <div className="text-primary font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-dark/70">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-14 flex items-center justify-center z-10">
                    <div className="w-5 h-5 bg-primary rounded-full border-4 border-light"></div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="section-padding bg-dark text-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Be part of our journey</h2>
          <p className="text-light/70 max-w-2xl mx-auto mb-8">
            Join Epiphany today and become part of a vibrant community dedicated to advancing scientific knowledge and making a difference in the world.
          </p>
          <Link to="/signup" className="btn-primary flex items-center justify-center gap-2 mx-auto w-48">
            <span>Join Epiphany</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
