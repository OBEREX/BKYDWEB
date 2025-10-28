import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import svgPaths from "../imports/svg-nf5cf90h5x";
import imgPexelsPhotoByChristinaMorillo from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import imgRectangle1 from "figma:asset/127beeb9b5071e3939c158f9bf65908c054cbadc.png";
import imgRectangle3 from "figma:asset/f347921dcfe3a7a62552cd9726521a8fb8479237.png";
import imgRectangle2 from "figma:asset/b20258fa30547b825decc6e7cca13dc27e17bfba.png";
import img1 from "figma:asset/0be3546621a0c82f467a1065092444bbcf328c11.png";
import imgInvertedComma1 from "figma:asset/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Esther Jackson",
      message: "I can't describe how great we feel using our services. It completely changed our workflow and the time we waste on trying to connect with each other. Outstanding!",
    },
    {
      id: 2,
      name: "Michael Chen",
      message: "Outstanding service and exceptional results. The team delivered beyond our expectations on every front.",
    },
  ];

  const faqs = [
    {
      question: "What is Team Newsify?",
      answer: "Team Newsify is a comprehensive platform designed to streamline communication and collaboration within organizations.",
    },
    {
      question: "How is the team Newsify",
      answer: "The team is highly skilled and dedicated to delivering exceptional results for our clients.",
    },
    {
      question: "What does the technology work?",
      answer: "Our technology leverages cutting-edge solutions to provide seamless integration and optimal performance.",
    },
    {
      question: "How often will i get team Newsify?",
      answer: "You'll receive regular updates and notifications based on your customized preferences.",
    },
    {
      question: "How automated is this?",
      answer: "It is almost completely automated as a system. You can schedule plan and create calendars for your upcoming tasks. You can use Analyzer AI, tracker, AI reporter, AI to create a smooth business plan for you and your teammates with one click!",
    },
    {
      question: "It is close to news letter regular?",
      answer: "While similar in some aspects, our platform offers much more than traditional newsletters.",
    },
    {
      question: "Can i get a live demo of Newsify in action?",
      answer: "Yes! Contact our team to schedule a personalized demo at your convenience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center py-20 md:py-32"
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl">About Us</h1>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
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
            </motion.div>
          </div>
        </div>
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
                  </svg>
                  <span className="text-white text-lg">{service}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

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
      <section className="py-16 md:py-24 bg-white">
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
              { number: "01", title: "Consulting", description: "Strategic technology advisory, digital strategy planning, and implementation" },
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
            ].map((filter, idx) => (
              <motion.button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
            {["CarAlert247", "QuikLearn", "Anything"].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              >
                {/* Project Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors" />
                  <div className="text-6xl text-gray-400 group-hover:scale-110 transition-transform">
                    {project.charAt(0)}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl text-gray-800">{project}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    Comprehensive healthcare management solution for hospitals and clinics with patient records and
                    appointment scheduling.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded">Digital Solution</span>
                    <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded">TypeScript</span>
                    <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded">Express</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Marquee 3 */}
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
                  </svg>
                  <span className="text-white text-lg">{service}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#020e37] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white text-blue-600 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white">
              Testimonials: <span className="text-blue-600">Trusted by our Clients</span>
            </h2>
          </motion.div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900 rounded-3xl p-8 space-y-6 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 w-16 h-16 opacity-10">
                  <img src={imgInvertedComma1} alt="" className="w-full h-full rotate-180" />
                </div>

                {/* Content */}
                <p className="text-white leading-relaxed relative z-10">{testimonial.message}</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={img1} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white">{testimonial.name}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-1 rounded-full transition-all ${
                  idx === activeTestimonial ? "w-8 bg-blue-600" : "w-4 bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Marquee 4 */}
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

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
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
              <span className="text-sm tracking-wide">Contact Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
              Reach out to <span className="text-blue-600">Us!</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#020e37] rounded-2xl p-8 md:p-12 text-white space-y-12"
            >
              <div className="space-y-8">
                <div>
                  <p className="text-gray-400 text-sm mb-2">SEND DIRECT EMAIL</p>
                  <p className="text-lg">contact@backyardtech.co.uk</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">CALL US</p>
                  <p className="text-lg">+44 324 3553 8577</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">ADDRESS</p>
                  <p className="text-lg">45, London, England, UK</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
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
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors"
                    placeholder="xxx-xxx-xxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Company Name (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors"
                    placeholder="Enter company name"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors"
                >
                  Get Started
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-100">
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
              <span className="text-sm tracking-wide">Contact Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">Frequently asked questions</h2>
            <p className="text-gray-600">We're happy to answer your questions</p>
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
                    <span className="text-gray-900 text-lg">{faq.question}</span>
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

      {/* Services Marquee 5 */}
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
                  </svg>
                  <span className="text-white text-lg">{service}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <Footer />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
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
