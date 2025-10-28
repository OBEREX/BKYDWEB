import { motion } from 'motion/react';

export function ScrollingBanner() {
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
