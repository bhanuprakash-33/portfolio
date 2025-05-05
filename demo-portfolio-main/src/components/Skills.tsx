import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Settings2 } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'C', span: 'col-span-1', category: 'lang' },
  { icon: Code2, label: 'JAVA', span: 'col-span-2', category: 'lang' },
  { icon: Code2, label: 'Python', span: 'col-span-1', category: 'lang' },
  { icon: Code2, label: 'C++', span: 'col-span-1', category: 'lang' },
  {
    icon: Code2,
    label: 'HTML',
    span: 'col-span-2 row-span-2',
    category: 'lang',
  },
  { icon: Code2, label: 'CSS', span: 'col-span-2', category: 'lang' },
  { icon: Code2, label: 'JavaScript', span: 'col-span-1', category: 'lang' },
  {
    icon: Database,
    label: 'SQL Server',
    span: 'col-span-1 row-span-2',
    category: 'db',
  },
  { icon: Database, label: 'MySQL', span: 'col-span-2', category: 'db' },
  { icon: Settings2, label: 'Git', span: 'col-span-2', category: 'tool' },
  { icon: Settings2, label: 'Prodigy', span: 'col-span-1', category: 'tool' },
  { icon: Settings2, label: 'Trailhead', span: 'col-span-1', category: 'tool' },
];

const categoryStyles = {
  lang: 'text-blue-400',
  db: 'text-green-400',
  tool: 'text-purple-400',
};

const Skills = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Technical Skills
        </h2>

        <div className="relative z-10 mt-16 grid grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-5xl auto-rows-fr">
          {skills.map(({ icon: Icon, label, span, category }, index) => {
            const style =
              categoryStyles[category as keyof typeof categoryStyles];
            return (
              <div
                key={index}
                className={`flex flex-col justify-between p-4 ${span} bg-white/10 border border-white/20 rounded-xl backdrop-blur-md shadow-md hover:scale-105 transition-transform duration-300 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon size={24} className={`mb-2 ${style}`} />
                <span className={`text-sm font-semibold ${style}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
