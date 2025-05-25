import React from 'react';
import { Github, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-300 py-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-2xl font-bold bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent"
            >
              henox
            </a>
            <p className="text-gray-400 mt-2">:)</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Henox77"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center text-gray-400 hover:text-primary-300 hover:bg-dark-100 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://instagram.com/YOUR_INSTAGRAM_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:bg-dark-100 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://youtube.com/YOUR_YOUTUBE_CHANNEL_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-dark-100 transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="mailto:contact@henox" 
              className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center text-gray-400 hover:text-primary-300 hover:bg-dark-100 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} henoxdev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;