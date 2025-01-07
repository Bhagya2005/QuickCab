import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Start = () => {
  return (
    // <div>
    //   <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full">
       
    //     <img className="w-16 ml-5" src="" alt="" />
    //     <div className="bg-white text-gray-900 pb-8 py-4 px-4">
    //       <h2 className="text-[30px] font-semibold text-gray-900">Get Started with QuickCab</h2>
    //       <Link
    //         to="/login"
    //         className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-lg mt-5"
    //       >
    //         Continue
    //       </Link>
    //     </div>
    //   </div>
    // </div>
   
    <div className="about-container">
    <Navbar />
    <div className="content flex flex-col lg:flex-row">
      {/* Animation Section */}
      <div className="animation-section flex-1 p-4">
        <div className="animation-placeholder align-centre mt-20 ml-11">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNtfIAdnBiMSDRzF4jVRVtOW9y4FQO0lBTi58T6UIEzLohNf80JW4kTf6R720aCOfi-c&usqp=CAU"
            alt="About"
            className="w-auto h-auto rounded-md shadow-lg align-bottom"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-section flex-1 ml-11">
        <h2 className="text-2xl font-bold mb-4">Features & Advantages</h2>
        <ul className="list-disc pl-6 mb-8">
        <li >Reliable Transportation Options</li>
  <li >Real-Time GPS Tracking</li>
  <li >Flexible Ride Acceptance</li>
  <li >Affordable Pricing</li>
  <li >Secure and Safe Ride</li>
  <li >Payment Convenience</li>
  <li >24/7 Customer Support</li>
  <li >Efficient Ride Scheduling</li>
  <li >Ride History and Reports</li>
  <li >Sustainable Options</li>
        </ul>
        <header>
          

          
          <div className="bg-white text-gray-900 pb-8 py-4 px-4 rounded-lg shadow-md">
            <h2 className="text-[30px] font-semibold text-gray-900"> </h2>
            <Link
              to="/login"
              className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-lg mt-5"
            >
              Let's Ride
            </Link>
          </div>
        </header>
      </div>
    </div>
  </div>
);
};

export default Start;
