"use client";

import { motion } from "motion/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import svgPaths from "../imports/svg-pguqfs0gr5";
import imgPexelsPhotoByChristinaMorillo from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function Contact() {

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
      <section className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
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
          className="relative z-20 text-center py-16 md:py-24"
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl">Contact Us</h1>
        </motion.div>
      </section>

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#020e37] rounded-2xl p-8 md:p-12 text-white space-y-12 relative overflow-hidden"
            >
              {/* Decorative Background Patterns */}
              <div className="absolute -left-32 top-1/3 w-80 h-80 opacity-20">
                <svg className="w-full h-full" fill="none" viewBox="0 0 335 335">
                  <circle cx="167.212" cy="167.212" fill="white" r="167.212" />
                  <mask height="335" id="mask0" maskUnits="userSpaceOnUse" width="335" x="0" y="0">
                    <circle cx="167.212" cy="167.212" fill="#E1E7ED" r="167.212" />
                  </mask>
                  <g mask="url(#mask0)">
                    <rect fill="#1559CB" height="314.244" width="11.5319" x="106.67" y="5.766" />
                    <rect fill="#1559CB" height="314.244" width="11.5319" x="144.149" y="5.766" />
                    <rect fill="#1559CB" height="314.244" width="11.5319" x="181.628" y="5.767" />
                    <rect fill="#1559CB" height="314.244" width="11.5319" x="219.107" y="5.765" />
                    <rect fill="#1559CB" height="314.244" width="11.5319" x="256.584" y="5.766" />
                    <rect fill="#1559CB" height="314.244" width="11.5319" x="294.065" y="5.764" />
                  </g>
                </svg>
              </div>

              <div className="absolute right-0 bottom-0 w-20 h-20 opacity-20">
                <svg className="w-full h-full" fill="none" viewBox="0 0 75 75">
                  <circle cx="37.25" cy="37.25" fill="white" r="37.25" />
                </svg>
              </div>

              <div className="space-y-8 relative z-10">
                <div>
                  <p className="text-gray-400 text-sm mb-2 tracking-wider">SEND DIRECT EMAIL</p>
                  <p className="text-lg">contact@backyardtech.co.uk</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2 tracking-wider">CALL US</p>
                  <p className="text-lg">+44 324 3553 8577</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2 tracking-wider">ADDRESS</p>
                  <p className="text-lg">45, London, England, UK</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 relative z-10">
                {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 14 14">
                      <path d={svgPaths.p3a55dd40} fillOpacity="0.48" />
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-colors transition-colors"
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

      {/* Footer */}
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
