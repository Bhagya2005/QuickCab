import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import Navbar from '../components/Navbar'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      )

      if (response.status === 201) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
    } catch (err) {
      setError('Failed to create account. Please try again.')
    } finally {
      setLoading(false)
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between bg-white text-gray-900">
      <Navbar />
      <div>
        <form className="max-w-md mx-auto mt-0 mb-12" onSubmit={submitHandler}>
          <div className="grid md:grid-cols-2 md:gap-2">
            <div className="relative z-0 w-full mb-5 group">
              <input
                required
                type="text"
                name="first_name"
                id="first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label
                htmlFor="first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                required
                type="text"
                name="last_name"
                id="last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label
                htmlFor="last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last Name
              </label>
            </div>
          </div>

          {/* Email Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              required
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>

          {/* Password Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              required
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          {/* Error message display */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Loading spinner or Submit button */}
          {loading ? (
            <div className="spinner">Loading...</div> // Add a proper spinner or loader here
          ) : (
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded mt-5">
              Sign Up
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default UserSignup
