import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa';

interface AboutMeProps {
  onClose: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onClose }) => {
  const services = [
    {
      icon: FaCode,
      title: "Web Geliştirme",
      description: "Modern ve responsive web uygulamaları geliştiriyorum."
    },
    {
      icon: FaLaptopCode,
      title: "Frontend Geliştirme",
      description: "React, Next.js ve modern frontend teknolojileri ile kullanıcı dostu arayüzler tasarlıyorum."
    },
    {
      icon: FaServer,
      title: "Backend Geliştirme",
      description: "Node.js ve Python ile güvenli ve ölçeklenebilir API'ler geliştiriyorum."
    },
    {
      icon: FaMobileAlt,
      title: "Bot Geliştirme",
      description: "Discord, Telegram ve diğer platformlarda botlar geliştiriyorum."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-dark-300/95 backdrop-blur-sm z-50 overflow-y-auto"
    >
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Hakkımda</h2>
            <p className="text-gray-400 text-lg">
              Modern web teknolojileri ile kullanıcı dostu ve yenilikçi çözümler üreten bir yazılım geliştiricisiyim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card bg-dark-200 hover:bg-dark-100 transition-all duration-300"
              >
                <div className="card-body">
                  <service.icon className="text-4xl text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <button
              onClick={onClose}
              className="btn btn-primary bg-primary/20 hover:bg-primary/30 text-primary border-primary"
            >
              Geri Dön
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe; 