import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Musursta <span className="text-brand-gold">Foundation</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering lives with shelter, care, and education, one smile at a time.
            </p>
            <div className="flex items-center text-gray-400">
              <Heart className="w-4 h-4 text-brand-gold mr-2" />
              <span>Made with love for a better world</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition">Our Initiatives</a></li>
              <li><a href="#donate" className="text-gray-400 hover:text-brand-gold transition">Donate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>info@musurstafoundation.org</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                <a href="https://www.instagram.com/musurstafoundation" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition">
                  @musurstafoundation
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2026 Musursta Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;