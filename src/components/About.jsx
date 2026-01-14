import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Your Photo Here</p>
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-4">
              I'm a passionate developer with expertise in building modern web applications.
              I love creating beautiful, functional, and user-friendly websites.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With a strong foundation in both frontend and backend technologies,
              I bring ideas to life through clean code and thoughtful design.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                <p className="text-gray-600">React, Tailwind CSS, JavaScript</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
                <p className="text-gray-600">Node.js, Express, MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
