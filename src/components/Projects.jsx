import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Egg Incubator",
      description: "The egg incubator system employs advanced control principles to regulate fans and lighting, ensuring optimal temperature and humidity levels for eggs. This system maintains the precise conditions necessary for egg incubation while optimizing power consumption, as it does not constantly run at full power.",
      imageUrl: "/images/project1.png", // Gambar disimpan di dalam direktori public/images
      link: "https://example.com/project1"
    },
    {
      title: "Smart MCB Management",
      description: "This project involves the development of a system that allows users to control Miniature Circuit Breakers (MCBs) remotely via an application. The system leverages internet connectivity to enable users to monitor and manage electrical circuits from anywhere, providing enhanced convenience, safety, and energy efficiency.",
      imageUrl: "/images/smartMcb.png",
      link: "https://github.com/FauzieSlmn/McbControl/tree/main/program_python"
    },
    {
      title: "Object Following with Arduino and Computer Vision",
      description: "This project integrates Arduino with computer vision technology to create an object-following system. Utilizing a camera and image processing algorithms, the system detects and tracks objects in real-time. The Arduino controls motors to adjust the movement, enabling the device to follow the detected object with precision.",
      imageUrl: "/images/objectFollowing.png",
      link: "https://github.com/FauzieSlmn/object-following-robot"
    },{
        title: "Website Hotel Project",
        description: "This project involves the development of a comprehensive website for a hotel. The website features an elegant and user-friendly design, providing guests with seamless access to information about the hotel's rooms. Key functionalities include online booking, room availability checking, guest reviews, and contact information. The website aims to enhance the user experience, streamline the booking process, and promote the hotel's offerings effectively.",
        imageUrl: "/images/hotelUyu.png",
        link: "https://github.com/FauzieSlmn/HOTEL-UYU"
      },
      {
        title: "Gas Sensor with ESP and Blynk",
        description: "This project involves the development of a gas detection system using an ESP microcontroller and the Blynk platform. The system monitors gas levels in real-time and sends alerts to a mobile application for immediate notification. Key features include real-time data visualization, configurable thresholds for gas detection, and remote monitoring capabilities, enhancing safety and awareness in environments prone to gas leaks.",
        imageUrl: "/images/gasSensor.png",
        link: "https://github.com/FauzieSlmn/GAS-SENSOR-ESP8266"
      },
    // Tambahkan lebih banyak proyek di sini
  ];

  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={process.env.PUBLIC_URL + project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
