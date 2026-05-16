import React from 'react';

const Project3 = () => {
  return (
    <div className="text-black min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white/50 p-4 my-10 rounded-2xl shadow-xl">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">Developer Tools Website</h1>
        <img src="https://i.ibb.co.com/twwyxgJN/Screenshot-2025-08-08-185015.png" alt="Project 3" className="w-full border p-1 border-gray-600 rounded-lg mb-6" />

        <h2 className="text-xl font-semibold mb-2">Technology Stack:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Node js</li>
          <li>Express js</li>
        </ul>

        <p className="mb-6">
          A platform where clients can post tasks/projects, and freelancers can browse, bid, and apply for them.
        </p>

        <div className="flex gap-4 mb-6">
          <a href="https://freelancer-client.web.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600 text-white">
            Live Project
          </a>
          <a href="https://github.com/Shakib0976/Freelancer-Portal-project" target="_blank" rel="noopener noreferrer" className="px-4 text-white py-2 bg-gray-700 rounded hover:bg-gray-600">
            GitHub (Client)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project3;
