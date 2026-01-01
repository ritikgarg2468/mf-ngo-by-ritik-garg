import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show an alert. In a real app, you'd send to backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6">Contact Us</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you and discuss how we can work together to make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-neutral-900 border border-gray-800 p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-brand-gold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-gold text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-brand-gold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold p-3 rounded-full">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+91 0000000000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold p-3 rounded-full">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@musurstafoundation.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-gray-800 p-6 rounded-2xl">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <a
                href="https://www.instagram.com/musurstafoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-brand-gold transition"
              >
                <span>📱</span>
                <span>@musurstafoundation</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;