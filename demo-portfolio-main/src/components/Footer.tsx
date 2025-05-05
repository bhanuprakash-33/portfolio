import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#222222] text-[#999999] text-sm py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="mb-2">
            Copyright ©{currentYear} Bhanu Prakash Dudam. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
