import React from 'react'
import AboutImg from '../assets/Me.jpg'

const About = () => {
  return (
    <div className='bg-gradient-to-br from-blue-400 to-cyan-500 text-white py-16' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-18 bg-gradient-to-tr from-blue-700 to-cyan-500 rounded-full py-3'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImg} alt='profile' className='w-72 h-72 rounded-3xl my-8 object-cover transform transition-transform duration-200 hover:scale-125'/>
                <div>
                    <p className='text-lg my-4'>
                        I am a full stack developer with a passion for creating web applications. I have a background in Computer Science and I am currently working as a freelance developer. I enjoy working with React, Node, and Express to create web applications that are both functional and visually appealing. I am always looking for new projects to work on and new technologies to learn.
                    </p>
                    <div className='space-y-4'>
                        <div className='flex items-center space-x-4'>
                            <label htmlFor='htmlandcss' className='w-2/12'>HTML & CSS</label>
                            <div className='grow bg-gray-800 rounded-full h-5'>
                                <div className='bg-gradient-to-r from-blue-700 to-cyan-500 h-5 rounded-full transform transition-transform duration-300 hover:scale-110 w-10/12'>

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <label htmlFor='htmlandcss' className='w-2/12'>React JS</label>
                            <div className='grow bg-gray-800 rounded-full h-5'>
                                <div className='bg-gradient-to-r from-blue-700 to-cyan-500 h-5 rounded-full transform transition-transform duration-300 hover:scale-110 w-9/12'>

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <label htmlFor='htmlandcss' className='w-2/12'>Node JS</label>
                            <div className='grow bg-gray-800 rounded-full h-5'>
                                <div className='bg-gradient-to-r from-blue-700 to-cyan-500 h-5 rounded-full transform transition-transform duration-300 hover:scale-110 w-10/12'>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='mt-12 flex justify-between text-center'>
                        <div>
                            <h3 className='text-2xl font-bold text-yellow-400'>1+</h3>
                            <p>Years of Experience</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-yellow-400'>4+</h3>
                            <p>MERN Projects</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About