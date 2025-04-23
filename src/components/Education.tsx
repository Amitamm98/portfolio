import { motion } from 'framer-motion';
import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  index: number;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  location,
  period,
  description,
  achievements,
  index
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative flex flex-col md:flex-row gap-6 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="absolute -left-3 top-8 hidden md:block w-6 h-6 bg-crimson rounded-full border-4 border-white" />
    
    <div className="md:w-1/3">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{degree}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin size={16} className="mr-2" />
        <span>{location}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Calendar size={16} className="mr-2" />
        <span>{period}</span>
      </div>
    </div>
    
    <div className="md:w-2/3">
      <h4 className="text-lg font-semibold text-crimson mb-2">{institution}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        {achievements.map((achievement, i) => (
          <div key={i} className="flex items-start gap-2">
            <Award size={16} className="text-crimson mt-1 flex-shrink-0" />
            <span className="text-gray-700">{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      degree: "Post Graduation- Master In Computer Application",
      institution: "Graphic Era Hill University",
      location: "Dehradun, Uttrakhand",
      period: "2023 - 2025 ",
      description: "Specialized in Programming launaguages and Machine Learning with a focus on practical applications in web development.",
      achievements: [
        "Pursuing",
        
      ]
    },
    {
      degree: "Under Graduation-Bachelor In Computer Application",
      institution: "Alpine  Institute of Management and  Technology",
      location: "Dehradun, Uttrakhand",
      period: "2019 - 2023",
      description: "Comprehensive study of Programming Languages, with emphasis on web technologies and system architecture.",
      achievements: [
        
      ]
    },
    {
      degree: "Intermediate (Class 12th)",
      institution: "School: Doon Grammar Public School",
      location: "Jollygrant, Dehradun,Uttrakhand",
      period: "2017-2019",
      description:"",
      achievements: ["CBSC Board"
      ]
    },
    {
      degree: "High School (Class 10th)",
      institution: "School: Holy Angel Senior Secondary School",
      location: "Manjri grant,Dehradun,Uttrakhand",
      period: "2015-2017",
      description: "",
      achievements: [
        "CBSC Board"
      ]
    }

  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-crimson">Education</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A journey of continuous learning and academic excellence, building a strong foundation in technology and innovation.
          </p>
        </AnimatedSection>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-200 before:-z-10 md:before:ml-[16.5rem] pl-8 md:pl-0">
          {educationData.map((education, index) => (
            <EducationItem key={index} {...education} index={index} />
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center gap-2 text-crimson"
            whileHover={{ scale: 1.05 }}
          >
            <GraduationCap size={24} />
            <span className="text-lg font-medium">Continuing Education and Professional Development</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;