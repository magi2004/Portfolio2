import AboutImg from '../assets/Me.jpg'

const About = () => {
  return (
    <section className='bg-gradient-to-br from-blue-700 via-gray-800 to-gray-700 text-white py-12 px-4 shadow-lg' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-2xl md:text-3xl font-bold text-orange-400 mb-4'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImg} alt='profile' className='w-72 h-72 rounded-2xl my-8 object-cover transform transition-transform duration-200 hover:scale-125'/>
                <div>
                    <p className='text-lg text-gray-300 my-4'>
                        Passionate developer with expertise in React, Node.js, and modern web technologies.
                    </p>
                    <div className='space-y-4'>
                        <div className='flex items-center space-x-4'>
                            <label htmlFor='htmlandcss' className='w-2/12'>HTML & CSS</label>
                            <div className='grow bg-gray-800 rounded-full h-5'>
                                <div className='bg-gradient-to-r from-gray-800 to-gray-500 h-5 rounded-full transform transition-transform duration-300 hover:scale-110 w-10/12'>

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <label htmlFor='htmlandcss' className='w-2/12'>React JS</label>
                            <div className='grow bg-gray-800 rounded-full h-5'>
                                <div className='bg-gradient-to-r from-gray-800 to-gray-500 h-5 rounded-full transform transition-transform duration-300 hover:scale-110 w-9/12'>

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <label htmlFor='htmlandcss' className='w-2/12'>Express JS</label>
                            <div className='grow bg-gray-800 rounded-full h-5'>
                                <div className='bg-gradient-to-r from-gray-800 to-gray-500 h-5 rounded-full transform transition-transform duration-300 hover:scale-110 w-6/12'>

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <label htmlFor='htmlandcss' className='w-2/12'>Python</label>
                            <div className='grow bg-gray-800 rounded-full h-5'>
                                <div className='bg-gradient-to-r from-gray-800 to-gray-500 h-5 rounded-full transform transition-transform duration-300 hover:scale-110 w-8/12'>

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
                            <h3 className='text-2xl font-bold text-yellow-400'>2+</h3>
                            <p>MERN Projects</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className='mt-6'>
          <button className='bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl border border-yellow-400 px-5 py-2 text-yellow-200 font-semibold shadow-md hover:scale-105 transition-transform duration-200'>
            Learn More
          </button>
        </div>
    </section>
  );
};

export default About;