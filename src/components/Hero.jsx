import React from 'react';
import heroImage from '../hero.jpg'; // Pastikan Anda memiliki gambar ini
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
    const [content] = useTypewriter({
        words: ['Robotic Engineer.', 'IoT Enthusiast.', 'Tech Innovator.'],
        loop: {},
        typeSped: 120,
    });
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center p-8">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Hi, I'm Fauzie Salman</h1>
        <p className="text-2xl mb-8 ">I'm a <span>{content}</span><Cursor cursorColor='red' /></p>
        
      </div>
    </section>
  );
};

export default Hero;
