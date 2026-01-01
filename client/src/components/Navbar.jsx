import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-black sticky top-0 z-50 border-b border-gray-800">
      <div className="text-2xl font-bold text-white tracking-wide">
        Musursta <span className="text-brand-gold">Foundation</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#mission" className="text-gray-300 hover:text-brand-gold hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300">Our Story</a>
        <a href="#initiatives" className="text-gray-300 hover:text-brand-gold hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300">Initiatives</a>
        <a href="#contact" className="text-gray-300 hover:text-brand-gold hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300">Contact</a>
        <a href="#donate" className="bg-brand-gold text-black px-6 py-2 rounded-full hover:bg-yellow-500 hover:shadow-lg transition-all duration-300 font-semibold">Donate</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800 md:hidden">
          <div className="flex flex-col space-y-4 px-8 py-6">
            <a href="#mission" className="text-gray-300 hover:text-brand-gold hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300" onClick={() => setIsOpen(false)}>Our Story</a>
            <a href="#initiatives" className="text-gray-300 hover:text-brand-gold hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300" onClick={() => setIsOpen(false)}>Initiatives</a>
            <a href="#contact" className="text-gray-300 hover:text-brand-gold hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="#donate" className="bg-brand-gold text-black px-6 py-2 rounded-full hover:bg-yellow-500 hover:shadow-lg transition-all duration-300 font-semibold text-center" onClick={() => setIsOpen(false)}>Donate</a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;