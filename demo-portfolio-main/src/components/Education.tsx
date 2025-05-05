import React, { useEffect, useRef, useState } from 'react';

const educationData = [
  {
    institution: 'Auburn University at Montgomery',
    degree: 'Master of Science in Computer Science',
    duration: 'Expected December 2025',
    location: 'Montgomery, Alabama',
    gpa: '3.3 / 4.0',
    delay: '100ms',
    image:
      'https://edysor.in/images/university/banner/Auburn-University-at-Montgomery.webp',
  },
  {
    institution: 'Guru Nanak Institute of Technology',
    degree: 'Bachelor of Technology in Computer Science',
    duration: 'Graduated August 2023',
    location: 'Hyderabad, India',
    gpa: '7.24 / 10',
    delay: '300ms',
    image:
      'https://images.shiksha.com/mediadata/images/1736154849phpKUHOXF.jpeg',
  },
];

const Education = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden shadow-xl bg-white/10 border border-white/20 backdrop-blur-md transform transition-all duration-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: edu.delay }}
            >
              <div className="overflow-hidden">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {edu.institution}
                </h3>
                <p className="text-white/90 font-medium mb-1">{edu.degree}</p>
                <div className="flex flex-col sm:flex-row justify-between text-sm text-white/70 mb-3">
                  <span>{edu.duration}</span>
                  <span>{edu.location}</span>
                </div>
                <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1 rounded-full">
                  GPA: {edu.gpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
