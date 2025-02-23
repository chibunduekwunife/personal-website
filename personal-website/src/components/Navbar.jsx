import React from 'react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-indigo-600 border-b border-indigo-800'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8' >
            <div className='flex h-20 items-center justify-between'>
                <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>

                    {/* logo */}
                    <a href="/index.html" className='flex flex-shrink-0 items-center mr-4'>
                        <img src={logo} alt="Home" className='h-10 w-auto' />
                        <span className='hidden md:block text-white text-2xl font-bold ml-2'>Chibundu Ekwunife</span>
                    </a>
                    <div className='md:ml-auto'>
                        {/* nav items */}
                        <div className='flex space-x-2'>
                            <a href="/index.html" className='text-white bg-black'></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar