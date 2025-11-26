import Homejpg from '../assets/Me.jpg' 

const Home = () => {
  return (
    <div className='bg-gradient-to-br from-blue-700 via-gray-800 to-gray-700 text-white text-center py-16' id='home'>
        <img src={Homejpg} alt='' className='mx-auto mb-8 w-48 h-48 rounded-full object-cover shadow-lg border-4 border-blue-700 transform transition-transform duration-200 hover:scale-110'/>
        <h1 className='text-3xl md:text-4xl font-bold'>
            I'm{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-200'>Magibalan S</span>
            , Full Stack Developer
        </h1>
        <p className='mt-4 px-2 text-lg text-gray-300'>
            I'm a full stack developer with experience in building web applications using modern technologies like React, Nodejs, Express, MongoDB, etc. 
        </p>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl border border-yellow-400 px-6 py-2 hidden md:inline text-yellow-400 font-semibold shadow-md transform transition-transform duration-200 hover:scale-110' onClick={() => window.location.href = '#contacts'}>Contact me</button>
            <button className='bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl border border-yellow-400 px-6 py-2 hidden md:inline text-yellow-400 font-semibold shadow-md transform transition-transform duration-200 hover:scale-110'>Resume</button>
        </div>
    </div>
  )
}

export default Home