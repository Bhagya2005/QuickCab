import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';
import Navbar from '../components/Navbar';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        const { user, token } = response.data;
        setUser(user);
        localStorage.setItem('token', token);
        navigate('/home');
      }
    } catch (err) {
      setError('Invalid credentials or network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
        <div className="w-full max-w-lg px-6 py-10 bg-white shadow-lg rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          </div>

          <form onSubmit={submitHandler} className="space-y-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg relative overflow-hidden group"
              disabled={loading}
            >
              <span className="absolute inset-0 bg-blue-500 group-hover:w-full transition-all duration-300 w-0"></span>
              <span className="relative z-10">{loading ? 'Logging in...' : 'Login'}</span>
            </button>

            <div className="mt-6">
              <Link
                to="/captain-login"
                className="bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg px-4 py-3 w-full text-lg flex items-center justify-center"
              >
                Sign in as Captain
              </Link>
            </div>
          </form>

          <p className="text-center text-gray-600 mt-4">
            New here?{' '}
            <Link to="/signup" className="text-blue-600 hover:text-blue-500">
              Create new Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
           

            
           
       
