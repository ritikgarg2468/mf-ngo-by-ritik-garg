import React from 'react';
import { motion } from 'framer-motion';

const Volunteers = () => {
  const partners = [
    { name: 'Community Foundation', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'City Council', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Local Business Association', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Education Board', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' }
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6">Volunteers</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Work together with our amazing organization to make a difference.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={partner.logo} alt={partner.name} className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-brand-gold" />
              <p className="text-gray-400 text-sm text-center">{partner.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteers;