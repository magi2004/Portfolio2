import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
const Contacts = () => {
  return (
    <div className='bg-gradient-to-br from-blue-700 via-gray-800 to-gray-700 text-white py-16' id='contacts'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-br from-blue-700 via-gray-800 to-gray-700 rounded-full py-3'>Contact Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <div className='flex-1'>
                <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-400'> Let's Connect</h3>
                <p>I'm open to discuss web development projects or partnership opportunities</p>
                <div className='mb-4 mt-4' >
                    <FaEnvelope className='inline-block text-yellow-400 mr-2'></FaEnvelope>
                    <a href='mailto:magibalan55@gmail.com' className='hover:text-yellow-300'>
                        magibalan55@gmail.com
                    </a>
                </div>
                <div className='mb-4'>
                    <FaPhone className='inline-block text-yellow-400 mr-2'></FaPhone>
                    <span>+919442587723</span>
                </div>
                <div className='mb-4'>
                    <FaMapMarkedAlt className='inline-block text-yellow-400 mr-2'></FaMapMarkedAlt>
                    <span>Tiruppur, India</span>
                </div>
                </div>
                <div className='flex-1 w-full'>
                    <form className='bg-gradient-to-br from-blue-700 via-gray-800 to-gray-700 p-8 rounded-xl'>
                        <h3 className='text-3xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-400'>Send a message</h3>
                        <div className='flex flex-col space-y-4'>
                            <label htmlFor='name' className='text-white'>Name</label>
                            <input type='text' placeholder='Enter your name' className='p-2 rounded-xl bg-gray-700'/>
                            <label htmlFor='email' className='text-white'>Email</label>
                            <input type='email' placeholder='Enter your Email' className='p-2 rounded-xl bg-gray-700'/>
                            <label htmlFor='message' className='text-white'>Message</label>
                            <textarea placeholder='Enter your message' rows='5' className='p-2 rounded-xl bg-gray-700'></textarea>
                            <button className='bg-gradient-to-r from-gray-800 to-gray-500 rounded-2xl border px-6 py-2 hidden md:inline transform transition-transform duration-200 hover:scale-110'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
  )
}

export default Contacts