import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-blue-400 to-cyan-500 text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row  items-center'>
                <h3 className='mr-4'>Magibalan S</h3>
                <p>
                    I'm a full stack developer with experience in building web applications using modern technologies like React, Nodejs, Express, MongoDB, etc.
                </p>
            </div>
            <div>
            <form>
                <input type='email' placeholder='Enter your email' className='p-2 rounded-xl bg-gray-700'/>
                <button className='bg-gradient-to-r from-blue-700 to-cyan-500 rounded-3xl border px-6 py-2 hidden md:inline transform transition-transform duration-200 hover:scale-110'>Subscribe</button>
            </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer