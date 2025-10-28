import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import imgHeroBg from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollingBanner } from '../components/ScrollingBanner';
import { Testimonials } from '../components/Testimonials';

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
        onNavigate={onNavigate}
        currentPage="projects"
      />
      
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
      
      {/* Footer */}
      <Footer onNavigate={onNavigate} />
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
