import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Info Side */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              Feel free to reach out for opportunities, collaborations, or just
              to say hello. I'm always interested in new projects and
              challenges.
            </p>

            <div className="space-y-4 text-sm">
              <ContactRow
                Icon={Mail}
                href="mailto:bhanuprakashdudam@gmail.com"
                label="bhanuprakashdudam@gmail.com"
              />
              <ContactRow
                Icon={Phone}
                href="tel:3342202601"
                label="(334) 220-2601"
              />
              <ContactRow
                Icon={Linkedin}
                href="https://www.linkedin.com/in/bhanu-prakash-dudam-11526b229"
                label="LinkedIn Profile"
                external
              />
              <ContactRow
                Icon={Github}
                href="#"
                label="GitHub Profile"
                external
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
            <form className="space-y-6">
              <FormInput
                id="name"
                label="Name"
                type="text"
                placeholder="Your Name"
              />
              <FormInput
                id="email"
                label="Email"
                type="email"
                placeholder="Your Email"
              />
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                />
              </div>
              <button
                type="button"
                className="w-full py-3 px-6 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactRow = ({ Icon, href, label, external = false }: any) => (
  <div className="flex items-center gap-4">
    <Icon size={20} className="text-blue-400" />
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="hover:underline hover:text-blue-300 transition-colors"
    >
      {label}
    </a>
  </div>
);

const FormInput = ({ id, label, type, placeholder }: any) => (
  <div>
    <label className="block text-sm font-medium mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
    />
  </div>
);

export default Contact;
