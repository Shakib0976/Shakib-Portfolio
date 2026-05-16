import React from 'react';

const Project1 = () => {
  return (
    <div className="text-gray-800 min-h-screen py-12 px-4">
      <div className="max-w-4xl bg-white/50 p-4 my-10 rounded-2xl shadow-xl mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">Local Food Waste Reduction Platform</h1>
        <img src="https://i.ibb.co.com/cShQRyRJ/Screenshot-2025-09-22-194009.png" alt="Project 1" className="w-full rounded-lg p-1 border border-gray-600 mb-6" />

        <h2 className="text-xl font-semibold mb-2">Technology Stack:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>

        <p className="mb-6">
          This platform connects restaurants with charities and users to donate excess food, reducing waste and helping the community.
        </p>

        <div className="flex gap-4 mb-6">
          <a href="https://local-food-4121f.web.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600 text-white">
            Live Project
          </a>
          <a href="https://github.com/Shakib0976/Eco-Food-project" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
            GitHub (Client)
          </a>
        </div>

        <h2 className="text-xl font-semibold mb-2">Challenges Faced:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Handling multiple user roles and permissions</li>
          <li>Implementing real-time updates</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Future Plans:</h2>
        <ul className="list-disc list-inside">
          <li>Mobile app version</li>
          <li>AI donation prediction</li>
        </ul>
      </div>
    </div>
  );
};

export default Project1;
