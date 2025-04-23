import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ProjectCard = ({ title, subtitle, description, imageUrl, index }: {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col lg:flex-row w-full bg-white rounded-lg overflow-hidden shadow-lg mb-8 hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="lg:w-1/2 p-8 bg-gradient-to-r from-[#29323c] to-[#485563]">
      <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
      <h4 className="text-xl text-crimson mb-4">{subtitle}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
    <motion.div 
      className="lg:w-1/2 relative overflow-hidden h-[300px]"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img 
        src={imageUrl} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Viti-Business Website",
      subtitle: "Front-End development",
      description: "A modern e-commerce platform built with React, and Bootstraps, boost your Business .",
      imageUrl: "/bus.png",
    },
    {
      title: "Portfolio Website",
      subtitle: "Web Design",
      description: "A responsive portfolio website showcasing creative work with smooth animations and modern design principles.",
      imageUrl: "/port.png",
    },
    {
      title: "True Stone Jewellery Website",
      subtitle: "Front-End Development ",
      description: "A collaborative web application with real-time updates and team collaboration features.",
      imageUrl: "/jew.png",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Recent <span className="text-crimson">Projects</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Explore our latest work and see how we help businesses achieve their goals through technology.
          </p>
        </AnimatedSection>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;