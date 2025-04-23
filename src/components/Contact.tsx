import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import AnimatedSection from './AnimatedSection';

const ContactCard = ({ icon: Icon, title, details, index }: {
  icon: React.ElementType;
  title: string;
  details: string[];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="text-crimson">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600">{detail}</p>
      ))}
    </div>
  </motion.div>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 6395455773 , 8393897890"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["namit8928@gmail.com"]
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Bhaniyawala,Dehradun,Uttrakhand(248140)"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contact <span className="text-crimson">Info</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Get in touch with me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;