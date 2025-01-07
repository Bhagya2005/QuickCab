import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CapatainContext';
import Navbar from '../components/Navbar';

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state

    const captainData = { email, password };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captainData
      );

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
    } catch (err) {
      setError('Invalid credentials or network error');
    } finally {
      setLoading(false); // End loading state
    }

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
        {/* Container for the login form */}
        <div className="w-full max-w-lg px-6 py-10 bg-white shadow-lg rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Captain Login</h2>
          </div>

          <form onSubmit={(e) => submitHandler(e)} className="space-y-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            {/* Modern swipeable button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg relative overflow-hidden group"
              disabled={loading}
            >
              <span className="absolute inset-0 bg-blue-500 group-hover:w-full transition-all duration-300 w-0"></span>
              <span className="relative z-10">{loading ? 'Logging in...' : 'Login'}</span>
            </button>

            {/* Green "Sign in as User" button */}
            <div className="mt-6">
              <Link
                to="/login"
                className="bg-orange-500 hover:bg-orange-400 flex items-center justify-center text-white font-semibold rounded-lg px-4 py-3 w-full text-lg"
              >
                Sign in as User
              </Link>
            </div>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Not a captain?{' '}
            <Link to="/captain-signup" className="text-blue-600 hover:text-blue-500">
              Register as a Captain
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Captainlogin;
