import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img
                src="/th.jpeg"
                alt="Profile"
                className="w-full max-w-[500px] h-[600px] object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-full h-full border-4 border-crimson rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          
          <AnimatedSection className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-crimson">Me</span>
            </h2>
            <h3 className="text-2xl text-gray-700 mb-6">Aspiring Full Stack Developer | Passionate Coder | Creative Thinker</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
            I'm Amit Rana, a passionate and driven Full Stack Developer currently pursuing my post-graduation in Computer and Information Technology from Graphic Era Hill University, Dehradun.

With hands-on experience in building responsive websites and a strong foundation in technologies like HTML, CSS, JavaScript, React.js,  Tailwindcss and Bootstrap I specialize in crafting modern and user-friendly web applications. One of my key projects includes developing a fully functional E-commerce Restaurant Website, where I handled everything from design to database integration.

I’m also skilled in C, Java, and Python, and have a growing interest in Machine Learning and AI, backed by certifications from Sololearn and Great Learning. I enjoy solving problems, thinking logically, and transforming ideas into digital experiences.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
            What sets me apart is my creative mindset, leadership skills, and passion for learning. I believe in writing clean, optimized code and continuously improving my skills through self-learning and hands-on projects.

Whether I’m debugging a tricky issue or bringing a design to life, I code with care and intention. My goal is to contribute to impactful tech projects, collaborate with forward-thinking teams, and grow into a dynamic full stack developer who builds with purpose.
            </p>
            <motion.a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white rounded-lg hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;