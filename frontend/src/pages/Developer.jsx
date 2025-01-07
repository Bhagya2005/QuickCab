import React from 'react';
import Navbar from '../components/Navbar';
import DeveloperImage from './../assets/bhagya.png';  // Adjust the path based on your folder structure


function Developer() {
  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-r bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      {/* Developer Profile Section */}
      <section className="flex flex-col items-center text-center py-16 px-4 space-y-6">
        {/* 3D Profile Image */}
        <div className="transform hover:scale-110 transition-all duration-500">
          <img
            src={DeveloperImage}
            alt="Developer"
            className="w-40 h-40 rounded-full shadow-lg ring-4 ring-blue-300"
          />
        </div>
        <h1 className="text-4xl font-bold">Bhagya Nitinkumar Patel</h1>
        <p className="text-lg">Full Stack Developer | AI/ML Enthusiast</p>
      </section>

      {/* About Developer Section */}
      <section className="text-center px-4 py-12 bg-black rounded-3xl shadow-xl mx-6 mr-12 mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
        <p className="text-lg text-white max-w-lg mx-auto">
        I am an enthusiastic Computer Science Engineering student with a strong foundation in programming languages like Java and Python. I have hands-on experience in web development technologies such as React.js to build real-time applications. My background in machine learning includes developing predictive models using frameworks like scikit-learn and TensorFlow. Additionally, I have solved over 500 problems on LeetCode. I also secured an All India Rank of 553 in the National Level Science Talent Search Examination.
        </p>
      </section>

    
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="bg-gray-800 rounded-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-white mb-4">JavaScript</h3>
          <p className="text-gray-400">Building dynamic and interactive web pages with JavaScript and its modern frameworks.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-white mb-4">React.js</h3>
          <p className="text-gray-400">Developing scalable and responsive user interfaces with React.js and hooks.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-white mb-4">Tailwind CSS</h3>
          <p className="text-gray-400">Styling beautiful, responsive, and highly customizable user interfaces with Tailwind CSS.</p>
        </div>
      </section> */}

      {/* Projects Section */}
      <section className="bg-gray-900 text-white py-12 mr-10 px-6 w-full">
        <h2 className="text-3xl font-semibold text-center mb-8">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl w-64">
            <h3 className="text-2xl font-semibold text-white mb-4">SummarizeX</h3>
            <p className="text-gray-400 mb-4">A web application built with React.js for Summarize article with URL.</p>
            <a
              href="https://summarizex-bhagya-patel.vercel.app/"
              className="text-blue-400 hover:text-blue-600 transform transition duration-200"
            >
              Live Demo
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl w-64">
            <h3 className="text-2xl font-semibold text-white mb-4">Nexgen Invoice Extractor</h3>
            <p className="text-gray-400 mb-4">Extract Information from Invoice </p>
            <a
              href="https://drive.google.com/file/d/1n1BbXYtQpHB8pwZs-OzZt_-DMSj2Joue/view"
              className="text-blue-400 hover:text-blue-600 transform transition duration-200"
            >
              Live Demo
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl w-64">
            <h3 className="text-2xl font-semibold text-white mb-4">ConnectPlus</h3>
            <p className="text-gray-400 mb-4">A web application built with React.js,firebase.</p>
            <a
              href="https://connectpulse-bhagya-patel.vercel.app/"
              className="text-blue-400 hover:text-blue-600 transform transition duration-200"
            >
              Live Demo
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl w-64">
            <h3 className="text-2xl font-semibold text-white mb-4">OS Simulator            </h3>
            <p className="text-gray-400 mb-4">A web application for Operating System algorithm.</p>
            <a
              href="https://os-bhagya-patel.vercel.app/"
              className="text-blue-400 hover:text-blue-600 transform transition duration-200"
            >
              Live Demo
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl w-64">
            <h3 className="text-2xl font-semibold text-white mb-4">Portfolio</h3>
          
            <a
              href="#"
              className="text-blue-400 hover:text-blue-600 transform transition duration-200"
            >
              Live
            </a>
          </div>
         
        </div>
      </section>
    </div>
    </>
  );
}

export default Developer;
