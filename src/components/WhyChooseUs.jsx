import React from 'react'

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8 text-[#1E90FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rapid Deployment",
      description: "Launch your product faster with our agile development methodology and streamlined workflows."
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8 text-[#1E90FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Security-First Mindset",
      description: "Enterprise-grade security measures to protect your data and ensure compliance at every layer."
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8 text-[#1E90FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Scalable Architecture",
      description: "Built to grow with your business. Our solutions scale seamlessly from startup to enterprise."
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8 text-[#1E90FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to keep your systems running smoothly."
    }
  ];

  return (
    <section className='w-full bg-white py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='inter-font-semibold text-4xl md:text-5xl font-black text-[#0F172B] mb-4'>
            Why Choose Tech4Edges?
          </h2>
          <p className='inter-font-semibold text-[#45556C] text-lg md:text-xl max-w-4xl mx-auto'>
            We combine technical excellence with business acumen to deliver solutions that drive real results.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature) => (
            <div 
              key={feature.id}
              className='bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
            >
              {/* Icon */}
              <div className='bg-[#E3F2FD] w-16 h-16 rounded-xl flex items-center justify-center mb-6'>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className='montserrat-font text-xl font-bold text-[#0F172B] mb-3'>
                {feature.title}
              </h3>

              {/* Description */}
              <p className='inter-font text-[#45556C] text-sm leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

