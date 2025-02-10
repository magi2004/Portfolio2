import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-tr from-blue-700 to-cyan-500 text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-4 mx-auto flex justify-center md:justify-between items-center'>
            <div className='text-4xl font-bold hidden md:inline'>Magibalan</div>
            <div className='space-x-4 ms-2'>
                <a href='#home' className='hover:text-cyan-300 '>Home</a>
                <a href='#about' className='hover:text-cyan-300 '>About</a>
                <a href='#services' className='hover:text-cyan-300 '>Skills</a>
                <a href='#projects' className='hover:text-cyan-300 '>Projects</a>
                <a href='#contacts' className='hover:text-cyan-300 '>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-blue-700 to-cyan-500 rounded-3xl p-2 mx-2 border md:px-6 md:py-2 md:inline transform transition-transform duration-200 hover:scale-125' onClick={() => window.location.href = 'https://www.linkedin.com/in/magibalan-s-70494b276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} >Connect</button>
        </div>
    </nav>
  )
}

export default Navbar