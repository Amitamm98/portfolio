import { motion } from 'framer-motion';
import { Code2, Globe, Palette, Smartphone } from 'lucide-react';
import React from 'react';
import AnimatedSection from './AnimatedSection';

const ServiceCard = ({ icon: Icon, title, description, index }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05, translateY: -10 }}
    className="flex-1 min-w-[280px] bg-gradient-to-r from-[#29323c] to-[#485563] p-8 rounded-lg m-4 shadow-lg cursor-pointer"
  >
    <div className="text-white mb-6">
      <Icon size={48} className="mx-auto" />
    </div>
    <h2 className="text-2xl font-medium text-white mb-4">{title}</h2>
    <p className="text-gray-300 text-base leading-relaxed">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance and user experience."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creative and intuitive user interface designs that enhance user experience and drive engagement."
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Strategic optimization to improve your website's visibility and ranking in search engine results."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your website looks and functions perfectly across all devices."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="text-crimson">Services</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Delivering comprehensive web solutions tailored to your needs, from design to development and optimization.
          </p>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;