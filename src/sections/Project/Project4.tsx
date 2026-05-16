import React from 'react';

const Project4 = () => {
  return (
    <div className="text-black min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white/50 p-4 my-10 rounded-2xl shadow-xl">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">Student Life Toolkit Platform</h1>
        <img src="https://i.ibb.co.com/99ZyPxf0/Screenshot-2025-09-19-094044.png" alt="Project 4" className="w-full border p-1 border-gray-600 rounded-lg mb-6" />

        <h2 className="text-xl font-semibold mb-2">Technology Stack:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>

        <p className="mb-6">
          Student Life Toolkit is designed to help students organize their schedules, manage finances, prepare for exams, and plan their studies efficiently.
        </p>

        <div className="flex gap-4 mb-6">
          <a href="https://student-toolkit-26582.web.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600 text-white">
            Live Project
          </a>
          <a href="https://github.com/Shakib0976/student-tolkit-client" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600">
            GitHub (Client)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project4;
