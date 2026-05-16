import React from 'react';

const Project2 = () => {
  return (
    <div className="text-gray-800 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white/50 p-4 my-10 rounded-2xl shadow-xl">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">Dev Knowledge</h1>
        <img src="https://i.ibb.co.com/d4kT2tK5/Screenshot-2025-08-08-190459.png" alt="Project 2" className="w-full rounded-lg border p-1 border-gray-600 mb-6" />

        <h2 className="text-xl font-semibold mb-2">Technology Stack:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>React</li>
          <li>Firebase</li>
          <li>Tailwind CSS</li>
        </ul>

        <p className="mb-6">
          DevKnowledge is a collaborative platform for students to create, share, and discuss academic articles and resources.
        </p>

        <div className="flex gap-4 mb-6">
          <a href="https://devknowledge-5ed93.web.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600 text-white">
            Live Project
          </a>
          <a href="https://github.com/Shakib0976/Dev_Knowledge11" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
            GitHub (Client)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project2;
