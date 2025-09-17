import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-blue-700 via-gray-800 to-gray-700 text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 mb-4 items-center'>
                <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-4xl font-semibold text-orange-400 mr-4'>Magibalan S</h3>
                <p>
                    I am a full stack developer with experience in building web applications using modern technologies like React, Nodejs, Express, MongoDB, etc.
                </p>
            </div>
            <div>
            <form>
                <input type='email' placeholder='Enter your email' className='p-2 mx-4 rounded-xl bg-gray-700'/>
                <button className='bg-gradient-to-r from-gray-800 to-gray-500 rounded-2xl border px-4 py-2 md:inline transform transition-transform duration-200 hover:scale-110'>Subscribe</button>
            </form>
            </div>
        </div>
        <div className='border-t-4 border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-3 md:space-y-0 lg:space-y-0'>
            <p>
                &copy; {new Date().getFullYear()} Magibalan S. All rights reserved.
            </p>
            <div className='flex space-x-4 '>
                <a href='#' className='hover:text-yellow-200 hover:scale-125 transform transition-transform duration-200 text-2xl'>
                    <FaLinkedin/>
                </a>
                <a href='#' className='hover:text-yellow-200 hover:scale-125 transform transition-transform duration-200 text-2xl'>
                    <FaInstagram/>
                </a>
                <a href='#' className='hover:text-yellow-200 hover:scale-125 transform transition-transform duration-200 text-2xl'>
                    <FaGithub/>
                </a>
            </div>
            <div className='flex space-x-4 text-xl'>
                <a href='#' className='hover:text-yellow-200 hover:scale-110 transform transition-transform duration-200'>
                    Privacy
                </a>
                <a href='#' className='hover:text-yellow-200 hover:scale-110 transform transition-transform duration-200'>
                    Terms of Service
                </a>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer