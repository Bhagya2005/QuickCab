import React from 'react';
import Navbar from '../components/Navbar';
import { Route } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="content flex flex-col lg:flex-row">
        <div className="animation-section flex-1 p-4">
          <div className="animation-placeholder align-centre mt-20 ml-20">
            <img
              src="data:image/jpeg;base64,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"
              alt="About"
              className="w-auto h-auto"
            />
          </div>
        </div>
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
           
          </header>
        </div>
      </div>

      {/* Services for Clients */}
      
<section className="services py-8 bg-gray-100">
  <h2 className="text-2xl font-bold mb-4 text-center">Services for Clients</h2>
  <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Ride Booking</h3>
      <p>Quickly book rides from your current location to your desired destination.</p>
    </div>
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Ride Type Selection</h3>
      <p>Choose from multiple ride options, including car, auto, or motorbike.</p>
    </div>
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Real-Time GPS Tracking</h3>
      <p>Track the location of your ride in real-time for better accuracy.</p>
    </div>
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Affordable Pricing</h3>
      <p>Get transparent and affordable pricing based on your selected ride and distance.</p>
    </div>
    {/* <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Multiple Payment Methods</h3>
      <p>Choose your preferred payment method for a seamless transaction.</p>
    </div>
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Ride History</h3>
      <p>View your ride history and track all past journeys.</p>
    </div> */}
  </div>
</section>

<section className="services py-8">
  <h2 className="text-2xl font-bold mb-4 text-center">Services for Captains</h2>
  <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Ride Requests</h3>
      <p>Receive and review ride requests from clients and choose to accept or ignore.</p>
    </div>
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Real-Time Ride Tracking</h3>
      <p>Track your ongoing rides and manage your route efficiently.</p>
    </div>
    {/* <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Earnings Dashboard</h3>
      <p>Monitor your earnings and transaction history at any time.</p>
    </div> */}
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Ride Safety Features</h3>
      <p>Ensure the safety of your passengers with in-app safety features.</p>
    </div>
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Flexible Schedule</h3>
      <p>Work according to your preferred schedule and earn as you go.</p>
    </div>
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Support & Assistance</h3>
      <p>Get 24/7 support for any issues or questions regarding your rides.</p>
    </div>
  </div>
</section>

<section className="services py-8 bg-gray-100">
  <h2 className="text-2xl font-bold mb-4 text-center">Platform-Wide Services</h2>
  <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Secure Login & Registration</h3>
      <p>Multiple login options via email, Google, or social media accounts.</p>
    </div>
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Ride Rating & Reviews</h3>
      <p>Rate your rides and captains for better service and community feedback.</p>
    </div>
    {/* <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Ride History</h3>
      <p>Access detailed records of all your rides, including dates, times, and payment info.</p>
    </div> */}
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Instant Ride Notifications</h3>
      <p>Receive instant notifications for ride requests, updates, and confirmations.</p>
    </div>
    {/* <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Payment Integration</h3>
      <p>Secure and seamless payment options for both riders and captains.</p>
    </div> */}
    <div className="card bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
      <p>Access round-the-clock support for any issues or concerns related to your ride.</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutPage;
