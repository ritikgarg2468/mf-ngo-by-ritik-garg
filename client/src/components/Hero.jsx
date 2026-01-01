import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Spreading Smiles, <br/><span className="text-brand-gold">Building Futures</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Empowering lives with shelter, care, and education, one smile at a time.
        </p>
        <a href="#donate" className="bg-brand-gold text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 hover:shadow-lg transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.5)]">
          Start Donating
        </a>
      </motion.div>
    </div>
  );
};
export default Hero;