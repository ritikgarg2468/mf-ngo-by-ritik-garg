import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6">Our Mission</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black border border-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl"
        >
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
            At MUSURSTA FOUNDATION, our mission is to provide safe and supportive shelters
            for homeless children and hardworking individuals who lack a place to stay at
            night. We are committed to not only offering a roof over their heads but also
            empowering them through education in essential life skills, financial literacy, and
            health awareness. We believe in fostering independence and self-reliance,
            enabling individuals to break free from dependency and build a better future for
            themselves, their families, and the nation. Our goal is to create a community where
            everyone has the opportunity to learn, grow, and achieve success, turning
            challenges into stepping stones toward a brighter, more fulfilling life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;