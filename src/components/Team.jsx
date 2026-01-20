import React from 'react'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Syed Tatheer Hussain",
      position: "Chief Executive Officer (CEO)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Muhammad Atif",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Faras Khursheed",
      position: "App Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Waleed",
      position: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Muhammad Ali",
      position: "Mern Stack Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Muhammad Jalal",
      position: "Mern Stack Developer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className='w-full bg-white py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='inter-font-semibold text-4xl md:text-5xl font-black text-[#0F172B] mb-4'>
            Meet the People Behind Tech4Edges
          </h2>
          <p className='inter-font-semibold text-[#45556C] text-lg md:text-xl max-w-4xl mx-auto'>
            A team of strategists, designers, and engineers building impactful digital solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
            >
              {/* Member Image */}
              <div className='w-full h-80 overflow-hidden'>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                />
              </div>

              {/* Member Info */}
              <div className='p-6 text-center bg-white'>
                <h3 className='montserrat-font text-2xl font-bold text-[#0F172B] mb-2'>
                  {member.name}
                </h3>
                <p className='inter-font text-[#45556C] text-base'>
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

