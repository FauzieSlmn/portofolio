import React from 'react';
import profilePicture from '../her02.jpg'; // Import your profile picture

const About = () => {
  return (
    <section id="about" className="p-4 bg-white text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center">
        <img src={profilePicture} alt="Profile" className="w-24 h-24 rounded-full mb-4 md:mr-4 md:mb-0" />
        <div>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="mb-4">I'm a Robotic Engineer passionate about developing innovative solutions. Here are some of my projects.</p>
          <a href="/portofolio.pdf" className="text-blue-600 hover:underline">View Portfolio</a>
        </div>
      </div>
    </section>
  );
};

export default About;
