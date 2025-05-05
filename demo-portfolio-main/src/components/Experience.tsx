import React, { useEffect, useRef, useState } from 'react';

const experienceData = [
  {
    company: 'Auburn University at Montgomery',
    position: 'Computer Lab Assistant',
    duration: 'March 2025 – Present',
    description: [
      'Assist students with technical issues in the computer lab, ensuring a smooth and efficient work environment.',
      'Provide support for software and hardware troubleshooting, and help maintain lab equipment and resources.',
    ],
    delay: '100ms',
    image:
      'https://edysor.in/images/university/banner/Auburn-University-at-Montgomery.webp',
  },
  {
    company: 'Auburn University at Montgomery',
    position: 'Computer Science Tutor',
    duration: 'February 2025 – Present',
    description: [
      'Provide tutoring assistance to students in various computer science courses, focusing on key concepts, coding techniques, and problem-solving.',
      'Develop personalized learning strategies to improve student understanding and academic performance.',
    ],
    delay: '300ms',
    image:
      'https://edysor.in/images/university/banner/Auburn-University-at-Montgomery.webp',
  },
  {
    company: 'Salesforce',
    position: 'Online Intern',
    duration: 'May 2023 – July 2023',
    description: [
      'Completed Python Online Virtual Internship with Projects, Super Badges, and courses using Trailhead.',
      'Gained working experience on Salesforce technology through live boot camps and expert mentoring sessions.',
    ],
    delay: '500ms',
    image:
      'https://www.awsquality.com/wp-content/uploads/2019/05/TRAILHEADBLOG-min.png',
  },
  {
    company: 'HCL, Hyderabad, India',
    position: 'Professional Development',
    duration: 'September 2022 – January 2023',
    description: [
      'Completed HCL-Centum Foundation Java Full Stack Development training with hands-on and mentor sessions.',
    ],
    delay: '700ms',
    image:
      'https://businessnewsthisweek.com/wp-content/uploads/2021/01/HCL-Technologies.jpg',
  },
];

const Experience = () => {
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
    <section ref={sectionRef} className="py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
          Experience
        </h2>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md transform transition-all duration-700 overflow-hidden ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: exp.delay }}
            >
              <img
                src={exp.image}
                alt={exp.company}
                className="w-full h-48 object-cover hover:scale-[1.1] transition-all duration-700"
              />
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-blue-800">
                    {exp.company}
                  </h3>
                  <span className="text-sm text-gray-600 md:text-right">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-gray-700 font-medium mb-4">{exp.position}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
