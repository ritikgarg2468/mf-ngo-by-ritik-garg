import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { number: '50+', label: 'Lives Impacted' },
    { number: '2', label: 'Active Projects' },
    { number: '5', label: 'Volunteers' }
  ];

  return (
    <section className="py-16 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-black border border-gray-800 p-6 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;