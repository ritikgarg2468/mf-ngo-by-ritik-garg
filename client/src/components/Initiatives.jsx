import React from 'react';
import { motion } from 'framer-motion';

const Initiatives = () => {
  const initiatives = [
    {
      title: 'Plates of Kindness',
      description: 'We believe that everyone deserves the basic dignity of a warm meal. While providing shelter to all those in need might not always be possible, we extend our support by distributing 1,000 nutritious meals every month to individuals living on the streets, in temporary huts, or in vulnerable conditions. For many, a meal isn\'t just food—it\'s hope, strength, and the assurance that someone cares.',
      image: 'https://ngo-landing-page-rho.vercel.app/initiative1.avif',
      link: 'https://donate.stripe.com/test_bIYg0E2sHggwfkcbIJ'
    },
    {
      title: 'Threads of Hope',
      description: 'We donate 100 pairs of clothing, footwear, and blankets every month to those in need. This project is dedicated to providing essential items that offer warmth, dignity, and comfort to individuals living in vulnerable conditions to make life a little easier for those struggling without basic necessities. For individuals facing life without shelter or security, even small essentials like clothing and blankets can make a world of difference.',
      image: 'https://ngo-landing-page-rho.vercel.app/initiative2.avif',
      link: 'https://donate.stripe.com/test_bIYg0E2sHggwfkcbIJ'
    },
    {
      title: 'Safe Haven',
      description: 'We believe that everyone deserves a safe place to rest and rebuild their lives. We provide well-maintained shelters equipped with basic necessities, offering a sense of security and dignity. Our shelters are spaces where individuals can find emotional support, guidance, and encouragement to rebuild their lives. Residents participate in workshops on life skills, financial literacy, and health education, preparing them for a self-reliant and independent future.',
      image: 'https://ngo-landing-page-rho.vercel.app/initiative3.avif',
      link: 'https://donate.stripe.com/test_bIYg0E2sHggwfkcbIJ'
    }
  ];

  return (
    <section id="initiatives" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6">Our Initiatives</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow"
            >
              <img src={initiative.image} alt={initiative.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">{initiative.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{initiative.description}</p>
                <a
                  href={initiative.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-gold text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition"
                >
                  Support This Initiative
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;