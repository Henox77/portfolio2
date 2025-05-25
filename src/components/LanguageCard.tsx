import React from 'react';
import { motion } from 'framer-motion';

interface LanguageCardProps {
  name: string;
  icon: React.ReactElement;
  color: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ name, icon, color }) => {
  const coloredIcon = React.cloneElement(icon, { style: { color: color.replace('border-', '').replace('/30', '') } });

  return (
    <div className={`card bg-dark-300 hover:bg-dark-100 transition-all duration-300 cursor-pointer border ${color}`}>
      <div className="card-body p-4 flex flex-col items-center justify-center">
        <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">
          {coloredIcon}
        </div>
        <h3 className="text-sm font-medium text-white text-center">{name}</h3>
      </div>
    </div>
  );
};

export default LanguageCard;