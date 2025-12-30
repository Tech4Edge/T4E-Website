import React from 'react'
import heroImg from '../assets/heroImg.jpg'

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="flex gap-4 text-white mb-6" style={{ textShadow: '2px 4px 8px rgba(0, 0, 0, 0.8)' }}>
            <span className="montserrat-font text-4xl md:text-5xl lg:text-6xl font-black block whitespace-break-spaces w-fit">
              Engineering the
            </span>
            <span className="nothing-you-could-do-font text-4xl md:text-5xl lg:text-6xl block mt-2">
              Edge of Innovation.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="inter-font-semibold text-white text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-light" style={{ textShadow: '2px 3px 6px rgba(0, 0, 0, 0.8)' }}>
            From intuitive UI/UX to scalable SaaS solutions, we build the tech that drives your business forward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="montserrat-font bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform hover:scale-105" style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.6)' }}>
              Start Your Project
            </button>
            <button className="montserrat-font border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform hover:scale-105 bg-white/10 backdrop-blur-sm" style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.6)' }}>
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
