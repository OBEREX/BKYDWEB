import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import imgBackyardLogo from "../assets/3c60352fc04f4c23b7ff3320566bb0abf5635e82.png";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    navigate: [
      { name: 'Home', page: 'home' },
      { name: 'About', page: 'about' },
      { name: 'Product', page: 'product' },
      { name: 'Feature', page: 'feature' },
      { name: 'Pricing', page: 'pricing' },
    ],
    support: ['FAQs', 'Contact Us', 'Support Center', 'Security'],
    resources: ['Community', 'Contact', 'Terms of service'],
  };

  return (
    <footer className="bg-[#020e37] text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={imgBackyardLogo} alt="Backyard Logo" className="h-20 w-auto mb-6" />
            <p className="text-white/80 mb-6">
              Transform your digital presence with Backyard's innovative software development, consulting, and technology outsourcing solutions.
            </p>
            <div className="flex gap-3">
              {[
                { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
                { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
                { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
                { name: 'Linkedin', icon: Linkedin, url: 'https://linkedin.com' }
              ].map(({ name, icon: Icon, url }) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${name} page`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Icon size={16} className="text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mb-6">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => onNavigate(link.page)}
                    className="text-white/70 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-6">Support Us</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>Terms & Conditions, Privacy Policy, Cookies Policy, Sitemap</p>
            <p>© 2025 Backyard Technologies, All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
