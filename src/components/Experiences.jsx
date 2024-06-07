import React from 'react';

const Experience = () => {
  return (
    <section id="experiences" className="p-4 bg-white text-center md:text-left">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-lg font-semibold">
          IoT Engineer, PT. Infra Datatech Indonesia</h3>
          <p className="text-gray-600">Feb 2024 - Jul 2024</p>
          <p className="mt-2">Supervised the water leak detection and fuel leak detection projects at the Haryono Data Center construction site, ensuring high standards of safety and functionality.</p>
          <p className="mt-2">Designed and built an IoT website to control MCBs, enhancing operational efficiency and control.</p>

        </div>
        <div>
          <h3 className="text-lg font-semibold">
Practice Assistant Robotics, Universitas Pendidikan Indonesia</h3>
          <p className="text-gray-600">Sep 2023 - Dec 2023</p>
          <p className="mt-2">Accompany and guide in practicums in robotics course.</p>
        </div>
        {/* Add more experience items as needed */}
      </div>
    </section>
  );
};

export default Experience;
