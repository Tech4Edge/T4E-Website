import React from 'react'

const CTA = () => {
  return (
    <section className='w-full linear-gradient bg-gradient-to-b from-[#155DFC] to-[#1447E6] py-20 px-4'>
      <div className='max-w-4xl mx-auto text-center'>
        {/* Heading */}
        <h2 className='inter-font-bold text-4xl md:text-5xl font-black text-white mb-6'>
          Ready to Build Something Amazing?
        </h2>

        {/* Description */}
        <p className='inter-font-semibold text-white text-lg md:text-xl mb-8 leading-relaxed'>
          Let's discuss your project and explore how we can help you achieve your digital goals.
        </p>

        {/* CTA Button */}
        <button className='montserrat-font bg-white hover:bg-gray-100 text-[#1E90FF] font-bold py-4 px-10 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-2xl transform hover:scale-105'>
          Get Started Today
        </button>
      </div>
    </section>
  )
}

export default CTA

