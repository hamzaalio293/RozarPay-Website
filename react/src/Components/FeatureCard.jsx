import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
   <div className='flex flex-col items-center text-center p-6 hover:transform
    hover:scale-105 transition-transform duration-200'>
        <div className='w-16 h-16 mb-6 relative'>
            <div className='absolute inset-0 bg-blue-400 opacity-20 rounded-full'></div>
            <img 
            src={icon}
            alt={title}
            className='w-full h-full object-contain relative z-10'
             />
        </div>
        <h3 className='text-xl font-bold text-white mb-4'>{title}</h3>
        <p className='text-gray-300 text-sm leading-relaxed'>{description}</p>
        <p></p>
   </div>
  );
};

export default FeatureCard; 