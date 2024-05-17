import React, { useState } from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

function Signup() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    geolocation: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log(formData);
  };

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center p-6 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(https://ristorante-classico.de/de-wAssets/img/adobe-stock/speisen/AdobeStock_60447569.jpeg)' }}></div>
      <div className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-3xl z-10 p-6 rounded-lg shadow-lg overflow-hidden max-w-md w-full ${theme === 'dark' ? 'dark:bg-black bg-opacity-75' : ''}`}>
        <div className="flex flex-col items-center mb-6">
          <div className="mb-2">
            <Image src="/pizza.svg" alt="Pizza Logo" width={80} height={80} />
          </div>
          <h2 className={`text-center text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            <span className="block">Welcome!</span>
            <span className="block">to Pizza World</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit} className={`w-full ${theme === 'dark' ? 'dark:bg-transparent' : ''}`}>
          <div className="mb-4">
            <label htmlFor="name" className={`block ${theme === 'dark' ? 'text-gray-200' : 'text-white'} text-sm font-semibold mb-2`}>Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Enter your name"
              onChange={handleChange}
              className={`w-full border-gray-300 border rounded-md py-2 px-3 ${theme === 'dark' ? 'text-white placeholder-gray-500 bg-transparent' : 'text-white placeholder-gray-100 bg-transparent'} focus:outline-none focus:border-red-500 transition duration-300 backdrop-filter backdrop-blur-md`}
              value={formData.name}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={`block ${theme === 'dark' ? 'text-gray-200' : 'text-white'} text-sm font-semibold mb-2`}>Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
              className={`w-full border-gray-300 border rounded-md py-2 px-3 ${theme === 'dark' ? 'text-white placeholder-gray-500 bg-transparent' : 'text-white placeholder-gray-100 bg-transparent'} focus:outline-none focus:border-red-500 transition duration-300 backdrop-filter backdrop-blur-md`}
              value={formData.email}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className={`block ${theme === 'dark' ? 'text-gray-200' : 'text-white'} text-sm font-semibold mb-2`}>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={handleChange}
              className={`w-full border-gray-300 border rounded-md py-2 px-3 ${theme === 'dark' ? 'text-white placeholder-gray-500 bg-transparent' : 'text-white placeholder-gray-100 bg-transparent'} focus:outline-none focus:border-red-500 transition duration-300 backdrop-filter backdrop-blur-md`}
              value={formData.password}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className={`block ${theme === 'dark' ? 'text-gray-200' : 'text-white'} text-sm font-semibold mb-2`}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
              onChange={handleChange}
              className={`w-full border-gray-300 border rounded-md py-2 px-3 ${theme === 'dark' ? 'text-white placeholder-gray-500 bg-transparent' : 'text-white placeholder-gray-100 bg-transparent'} focus:outline-none focus:border-red-500 transition duration-300 backdrop-filter backdrop-blur-md`}
              value={formData.confirmPassword}
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="geolocation" className={`block ${theme === 'dark' ? 'text-gray-200' : 'text-white'} text-sm font-semibold mb-2`}>Location</label>
            <div className="flex items-center">
              <input
                type="text"
                id="geolocation"
                required
                placeholder="Enter your location"
                onChange={handleChange}
                className={`w-full border-gray-300 border rounded-md py-2 px-3 ${theme === 'dark' ? 'text-white placeholder-gray-500 bg-transparent' : 'text-white placeholder-gray-100 bg-transparent'} focus:outline-none focus:border-red-500 transition duration-300 backdrop-filter backdrop-blur-md`}
                value={formData.geolocation}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4zm0-8a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-800 active:bg-red-900 transition duration-300 `}
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className={`text-gray-200 ${theme === 'dark' ? 'dark:text-gray-300' : ''}`}>
            Already a user? <Link href="/login" className="text-red-500 hover:text-red-600 font-semibold">Click here</Link> to login.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
