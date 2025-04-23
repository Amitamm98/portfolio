import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-[url('/zoro.JPG')] bg-cover bg-top z-10">
      <div className="absolute inset-0 bg-black opacity-70 -z-10" />
      <div className="max-w-[1200px] mx-auto px-[50px] min-h-screen flex items-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-7xl text-white mb-4"
          >
            Hello,
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-7xl text-white mb-4"
          >
            My Name is
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl md:text-7xl text-crimson font-medium mb-4"
          >
            Amit Rana
          </motion.h1>
          <motion.a 
            href="#projects"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 md:px-12 md:py-5 text-xl md:text-2xl text-white border-2 border-crimson uppercase tracking-wider hover:bg-crimson transition-all duration-300"
          >
            Portfolio
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;