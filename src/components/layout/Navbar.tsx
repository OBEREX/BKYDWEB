import { motion } from 'motion/react';
import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import imgBackyardLogo from "figma:asset/3c60352fc04f4c23b7ff3320566bb0abf5635e82.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path: string) => location.pathname === path;

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
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 cursor-pointer"
            >
              <img src={imgBackyardLogo} alt="Backyard Logo" className="h-16 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link key={item.name} to={item.path}>
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-xl transition-all ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-3 bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </Link>

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
              <Link key={item.name} to={item.path}>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 ${
                    isActive(item.path) ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
            <Link to="/contact">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md"
              >
                Contact Us
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
