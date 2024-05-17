import React, { useState } from 'react'; // Import useState hook from React
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

function Login() {
  const { theme } = useTheme();
  const [credentials, setCredentials] = useState({ email: "", password: "" }); // Initialize state using useState
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value })
  };

  return (
    <div className={`relative min-h-screen flex items-center justify-center ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp8258128.jpg)' }}></div>
      <div className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-3xl z-10 p-6 rounded-lg shadow-lg overflow-hidden max-w-md w-full ${theme === 'dark' ? 'dark:bg-black bg-opacity-75' : ''}`}>
        <div className="flex flex-col items-center mb-6">
          <div className="mr-2 mb-2">
            <Image src="/pizza.svg" alt="Pizza Logo" width={40} height={40} />
          </div>
          <div>
            <h2 className={`text-center text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Welcome back!</h2>
            <h2 className={`text-center text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>to Pizza World</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className={`block ${theme === 'dark' ? 'text-gray-200' : 'text-white'} text-sm font-semibold mb-2`}>Email Address</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email/Username"
              onChange={handleChange}
              className={`w-full border-gray-300 border rounded-md py-2 px-3 ${theme === 'dark' ? 'text-white' : 'text-white'} focus:outline-none focus:border-red-500 transition duration-300 bg-transparent`}
              value={credentials.email}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className={`block ${theme === 'dark' ? 'text-gray-200' : 'text-white'} text-sm font-semibold mb-2`}>Password</label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter your password"
              onChange={handleChange}
              className={`w-full border-gray-300 border rounded-md py-2 px-3 ${theme === 'dark' ? 'text-white' : 'text-white'} focus:outline-none focus:border-red-500 transition duration-300 bg-transparent`}
              value={credentials.password}
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-900 transition duration-300 `}
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className={`text-gray-200 ${theme === 'dark' ? 'dark:text-gray-300' : ''}`}>
            Don&apos;t have an account? <Link href="/signup" className="text-red-500 hover:text-red-600 font-semibold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
