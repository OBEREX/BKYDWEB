import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import svgPaths from "../imports/svg-nty77d3k0k";
import imgPexelsPhotoByChristinaMorillo from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import imgRectangle1 from "figma:asset/127beeb9b5071e3939c158f9bf65908c054cbadc.png";
import imgRectangle3 from "figma:asset/f347921dcfe3a7a62552cd9726521a8fb8479237.png";
import imgRectangle2 from "figma:asset/b20258fa30547b825decc6e7cca13dc27e17bfba.png";
import imgInvertedComma1 from "figma:asset/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function Home() {
  const [, setActiveSection] = useState("home");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "process", "projects", "testimonials", "faq", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const projects = [
    {
      id: 1,
      title: "CarAlert247",
      description: "Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling.",
      category: "digital",
      tags: ["TypeScript", "Express", "PostgreSQL"],
    },
    {
      id: 2,
      title: "QuikLearn",
      description: "Interactive learning platform with course management and progress tracking for students and educators.",
      category: "digital",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Enterprise Portal",
      description: "Scalable enterprise solution for managing business operations and team collaboration.",
      category: "outsourcing",
      tags: ["Vue.js", "Python", "Redis"],
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time analytics and reporting platform for data-driven decision making.",
      category: "consulting",
      tags: ["React", "D3.js", "AWS"],
    },
    {
      id: 5,
      title: "Mobile Commerce",
      description: "Full-featured mobile commerce application with seamless payment integration.",
      category: "digital",
      tags: ["React Native", "Firebase", "Stripe"],
    },
    {
      id: 6,
      title: "Cloud Migration",
      description: "Complete cloud infrastructure migration and optimization for enterprise clients.",
      category: "outsourcing",
      tags: ["AWS", "Docker", "Kubernetes"],
    },
  ];

  const filteredProjects = selectedFilter === "all" ? projects : projects.filter((p) => p.category === selectedFilter);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Working with this team transformed our digital presence completely. Their expertise and dedication are unmatched.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, DataFlow Systems",
      content: "Outstanding service and exceptional results. They delivered beyond our expectations on every front.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateCo",
      content: "A truly professional team that understands business needs and delivers innovative solutions.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive digital solutions including custom software development, mobile applications, web development, technology outsourcing, and strategic consulting services.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A standard web application takes 8-12 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.",
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements to ensure your solution continues to meet your evolving needs.",
    },
    {
      question: "What industries do you work with?",
      answer: "We work across various industries including healthcare, finance, e-commerce, education, logistics, and more. Our adaptable approach allows us to deliver solutions for any sector.",
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and regular client communication to ensure the highest quality standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-800/90 z-10" />
          <img
            src={imgPexelsPhotoByChristinaMorillo}
            alt=""
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-blue-600 text-sm tracking-wide">Innovative IT Solutions</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
                Powering <span className="text-blue-500">Digital Transformation</span>
                <br />
                for the Modern Enterprise
              </h1>
              <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl">
                We deliver cutting-edge digital solutions, technology outsourcing, and consulting services that help
                businesses innovate faster, scale smarter, and stay ahead in a connected world.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg transition-colors"
              >
                <span>Explore More</span>
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 18 14">
                  <path d={svgPaths.p861db00} fill="white" />
                  <path clipRule="evenodd" d={svgPaths.p1513c330} fill="white" fillRule="evenodd" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center justify-center text-white hover:text-blue-400 px-6 py-3 md:px-8 md:py-4 rounded-lg transition-colors border-b-2 border-white hover:border-blue-400"
              >
                View All Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* Services Marquee */}
      <div className="bg-blue-600 py-5 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {["Digital Solutions", "Technology Outsourcing", "Consulting"].map((service, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 25 25">
                    <circle cx="12.005" cy="12.005" r="9.00375" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M8.50354 12.005H15.5065" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p66bcde0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p12979680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <span className="text-white text-lg">{service}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px]"
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-3xl overflow-hidden row-span-2"
                >
                  <img src={imgRectangle1} alt="" className="w-full h-full object-cover" />
                </motion.div>
                <div className="flex flex-col gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-3xl overflow-hidden flex-1"
                  >
                    <img src={imgRectangle2} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-3xl overflow-hidden flex-1"
                  >
                    <img src={imgRectangle3} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm tracking-wide">About Us</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
                Transforming Ideas into Scalable <span className="text-blue-600">Digital Realities</span>
              </h2>

              <p className="text-gray-600 text-base md:text-lg">
                We deliver cutting-edge digital solutions, technology outsourcing, and consulting services that help
                businesses innovate faster, scale smarter, and stay ahead in a connected world.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200">
                {[
                  { value: "20+", label: "Team Members" },
                  { value: "2000+", label: "Happy Client" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl text-blue-600">{stat.value}</div>
                    <div className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CEO Signature */}
              <div className="space-y-2">
                <p className="font-['Fasthand'] text-2xl md:text-3xl text-gray-600">Christopher Abhuilimen</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-blue-600">CEO</span>
                </div>
              </div>

              {/* Learn More Link */}
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span className="border-b-2 border-blue-600">Learn More About Us</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 18 14">
                    <path d={svgPaths.p861db00} fill="currentColor" />
                    <path clipRule="evenodd" d={svgPaths.p1513c330} fill="currentColor" fillRule="evenodd" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm tracking-wide">Our Services</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
                Services We Provide to <span className="text-blue-600">Elevate Your Business</span>
              </h2>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <span>View All Services</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 20 16">
                <path d={svgPaths.p3bd376c0} fill="white" />
                <path clipRule="evenodd" d={svgPaths.p2e959500} fill="white" fillRule="evenodd" />
              </svg>
            </motion.button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                    <path d={svgPaths.p263d100} stroke="#1559CB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p21315c00} stroke="#1559CB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                ),
                title: "Digital Solutions",
                description:
                  "Custom software development, mobile applications, web development, and digital transformation strategies to enhance your business operations.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                    <path d={svgPaths.p27a3200} stroke="#1559CB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.pdc20e80} stroke="#1559CB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p18f42980} stroke="#1559CB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p2ee517c0} stroke="#1559CB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                ),
                title: "Technology Outsourcing",
                description:
                  "Access to skilled IT professionals, dedicated development teams, and managed IT services to optimize your technology infrastructure.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                    <path d={svgPaths.p27a3200} stroke="#1559CB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.pdc20e80} stroke="#1559CB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p18f42980} stroke="#1559CB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p2ee517c0} stroke="#1559CB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                ),
                title: "Consulting",
                description:
                  "Strategic technology advisory, digital strategy planning, and implementation guidance to align your IT initiatives with business goals.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl p-6 md:p-8 space-y-6 shadow-lg border-b-4 border-blue-600 cursor-pointer"
              >
                <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl text-gray-700">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="text-gray-600 hover:text-blue-600 flex items-center gap-2 group transition-colors">
                  <span className="border-b-2 border-transparent group-hover:border-blue-600">Learn More</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 18 14">
                    <path d={svgPaths.p861db00} fill="currentColor" />
                    <path clipRule="evenodd" d={svgPaths.p1513c330} fill="currentColor" fillRule="evenodd" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="process" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm tracking-wide">Our Work Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
              Our Proven <span className="text-blue-600">Work Process</span>
            </h2>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-1 bg-gray-200" />

            {[
              { number: "01", title: "Consulting", description: "Strategic technology advisory, digital strategy planning, and implem" },
              { number: "02", title: "Strategy", description: "Strategic technology advisory, digital strategy planning" },
              { number: "03", title: "Implementation", description: "Strategic technology advisory, digital strategy planning" },
              { number: "04", title: "Final Result", description: "Strategic technology advisory, digital strategy planning" },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-4 relative"
              >
                {/* Icon Circle */}
                <div className="relative z-10">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-blue-600 flex items-center justify-center relative">
                    <div className="absolute top-2 right-2 w-10 h-10 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-sm">{step.number}</span>
                    </div>
                    <svg className="w-12 h-12 md:w-14 md:h-14" fill="none" viewBox="0 0 54 54">
                      <path d={svgPaths.p155c9600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
                      <path clipRule="evenodd" d={svgPaths.p31d05d00} fillRule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
                      <path d="M26.9285 13.8006V44.8807" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl text-gray-700">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Marquee 2 */}
      <div className="bg-blue-600 py-5 overflow-hidden">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {["Digital Solutions", "Technology Outsourcing", "Consulting"].map((service, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 25 25">
                    <circle cx="12.005" cy="12.005" r="9.00375" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M8.50354 12.005H15.5065" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <span className="text-white text-lg">{service}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm tracking-wide">Our Latest Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
              Explore our Showcase of
              <br />
              <span className="text-blue-600">Featured Work</span>
            </h2>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {[
              { id: "all", label: "All Projects" },
              { id: "digital", label: "Digital Solutions" },
              { id: "outsourcing", label: "Technology Outsourcing" },
              { id: "consulting", label: "Consultations" },
            ].map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedFilter === filter.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-600"
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              >
                {/* Project Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors" />
                  <div className="text-6xl text-blue-600/20 group-hover:scale-110 transition-transform">
                    {project.title.charAt(0)}
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/90 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                        <path d="M10 2H14V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M6.66667 9.33333L14 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded">
                      {project.category === "digital" ? "Digital Solution" : project.category === "outsourcing" ? "Outsourcing" : "Consulting"}
                    </span>
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gray-50 rounded-xl p-8 space-y-6 relative"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 opacity-20">
                  <img src={imgInvertedComma1} alt="" className="w-full h-full" />
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Author */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm tracking-wide">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg border border-gray-200 px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm tracking-wide">Contact Us</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
                  Let's Start a <span className="text-blue-600">Conversation</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Ready to transform your business? Get in touch with our team and let's discuss how we can help you
                  achieve your goals.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@digitalagency.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">123 Business Street, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-6">
                {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-100 hover:bg-blue-600 rounded-lg flex items-center justify-center group transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.1 ? 1 : 0, scale: scrollYProgress.get() > 0.1 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-40 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}
