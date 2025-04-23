import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#29323c] to-[#485563] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl uppercase text-white mb-4">
            <span className="text-crimson">A</span>mit{' '}
            <span className="text-crimson">R</span>ana
          </h1>
          <p className="text-gray-300 mb-8">Dream come into Reality</p>
          
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-white hover:text-crimson transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Amit Rana. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;