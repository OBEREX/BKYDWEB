import { motion } from 'motion/react';
import { useState } from 'react';
import { BookOpen, Users, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import imgHeroBg from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import imgTestimonialAvatar from "figma:asset/0be3546621a0c82f467a1065092444bbcf328c11.png";
import imgInvertedComma from "figma:asset/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png";

export default function Services() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(4);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Scrolling Banner */}
      <ScrollingBanner />

      {/* Work Process */}
      <WorkProcess />

      {/* Scrolling Banner 2 */}
      <ScrollingBanner />

      {/* Testimonials */}
      <Testimonials activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} />

      {/* Scrolling Banner 3 */}
      <ScrollingBanner />

      {/* Contact Form */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQSection openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} />

      {/* Scrolling Banner 4 */}
      <ScrollingBanner />

      <Footer />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <div className="relative bg-[#353851] py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <img
          src={imgHeroBg}
          alt=""
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="mb-8">Our Services</h1>
          <p className="text-white/90">Home / Services</p>
        </motion.div>
      </div>
    </div>
  );
}

// Services Grid Section
function ServicesGrid() {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Digital Solutions',
      description: 'Custom software development, mobile applications, web development, and digital transformation strategies to enhance your business operations.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Technology Outsourcing',
      description: 'Access to skilled IT professionals, dedicated development teams, and managed IT services to optimize your technology infrastructure.',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Consulting',
      description: 'Strategic technology advisory, digital strategy planning, and implementation guidance to align your IT initiatives with business goals.',
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-sm tracking-wider">Our Services</span>
          </div>
          <h2 className="max-w-3xl mx-auto">
            Services We Provide to <span className="text-blue-600">Elevate Your Business</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-700 group"
              >
                <span className="border-b-2 border-white group-hover:border-gray-700 transition-colors">Learn More</span>
                <ArrowRight className="w-7 h-7 text-blue-500" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={`${service.title}-2`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-700 group"
              >
                <span className="border-b-2 border-white group-hover:border-gray-700 transition-colors">Learn More</span>
                <ArrowRight className="w-7 h-7 text-blue-500" />
              </motion.button>
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
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-white text-lg">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Work Process Section
function WorkProcess() {
  const steps = [
    { number: '01', title: 'Consulting', description: 'Strategic technology advisory, digital strategy planning, and implem' },
    { number: '02', title: 'Strategy', description: 'Strategic technology advisory, digital strategy planning,' },
    { number: '03', title: 'Implementation', description: 'Strategic technology advisory, digital strategy planning,' },
    { number: '04', title: 'Final Result', description: 'Strategic technology advisory, digital strategy planning,' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-sm tracking-wider">Our Work Process</span>
          </div>
          <h2>
            Our Proven <span className="text-blue-600">Work Process</span>
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-blue-600 rounded-full" />
                  <div className="absolute top-8 right-0 w-9 h-9 bg-black rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs">{step.number}</span>
                  </div>
                  <div className="absolute top-6 left-6">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                </div>

                <h3 className="text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-1 bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials({ activeTestimonial, setActiveTestimonial }: { activeTestimonial: number; setActiveTestimonial: (index: number) => void }) {
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
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1668E8', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#151F01', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="200" cy="100" r="150" fill="none" stroke="url(#grad1)" strokeWidth="2" />
          <circle cx="200" cy="200" r="200" fill="none" stroke="url(#grad1)" strokeWidth="2" />
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

// Contact Section
function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-sm tracking-wider">Contact Us</span>
          </div>
          <h2>
            Reach out to <span className="text-blue-600">Us!</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[#020e37] rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute -left-32 top-48 w-80 h-80 opacity-20">
              <div className="w-full h-full rounded-full border-8 border-white" />
            </div>

            <div className="relative z-10 space-y-12">
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
              <div className="flex gap-3 pt-4">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">First Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Last Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">Email Address *</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="xxx-xxx-xxxx"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">Company Name (Optional)</label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Get Started
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection({ openFAQ, setOpenFAQ }: { openFAQ: number | null; setOpenFAQ: (index: number | null) => void }) {
  const faqs = [
    { question: 'What is Team Newsify?', answer: '' },
    { question: 'How is the team Newsify', answer: '' },
    { question: 'What does the technology work?', answer: '' },
    { question: 'How often will i get team Newsify?', answer: '' },
    {
      question: 'How automated is this?',
      answer: 'It is alomost completely automated as a system. You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker, Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!'
    },
    { question: 'It is close to news letter regular?', answer: '' },
    { question: 'Can i get a live demo of Newsify in action?', answer: '' },
  ];

  return (
    <section className="bg-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-sm tracking-wider">Contact Us</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-center mb-4">Frequently asked questions</h2>
          <p className="text-center text-gray-600 mb-12">We're happy to answer your questions</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg text-gray-800">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      openFAQ === index ? 'bg-blue-600' : 'bg-gray-100'
                    }`}>
                      <CheckCircle2 className={`w-5 h-5 ${openFAQ === index ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                  </motion.div>
                </button>
                {openFAQ === index && faq.answer && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
