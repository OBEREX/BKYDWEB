import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Globe } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import imgHeroBg from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import imgTestimonialAvatar from "figma:asset/0be3546621a0c82f467a1065092444bbcf328c11.png";
import imgInvertedComma from "figma:asset/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Projects Section */}
      <ProjectsSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      
      {/* Scrolling Banner */}
      <ScrollingBanner />
      
      {/* Testimonials */}
      <Testimonials activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} />
      
      {/* Scrolling Banner */}
      <ScrollingBanner />
      
      <Footer />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <div className="relative bg-[#353851] py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-90">
        <img 
          src={imgHeroBg} 
          alt="" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="mb-8">Our Projects</h1>
        </motion.div>
      </div>
    </div>
  );
}

// Projects Section
function ProjectsSection({ activeFilter, setActiveFilter }: { 
  activeFilter: string; 
  setActiveFilter: (filter: string) => void;
}) {
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'digital', label: 'Digital Solutions' },
    { id: 'outsourcing', label: 'Technology Outsourcing' },
    { id: 'consulting', label: 'Consultations' },
  ];

  const projects = [
    {
      id: 1,
      title: 'CarAlert247',
      description: 'Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling.',
      category: 'digital',
      tags: ['TypeScript', 'Express', 'PostgreSQL'],
      logo: 'https://via.placeholder.com/200x200/1559cb/ffffff?text=CA',
    },
    {
      id: 2,
      title: 'QuikLearn',
      description: 'Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling.',
      category: 'digital',
      tags: ['TypeScript', 'Express', 'PostgreSQL'],
      logo: 'https://via.placeholder.com/200x200/0065FF/ffffff?text=QL',
    },
    {
      id: 3,
      title: 'TechConnect',
      description: 'Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling.',
      category: 'outsourcing',
      tags: ['TypeScript', 'Express', 'PostgreSQL'],
      logo: 'https://via.placeholder.com/200x200/FF8C00/ffffff?text=TC',
    },
    {
      id: 4,
      title: 'DataFlow Pro',
      description: 'Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling.',
      category: 'digital',
      tags: ['TypeScript', 'Express', 'PostgreSQL'],
      logo: 'https://via.placeholder.com/200x200/1559cb/ffffff?text=DF',
    },
    {
      id: 5,
      title: 'SmartConsult',
      description: 'Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling.',
      category: 'consulting',
      tags: ['TypeScript', 'Express', 'PostgreSQL'],
      logo: 'https://via.placeholder.com/200x200/0065FF/ffffff?text=SC',
    },
    {
      id: 6,
      title: 'CloudSync',
      description: 'Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling.',
      category: 'outsourcing',
      tags: ['TypeScript', 'Express', 'PostgreSQL'],
      logo: 'https://via.placeholder.com/200x200/FF8C00/ffffff?text=CS',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="bg-[#f6f6f6] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-sm tracking-wider">Our Latest Projects</span>
          </div>
          <h2 className="mb-4">
            Explore our Showcase of <span className="text-blue-600">Featured Work</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              {/* Project Image/Logo */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={project.logo} alt={project.title} className="w-32 h-32 object-contain" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-black text-white text-xs px-3 py-1 rounded">
                    Digital Solution
                  </span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Scrolling Banner
function ScrollingBanner() {
  const items = ['Digital Solutions', 'Technology Outsourcing', 'Consulting'];
  
  return (
    <div className="bg-blue-600 py-5 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-8">
            {items.map((item) => (
              <div key={`${item}-${i}`} className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-white" />
                <span className="text-white text-lg">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Testimonials Section
function Testimonials({ activeTestimonial, setActiveTestimonial }: { 
  activeTestimonial: number; 
  setActiveTestimonial: (index: number) => void;
}) {
  const testimonials = [
    {
      name: 'Esther Jackson',
      text: 'I cant describe how great we feel using Newsify. It completely changed our workflow and the face we waste on truying to connect each other.Top Newsify!"',
      avatar: imgTestimonialAvatar,
    },
    {
      name: 'Esther Jackson',
      text: 'I cant describe how great we feel using Newsify. It completely changed our workflow and the face we waste on truying to connect each other.Top Newsify!"',
      avatar: imgTestimonialAvatar,
    },
  ];

  return (
    <section className="bg-[#020e37] py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1668E8', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#151F01', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="200" cy="100" r="150" fill="none" stroke="url(#grad2)" strokeWidth="2" />
          <circle cx="200" cy="200" r="200" fill="none" stroke="url(#grad2)" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-sm tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-white">
            Testimonials: <span className="text-blue-600">Trusted by our Clients</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1e1f20] rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Quote Marks */}
              <div className="absolute top-8 right-8 opacity-10">
                <img src={imgInvertedComma} alt="" className="w-16 h-16 rotate-180" />
              </div>

              <p className="text-white mb-8 relative z-10">{testimonial.text}</p>

              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className="text-white/90">{testimonial.name}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`h-1 rounded-full transition-all ${
                activeTestimonial === index ? 'w-12 bg-blue-600' : 'w-12 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

