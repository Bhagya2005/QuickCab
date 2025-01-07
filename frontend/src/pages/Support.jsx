import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
        <Navbar/>
      <section className="support-form py-12 bg-white">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Contact Support</h2>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Subject of your issue"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your issue or request"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Support;
