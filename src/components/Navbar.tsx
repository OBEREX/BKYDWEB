import { motion } from 'motion/react';
import { ChevronRight, Menu, X } from 'lucide-react';
import imgBackyardLogo from "../assets/3c60352fc04f4c23b7ff3320566bb0abf5635e82.png";

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navbar({ mobileMenuOpen, setMobileMenuOpen, onNavigate, currentPage }: NavbarProps) {
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
                onClick={() => onNavigate(item.page)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`px-4 py-2 rounded-xl transition-all ${
                  currentPage === item.page
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
            onClick={() => onNavigate('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-3 bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Contact Us
            <ChevronRight className="w-5 h-5" />
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
                  currentPage === item.page ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
