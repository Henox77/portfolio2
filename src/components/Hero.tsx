import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-dark-200 relative overflow-hidden flex items-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
             initial={{ opacity: 0, y: -50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, type: "spring" }}
             className="relative w-48 h-48 mx-auto mb-8"
           >
             <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="absolute inset-2 rounded-full bg-dark-200 overflow-hidden">
              <img
                src="https://i.imgur.com/5uucn74.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4 mb-4"
          >
            <motion.a
              href="https://github.com/Henox77"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-3xl text-white hover:text-primary transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://instagram.com/YOUR_INSTAGRAM_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-3xl text-white hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://youtube.com/YOUR_YOUTUBE_CHANNEL_ID"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-3xl text-white hover:text-red-600 transition-colors duration-300"
            >
              <FaYoutube />
            </motion.a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Merhaba, Ben <span className="text-primary">Henox</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-8"
          >
            Full Stack Web Geliştirici
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="https://wa.me/8562076663419"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none hover:from-pink-600 hover:to-purple-700"
            >
              WhatsApp'tan İletişime Geç
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#gradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;