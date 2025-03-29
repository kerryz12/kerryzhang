import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Kerry Zhang. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/kerry-zhang-ee"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/kerryz12"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-7 h-7" />
          </a>
          <a
            href="mailto:kerryzhang12@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaEnvelope className="w-7 h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;