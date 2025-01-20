import React from 'react'
import ProjectImage from '../assets/logo.jpg'

const projects = [
    {
        title: 'Portfolio',
        technology: 'MERN Stack, Tailwind CSS',
        description: 'This is a project description',
        image: ProjectImage
    },
    {
        title: 'Canteen management system',
        technology: 'MERN Stack, Tailwind CSS',
        description: 'This is a project description',
        image: ProjectImage
    },
    {
        title: 'TBA',
        technology: 'MERN Stack, Tailwind CSS',
        description: 'This is a project description',
        image: ProjectImage
    }
]

const Projects = () => {
  return (
    <div className='bg-gradient-to-br from-blue-400 to-cyan-500 text-white py-16' id='projects'>
        <div className='container space-y-5 mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl text-center font-bold mb-12 bg-gradient-to-tr from-blue-700 to-cyan-500 rounded-full py-3'>Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map(projects => (
                <div key={projects.id} className='bg-gradient-to-tr from-blue-700 to-cyan-500 p-8 rounded-xl transform transition-transform duration-100 hover:scale-110'>
                    <h3 className='text-2xl font-bold mb-4'>{projects.title}</h3>
                    <p>{projects.description}</p>
                    <p>Technologies used: {projects.technology}</p>
                    <img src={projects.image} alt='' className='w-48 h-48 rounded-3xl m-3 object-cover'/>
                    <a href='#' className='inline-block px-4 py-2 rounded-full bg-gradient-to-bl from-blue-700 to-cyan-500 text-orange-400 font-bold hover:text-white'>Github</a>
                </div>

            ))}
            </div>
            </div>
        </div>
  )
}

export default Projects