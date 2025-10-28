import { motion } from 'motion/react';
import imgTestimonialAvatar from "../assets/0be3546621a0c82f467a1065092444bbcf328c11.png";
import imgInvertedComma from "../assets/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png";

interface TestimonialsProps {
  activeTestimonial: number;
  setActiveTestimonial: (index: number) => void;
}

export function Testimonials({ activeTestimonial, setActiveTestimonial }: TestimonialsProps) {
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
            <linearGradient id="grad-testimonial" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1668E8', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#151F01', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="200" cy="100" r="150" fill="none" stroke="url(#grad-testimonial)" strokeWidth="2" />
          <circle cx="200" cy="200" r="200" fill="none" stroke="url(#grad-testimonial)" strokeWidth="2" />
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
