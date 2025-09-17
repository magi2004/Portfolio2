import ProjectImage from '../assets/logo.jpg'

const projects = [
    {
        title: 'Canteen management system',
        technology: 'MERN Stack, Tailwind CSS',
        description: ' Developed by creating a stack for efficient online ordering, menu management, and payment processing with a user-friendly interface for customers and admins, along with real-time updates and database integration.',
        image: ProjectImage,
        link:''
    },
    {
        title: 'Portfolio',
        technology: 'React, Tailwind CSS',
        description: 'Designed and deployed a sleek, responsive one-page portfolio to showcase projects, skills, and contact details. Built using React and Tailwind CSS for a clean UI and fast performance. Integrated smooth scroll navigation, animated transitions, and mobile-first design principles. Hosted on Vercel with optimized SEO and accessibility features to ensure discoverability and user engagement.',
        image: ProjectImage,
        link: 'https://github.com/magi2004/Portfolio2'
    },
    {
        title: 'Hydration remainder',
        technology: 'Python, Tkinter',
        description: ' A desktop app that combines hydration and eye care reminders with a todo list.  Users get periodic health notifications and can schedule tasks with alerts. Features a modern GUI, system tray icon, and saves user data between sessions.',
        image: ProjectImage,
        link:''
    }
]

const Projects = () => {
  return (
    <div className='bg-gradient-to-br from-blue-700 via-gray-800 to-gray-700 text-white py-16' id='projects'>
        <div className='container space-y-5 mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl text-center font-bold mb-12 bg-gradient-to-br text-orange-400 from-blue-700 via-gray-800 to-gray-700 rounded-full py-3'>Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map(projects => (
                <div key={projects.id} className='bg-gradient-to-br from-blue-700 via-gray-800 to-gray-700 p-8 rounded-xl transform transition-transform duration-100 hover:scale-110'>
                    <h3 className='text-2xl text-yellow-400 font-bold mb-4'>{projects.title}</h3>
                    <p>{projects.description}</p>
                    <p>Technologies used: {projects.technology}</p>
                    <img src={projects.image} alt='' className='w-48 h-48 rounded-2xl m-3 object-cover'/>
                    <a href={projects.link} className='inline-block px-4 py-2 rounded-full bg-gradient-to-bl from-gray-800 to-gray-500 text-white font-bold hover:text-yellow-400'>Github</a>
                </div>

            ))}
            </div>
            </div>
        </div>
  )
}

export default Projects