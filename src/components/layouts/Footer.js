import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="text-white sticky top-0 z-50 bg-gradient-to-r from-indigo-800 via-violet-700 to-orange-700 body-font bg-opacity-75 backdrop-filter backdrop-blur-md">
 <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
 <Link href={"/"} className="flex title-font font-extrabold items-center uppercase text-gray-100">
          <Image alt="Navbar Logo" className="inverti " src={"/pizza.svg"} width={60} height={60} />
          <p className="leading-5 text-xl mx-2 ">Pizza World</p>
        </Link>
        <p className='text-sm text-gray-100 sm:ml-4 sm:border-l-2 sm:border-gray-200 sm:py-2 mt-4 pl-1 mr-1'>
          Copyright © Pizza World 2024
        </p>
 </div>
    </footer>
  )
}

export default Footer
