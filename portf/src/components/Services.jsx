import React from 'react'

const services = [
    {
        id: 1,
        title: 'Web Development',
        description: 'I create responsive web applications that are both functional and visually appealing. I have experience working with React, Node, and Express to create web applications that meet the needs of my clients.'
    },
    {
        id: 2,
        title: 'Object Detection',
        description: 'I have experience working with computer vision and object detection. I have created applications that can detect objects in images and videos using machine learning and deep learning techniques.',
    },
    {
        id: 3,
        title:'Graphic Designing',
        description: 'I create visually appealing graphics using Canva. I have experience creating social media posts, logos, and other graphics using Canva.'
    }
]

const Services = () => {
  return (
    <div className='bg-gradient-to-br from-blue-400 to-cyan-500 text-white py-16' id='services'>
        <div className='container space-y-5 mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl text-center font-bold mb-12 bg-gradient-to-tr from-blue-700 to-cyan-500 rounded-full py-3'>Service</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map(service => (
                <div key={service.id} className='bg-gradient-to-tr from-blue-700 to-cyan-500 p-8 rounded-xl transform transition-transform duration-200 hover:scale-105'>
                    <h3 className='text-2xl font-bold mb-4'>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href='#' className='text-yellow-400 hover:text-yellow-300'>Learn More</a>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Services