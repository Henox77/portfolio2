import React from 'react';
import { motion } from 'framer-motion';
import LanguageCard from './LanguageCard';
//import { Languages as Icons } from './icons/Languages'; // Artık bu dosyaya ihtiyacımız kalmadı
import { TbBrandNextjs } from 'react-icons/tb';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaPhp, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiPostgresql, SiMysql, SiSqlite } from 'react-icons/si'; // Yeni ikonlar eklendi

const Languages: React.FC = () => {
  const languages = [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'border-orange-500/30' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'border-blue-500/30' },
    { name: 'React', icon: <FaReact />, color: 'border-cyan-400/30' },
    { name: 'Next.js', icon: <TbBrandNextjs />, color: 'border-white/30' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'border-blue-500/30' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'border-yellow-500/30' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'border-green-500/30' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'border-cyan-500/30' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'border-blue-700/30' },
    { name: 'MySQL', icon: <SiMysql />, color: 'border-blue-600/30' },
    { name: 'Python', icon: <FaPython />, color: 'border-blue-600/30' },
    { name: 'PHP', icon: <FaPhp />, color: 'border-purple-500/30' },
    { name: 'SQL', icon: <SiSqlite />, color: 'border-blue-400/30' }, // Genel SQL ikonu kullanıldı
    { name: 'Git', icon: <FaGitAlt />, color: 'border-red-500/30' }, // Git ikonu eklendi
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-200/80 via-dark-200 to-primary-900/20 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Kullandığım Teknolojiler
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            İşte geliştirme süreçlerimde aktif olarak kullandığım teknolojiler:
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              variants={itemVariants}
            >
              <LanguageCard
                name={lang.name}
                icon={lang.icon}
                color={lang.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;