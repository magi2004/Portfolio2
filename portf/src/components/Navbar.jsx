import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-br from-blue-700 via-gray-800 to-gray-700 text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-4 mx-auto flex justify-center md:justify-between items-center'>
            <div className='text-4xl font-bold text-orange-400 hidden md:inline'>Magibalan</div>
            <div className='space-x-4 ms-2 font-bold'>
                <a href='#home' className='hover:text-yellow-400 '>Home</a>
                <a href='#about' className='hover:text-yellow-400 '>About</a>
                <a href='#services' className='hover:text-yellow-400 '>Skills</a>
                <a href='#projects' className='hover:text-yellow-400 '>Projects</a>
                <a href='#contacts' className='hover:text-yellow-400 '>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-blue-800 to-blue-600 text-yellow-400  rounded-2xl p-2 mx-2 border border-yellow-400 md:px-6 md:py-2 md:inline transform transition-transform duration-200 hover:scale-125 font-bold' onClick={() => window.location.href = 'https://www.linkedin.com/in/magibalan-s-70494b276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} >Connect</button>
        </div>
    </nav>
  )
}

export default Navbar