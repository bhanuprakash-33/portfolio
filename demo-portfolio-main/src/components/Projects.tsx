import React, { useEffect, useState, useRef } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  technologies?: string[];
  index: number;
  isVisible: boolean;
}

const Project: React.FC<ProjectProps> = ({ 
  title, description, technologies = [], index, isVisible 
}) => {
  const direction = index % 2 === 0 ? 'left' : 'right';
  const delay = index * 200;
  
  return (
    <div 
      className={`bg-white p-8 rounded-lg shadow-md transform transition-all duration-700 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : `${direction === 'left' ? '-translate-x-10' : 'translate-x-10'} opacity-0`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const projects = [
    {
      title: "Secure Smart Cloud Based Healthcare Applications",
      description: "Developed a comprehensive cloud-based application aimed at enhancing the privacy and security of healthcare data. This project involved creating an innovative solution combining biosensors, wireless networks, Java, and JSP. The application ensures data confidentiality while providing healthcare services efficiently.",
      technologies: ["Java", "JSP", "Cloud Computing", "Biosensors", "Security"]
    },
    {
      title: "Digital Watermark Embedding Method",
      description: "Engineered a lightweight digital watermarking system leveraging edge computing to enhance privacy and efficiency in processing outsourced host images. Implemented Haar Discrete Wavelet Transformation (HDWT) and Singular Value Decomposition (SVD) for secure embedding, significantly improving encryption and decryption rates.",
      technologies: ["Edge Computing", "HDWT", "SVD", "Image Processing", "Encryption"]
    },
    {
      title: "NER Recipe Labeling Model",
      description: "Developed a Named Entity Recognition (NER) model from scratch by meticulously annotating and processing unlabeled datasets, achieving a 57% accuracy improvement through iterative model training and refinement. Utilized Python, Prodigy, and spaCy to preprocess, annotate, and train datasets, enhancing model performance despite constraints on data quality and time limitations.",
      technologies: ["Python", "NER", "Prodigy", "spaCy", "Machine Learning"]
    },
    {
      title: "Recipe Classifier Model",
      description: "Developed a Python-based text classification model leveraging Prodigy, an annotation tool, to categorize Reddit comments as relevant or irrelevant to cooking needs. The model was trained and evaluated on a dataset achieving a categorical accuracy score of over 80%. This solution efficiently extended, and a report based on dealing with the recipe classifier problem was made.",
      technologies: ["Python", "Text Classification", "Prodigy", "Machine Learning"]
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-t from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;