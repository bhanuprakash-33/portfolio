import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black px-6 py-20">
      {/* Floating Header */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full shadow-md">
        <span className="text-white font-semibold tracking-wide text-sm">
          Portfolio of Bhanu Prakash
        </span>
      </div>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 transition-transform duration-300"
        style={{
          backgroundImage:
            'url("https://framerusercontent.com/images/6CIQiO9TnIv2LHpIZllPosPNauY.png")',
          transform: `translateY(${offset * 0.2}px)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Bhanu Prakash Dudam
          </h1>
          <p className="text-blue-100 text-lg md:text-2xl font-medium mb-8">
            Master's in Computer Science · Full Stack Developer · Cloud
            Enthusiast
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <ContactButton
              href="mailto:bhanuprakashdudam@gmail.com"
              Icon={Mail}
              label="Email"
            />
            <ContactButton href="tel:3342202601" Icon={Phone} label="Call" />
            <ContactButton
              href="https://linkedin.com/in/bhanu-prakash-dudam-11526b229"
              Icon={Linkedin}
              label="LinkedIn"
              external
            />
            <ContactButton
              href="https://github.com/"
              Icon={Github}
              label="GitHub"
              external
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10">
            <img
              src="https://media.istockphoto.com/id/1139459625/photo/silhouette-of-man-in-dark-place-anonymous-backlit-contour-a.jpg?s=612x612&w=0&k=20&c=p7R8hZOhAMNBgtnQqOIuM5n_P_QKMZfoHQclzjs4ulI="
              alt="Professional Bhanu"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactButton = ({ href, Icon, label, external = false }: any) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="flex items-center gap-2 px-5 py-2 rounded-full text-white bg-white/10 hover:bg-white/20 transition backdrop-blur-sm border border-white/20 shadow-sm hover:scale-105 duration-200 text-sm font-medium"
  >
    <Icon size={18} />
    {label}
  </a>
);

export default Hero;
