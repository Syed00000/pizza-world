import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { CartContext } from '@/utils/contextReducer';

function Navbar() {
  const { theme, setTheme } = useTheme();
  const { state } = useContext(CartContext);

  const totalItems = state.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="text-white sticky top-0 z-50 bg-gradient-to-r from-indigo-800 via-violet-700 to-orange-700 body-font bg-opacity-75">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center backdrop-filter backdrop-blur-md">
        <Link href={"/"} className="flex title-font font-extrabold items-center uppercase text-gray-100">
          <div className="md:mr-3">
            <Image alt="Navbar Logo" className="inverti" src={"/pizza.svg"} width={60} height={60} />
          </div>
          <p className="leading-5 text-xl md:mx-2 ">Pizza World</p>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/cart"} className="text-white cursor-pointer hover:text-gray-200 flex items-center">
            <span className="hidden md:inline">Cart</span>
            <span className="md:hidden">Cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="ml-1"
              viewBox="0 0 16 16"
              aria-label="Cart"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            <span className="hidden md:inline-block px-2 py-1 text-xs font-bold leading-none text-black bg-gray-200 rounded-full mx-1">{totalItems}</span>
          </Link>
          <Link href={"/myorders"} className="text-white cursor-pointer ml-3 hover:text-gray-200 flex items-center">
            <span className="hidden md:inline">My Orders</span>
            <span className="md:hidden">My Orders</span>
            <svg className="invert md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-label="My Orders">
              <path d="M18 11v7a2 2 0 0 1-4 0v-5h-2V3a3 3 0 0 1 3-3h3v11zM4 10a2 2 0 0 1-2-2V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v7a2 2 0 0 1-2 2v8a2 2 0 0 1-4 0v-8z" />
            </svg>
          </Link>
          <Link href={"/login"} className="text-white cursor-pointer ml-3 hover:text-gray-200 flex items-center ">
            <span className="hidden md:inline">Login</span>
            <span className="md:hidden">Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6" aria-label="Login">
              <path fillRule="evenodd" d="M14 4.75A2.75 2.75 0 0 0 11.25 2h-3A2.75 2.75 0 0 0 5.5 4.75v.5a.75.75 0 0 0 1.5 0v-.5c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v6.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25v-.5a.75.75 0 0 0-1.5 0v.5A2.75 2.75 0 0 0 8.25 14h3A2.75 2.75 0 0 0 14 11.25v-6.5Zm-9.47.47a.75.75 0 0 0-1.06 0L1.22 7.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06l-.97-.97h7.19a.75.75 0 0 0 0-1.5H3.56l.97-.97a.75.75 0 0 0 0-1.06Z" cliprule="evenodd" />
            </svg>
          </Link>
          <Link href={"/signup"} className="text-white cursor-pointer ml-3 hover:text-gray-200 flex items-center">
            <span className="hidden md:inline mr-1">SignUp</span>
            <span className="md:hidden">SignUp</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle w-6 h-6" viewBox="0 0 16 16" style={{ color: 'white' }} aria-label="Sign Up">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="white"></path>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" fill="white"></path>
            </svg>
          </Link>
        </nav>

        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='text-white bg-black rounded-full p-1 dark:text-black dark:bg-white flex items-center ml-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>{' '}
          /
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
