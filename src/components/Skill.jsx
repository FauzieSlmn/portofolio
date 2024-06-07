import React from 'react';

// Import logos
import cSharpLogo from '../csharp_logo.png';
import laravelLogo from '../laravel_logo.png';
import flutterLogo from '../flutter_logo.png';
import arduinoLogo from '../arduino_logo.png';
import dobotLogo from '../dobot_logo.png';
import javaLogo from '../java_logo.png';
import mysqlLogo from '../mysql_logo.png';
import nodejsLogo from '../nodeJs_logo.png';
import pythonLogo from '../python_logo.png';
import omronLogo from '../omron_logo.png'
// Import other logos as needed

const Skills = () => {
  return (
    <section className="mb-8 bg-gray-100" id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
        {/* Skill with logo */}
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={arduinoLogo} alt="Arduino" className="w-16 h-16 mb-2" />
          <span className="text-sm font-semibold">Arduino</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={dobotLogo} alt="Dobot" className="w-16 h-16 mb-2" />
          <span className="text-sm font-semibold">Dobot</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={omronLogo} alt="Dobot" className="w-16 h-16 mb-2" />
          <span className="text-sm font-semibold">PLC Omron</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={cSharpLogo} alt="C#" className="w-16 h-16 mb-2" />
          <span className="text-sm font-semibold">C#</span>
        </div>
        {/* Add other skills with logos */}
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={laravelLogo} alt="Laravel" className="w-16 h-16 mb-2" />
          <span className="text-sm font-semibold">Laravel</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={flutterLogo} alt="Flutter" className="w-16 h-16 mb-2" />
          <span className="text-sm font-semibold">Flutter</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={javaLogo} alt="Java" className="w-16 h-16 mb-2" />
          <span className="text-sm font-semibold">Java</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={nodejsLogo} alt="NodeJs" className="w-16 h-16 mb-2" />
          <span className="text-sm font-semibold">NodeJs</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={pythonLogo} alt="Python" className="w-16 h-16 mb-2" />
          <span className="text-sm font-semibold">Python</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={mysqlLogo} alt="MySql" className="w-16 h-16 mb-2" />
          <span className="text-sm font-semibold">MySql</span>
        </div>
        
        {/* Add other skills with logos */}
      </div>
    </section>
  );
};

export default Skills;
