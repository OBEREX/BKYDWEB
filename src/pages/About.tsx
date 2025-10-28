"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import svgPaths from "../imports/svg-nf5cf90h5x";
import imgPexelsPhotoByChristinaMorillo from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import imgRectangle1 from "figma:asset/127beeb9b5071e3939c158f9bf65908c054cbadc.png";
import imgRectangle4 from "figma:asset/ecdf2ef4526036646ca20c1a56e7d8cb806f4378.png";
import imgRectangle3 from "figma:asset/f347921dcfe3a7a62552cd9726521a8fb8479237.png";
import imgRectangle2 from "figma:asset/b20258fa30547b825decc6e7cca13dc27e17bfba.png";
import img1 from "figma:asset/0be3546621a0c82f467a1065092444bbcf328c11.png";
import imgInvertedComma1 from "figma:asset/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { faqs } from "../data/faqs";

interface AboutProps {
  onNavigate?: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      navigate(`/${page === 'home' ? '' : page}`);
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Esther Jackson",
      message: "Working with Backyard was a game changer. It completely transformed our workflow and eliminated the time we waste trying to coordinate with each other. Highly recommend!",
    },
    {
      id: 2,
      name: "Michael Chen",
      message: "Outstanding service and exceptional results. The team delivered beyond our expectations on every front.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onNavigate={handleNavigate}
        currentPage="about"
      />

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
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Learn more about our team and what drives us to deliver exceptional digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-100">
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
              <span className="text-sm tracking-wide">Who Are We</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", image: imgRectangle1 },
              { name: "Michael Chen", role: "CTO", image: imgRectangle4 },
              { name: "Emily Rodriguez", role: "Lead Designer", image: imgRectangle3 },
              { name: "David Kim", role: "Senior Developer", image: imgRectangle2 },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">What Our Clients Say</h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeTestimonial === idx ? 1 : 0 }}
                className={`${activeTestimonial === idx ? "block" : "hidden"} bg-blue-50 rounded-2xl p-8 md:p-12`}
              >
                <img src={imgInvertedComma1} alt="" className="h-12 mb-6" />
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">{testimonial.message}</p>
                <div className="flex items-center gap-4">
                  <img src={img1} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === idx ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm tracking-wide">Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
              Our <span className="text-blue-600">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Digital Solutions",
                description: "Custom software development, web and mobile applications tailored to your business needs with modern technologies.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Technology Outsourcing",
                description: "Access top-tier technical talent and resources to scale your development capabilities cost-effectively.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Consulting",
                description: "Strategic technology advisory, digital strategy planning, and implementation guidance to align your IT initiatives with business goals.",
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
                <button
                  onClick={() => handleNavigate('services')}
                  className="text-gray-600 hover:text-blue-600 flex items-center gap-2 group transition-colors"
                >
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-1 bg-gray-200" />

            {[
              { number: "01", title: "Consulting", description: "We analyze your needs and provide strategic technology advisory" },
              { number: "02", title: "Strategy", description: "Digital strategy planning tailored to your business goals" },
              { number: "03", title: "Implementation", description: "Expert execution with agile methodologies and best practices" },
              { number: "04", title: "Final Result", description: "Delivered solution with ongoing support and optimization" },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-4 relative"
              >
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

      {/* Services Marquee */}
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm tracking-wide">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">Frequently asked questions</h2>
            <p className="text-gray-600">We're happy to answer your questions</p>
          </motion.div>

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
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
