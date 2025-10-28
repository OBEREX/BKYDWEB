"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import svgPaths from "../imports/svg-nf5cf90h5x";
import img from "figma:asset/3c60352fc04f4c23b7ff3320566bb0abf5635e82.png";
import imgPexelsPhotoByChristinaMorillo from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import imgRectangle1 from "figma:asset/127beeb9b5071e3939c158f9bf65908c054cbadc.png";
import imgRectangle4 from "figma:asset/ecdf2ef4526036646ca20c1a56e7d8cb806f4378.png";
import imgRectangle3 from "figma:asset/f347921dcfe3a7a62552cd9726521a8fb8479237.png";
import imgRectangle2 from "figma:asset/b20258fa30547b825decc6e7cca13dc27e17bfba.png";
import img1 from "figma:asset/0be3546621a0c82f467a1065092444bbcf328c11.png";
import imgInvertedComma1 from "figma:asset/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: "Esther Jackson",
      message: "I cant describe how great we feel using Newsify. It completely changed our workflow and the face we waste on trying to connect each other. Top Newsify!",
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
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-12 w-16 md:h-16 md:w-20 cursor-pointer"
              >
                <img alt="Logo" className="h-full w-full object-contain" src={img} />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-lg text-blue-600"
              >
                About Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/services')}
                className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/projects')}
                className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </motion.button>
            </div>

            {/* Contact Button */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-colors"
              >
                <span>Contact Us</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 13 10">
                  <path d={svgPaths.p106ce100} fill="white" />
                  <path clipRule="evenodd" d={svgPaths.p2b15e400} fill="white" fillRule="evenodd" />
                </svg>
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-2">
              <Link to="/" className="block w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <button className="block w-full text-left px-4 py-3 rounded-lg text-blue-600 bg-blue-50">
                About Us
              </button>
              <button
                onClick={() => { navigate('/services'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => { navigate('/projects'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <Link to="/contact" className="block w-full" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-sm tracking-wide">About Our Company</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building Digital
                <span className="text-blue-600"> Excellence Together</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                We are a team of passionate professionals dedicated to transforming businesses through innovative digital solutions. 
                Our mission is to empower organizations with cutting-edge technology and strategic insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/30"
                >
                  Get In Touch
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/services')}
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-medium transition-colors"
                >
                  Our Services
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative z-10"
              >
                <img
                  src={imgPexelsPhotoByChristinaMorillo}
                  alt="About Us"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-2xl opacity-20 blur-xl"
              />
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600 rounded-2xl opacity-20 blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Team Members" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
                icon: "💡",
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in every project, ensuring quality that exceeds expectations.",
                icon: "⭐",
              },
              {
                title: "Partnership",
                description: "We build lasting relationships with our clients, working together towards shared success.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Smith", role: "CEO & Founder", image: imgRectangle1 },
              { name: "Sarah Johnson", role: "CTO", image: imgRectangle2 },
              { name: "Michael Chen", role: "Lead Designer", image: imgRectangle3 },
              { name: "Emily Rodriguez", role: "Project Manager", image: imgRectangle4 },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-blue-100">Real feedback from our valued partners</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12"
          >
            <div className="mb-6">
              <img src={imgInvertedComma1} alt="Quote" className="w-12 h-12" />
            </div>
            <p className="text-gray-700 text-lg mb-6">{testimonials[activeTestimonial].message}</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</div>
                <div className="text-gray-600 text-sm">Satisfied Client</div>
              </div>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let's discuss how we can help transform your business with innovative digital solutions
            </p>
            <div className="space-y-6">
              <form className="max-w-md mx-auto space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors"
                >
                  Get Started
                </motion.button>
              </form>
            </div>
          </motion.div>
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

      {/* Footer */}
      <footer className="bg-[#020e37] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="h-12 w-16">
                <img alt="Logo" className="h-full w-full object-contain brightness-0 invert" src={img} />
              </div>
              <p className="text-gray-400 text-sm">
                Effortlessly manage and organize chats, tasks, and files in one central location with Qoterra chat
                management solutions
              </p>
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
            </div>

            {/* Navigate */}
            <div>
              <h4 className="mb-4">Navigate</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><button className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => navigate('/services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => navigate('/projects')} className="hover:text-white transition-colors">Projects</button></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Support Us */}
            <div>
              <h4 className="mb-4">Support Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button className="hover:text-white transition-colors">FAQ's</button></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><button className="hover:text-white transition-colors">Support Center</button></li>
                <li><button className="hover:text-white transition-colors">Security</button></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button className="hover:text-white transition-colors">Community</button></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><button className="hover:text-white transition-colors">Terms of service</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">Terms & Conditions, Privacy Policy, Cookies Policy, Sitemap</p>
            <p className="text-sm text-gray-400">© 2025 Backyard Technologies, All right reserved</p>
          </div>
        </div>
      </footer>

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