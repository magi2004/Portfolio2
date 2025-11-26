import AboutImg from '../assets/Me.jpg'

const About = () => {
  return (
    <section className='bg-gradient-to-br from-blue-700 via-gray-800 to-gray-700 text-white py-12 px-4 shadow-lg' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl text-center font-bold mb-12 bg-gradient-to-br text-orange-400 from-blue-700 via-gray-800 to-gray-700 rounded-full py-3'>About me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImg} alt='profile' className='w-72 h-72 rounded-2xl my-8 object-cover transform transition-transform duration-200 hover:scale-125'/>
                <div>
                    <p className='text-lg text-gray-300 my-4'>
                        Passionate developer with expertise in React, Node.js, and modern web technologies.
                    </p>
                    <div className='space-x-6 flex items-center justify-center rounded-2xl bg-gray-700 p-4'>
                    
                        <div className='flex items-center space-x-4 hover:text-yellow-400'>
                            <label htmlFor='htmlandcss' className='font-semibold text-cyan-500'>React JS</label>
                        </div>
                        <div className='flex items-center space-x-4 hover:text-yellow-400'>
                            <label htmlFor='htmlandcss' className='font-semibold text-green-400'>Express JS</label>
                        </div>
                        <div className='flex items-center space-x-4 hover:text-yellow-400'>
                            <label htmlFor='htmlandcss' className='font-semibold text-gradient-to-r from-blue-600 to-yellow-300'>Python</label>
                        </div>
                    </div>
                    <div className='mt-12 flex justify-between text-center'>
                        <div>
                            <h3 className='text-2xl font-bold text-yellow-400'>0.5</h3>
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
        <div className='mt-6 flex justify-center'>
          <button className='bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl border border-yellow-400 px-5 py-2 text-yellow-400 font-semibold shadow-md hover:scale-105 transition-transform duration-200'>
            Learn More
          </button>
        </div>
    </section>
  );
};

export default About;