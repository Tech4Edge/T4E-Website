import React from 'react'

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Consult",
      subtitle: "Discovery & Strategy"
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Build",
      subtitle: "Design & Development"
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Launch",
      subtitle: "Deploy & Optimize"
    }
  ];

  return (
    <section className='w-full bg-white py-10 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-8'>
          <h2 className='inter-font-semibold text-3xl md:text-4xl font-black text-[#0F172B] mb-2'>
            How We Work
          </h2>
          <p className='inter-font-semibold text-[#45556C] text-base md:text-lg max-w-4xl mx-auto'>
            A proven process that takes your project from concept to launch seamlessly.
          </p>
        </div>

        {/* Process Steps */}
        <div className='py-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative'>
            {steps.map((step, index) => (
              <div key={step.id} className='relative flex flex-col items-center text-center'>
                {/* Connecting Line - Hidden on mobile, shown on desktop */}
                {index < steps.length - 1 && (
                  <div className='hidden md:block absolute top-10 left-1/2 w-full h-0.5'>
                    <div className='w-full h-full bg-gradient-to-r from-[#1E90FF] via-[#1E90FF] to-transparent'></div>
                  </div>
                )}

                {/* Icon Circle */}
                <div className='relative z-10 bg-[#1E90FF] w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl'>
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className='montserrat-font text-2xl font-bold text-[#0F172B] mb-2'>
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className='inter-font-semibold text-[#45556C] text-base font-medium'>
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork

