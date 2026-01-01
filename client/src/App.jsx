import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Stats from './components/Stats';
import Initiatives from './components/Initiatives';
import Volunteers from './components/Volunteers';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Stats />
      <Initiatives />
      <Volunteers />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;