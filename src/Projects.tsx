import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Globe, Menu, X } from 'lucide-react';
import imgBackyardLogo from "./imports/figma:asset/3c60352fc04f4c23b7ff3320566bb0abf5635e82.png";
import imgHeroBg from "./imports/figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import imgTestimonialAvatar from "./imports/figma:asset/0be3546621a0c82f467a1065092444bbcf328c11.png";
import imgInvertedComma from "./imports/figma:asset/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png";

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

// Navbar Component
function Navbar({ mobileMenuOpen, setMobileMenuOpen, onNavigate }: { 
  mobileMenuOpen: boolean; 
  setMobileMenuOpen: (open: boolean) => void;
  onNavigate: (page: string) => void;
}) {
  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Projects', page: 'projects' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img src={imgBackyardLogo} alt="Backyard Logo" className="h-16 w-auto" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onNavigate(item.page)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  item.page === 'projects'
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-3 bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ExternalLink className="w-5 h-5" />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.page)}
                className={`block w-full text-left px-4 py-3 ${
                  item.page === 'projects' ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md">
              Contact Us
              <ExternalLink className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
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

// Footer
function Footer({ onNavigate }: { onNavigate: (page: string) => void }) {
  const footerLinks = {
    navigate: [
      { name: 'Home', page: 'home' },
      { name: 'About', page: 'about' },
      { name: 'Product', page: 'product' },
      { name: 'Feature', page: 'feature' },
      { name: 'Pricing', page: 'pricing' },
    ],
    support: ['FAQ`s', 'Contact Us', 'Support Center', 'Security'],
    resources: ['Community', 'Contact', 'Tems of service'],
  };

  return (
    <footer className="bg-[#020e37] text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={imgBackyardLogo} alt="Backyard Logo" className="h-20 w-auto mb-6" />
            <p className="text-white/80 mb-6">
              Efforlessly manage and organize chats, tasks, and files in one centeral location with Qoterra chat management solutions
            </p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.button
                  key={social}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <div className="w-4 h-4 bg-white/50 rounded-full" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mb-6">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => onNavigate(link.page)}
                    className="text-white/70 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-6">Support Us</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>Terms & Conditions, Privacy Policy, Cookies Policy, Sitemap</p>
            <p>© 2025 Backyard Technologies, All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
