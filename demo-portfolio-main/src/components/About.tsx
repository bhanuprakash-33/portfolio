import React, { useEffect, useState, useRef } from 'react';
import { GraduationCap, Code, Briefcase } from 'lucide-react';

const About = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className={`bg-white p-8 rounded-lg shadow-md transform transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                <GraduationCap size={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">
              Education
            </h3>
            <p className="text-gray-600">
              Pursuing a Master's in Computer Science at Auburn University at
              Montgomery with a strong academic foundation.
            </p>
          </div>

          <div
            className={`bg-white p-8 rounded-lg shadow-md transform transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                <Code size={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">
              Technical Skills
            </h3>
            <p className="text-gray-600">
              Proficient in multiple programming languages, databases, and
              development tools with a focus on practical applications.
            </p>
          </div>

          <div
            className={`bg-white p-8 rounded-lg shadow-md transform transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                <Briefcase size={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">
              Experience
            </h3>
            <p className="text-gray-600">
              Professional experience through internships, training programs,
              and academic roles focused on software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
