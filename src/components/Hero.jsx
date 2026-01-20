import React from "react";
import heroImg from "../assets/heroImg.jpg";
import shape01 from "../assets/shape01.png";
import shape02 from "../assets/shape02.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden py-15 px-6">
      {/* Decorative Shapes */}
      <img src={shape01} alt="" className="w-45 absolute bottom-30 left-[40%]" />
      <img src={shape02} alt="" className="w-65 absolute bottom-18 right-0" />

      <div className="w-full flex justify-end">
        <div className="w-[85%] h-full flex px-2">
          {/* Left Content */}
          <div className="relative z-10 justify-self-center space-y-4 w-[38%]">
            {/* Badge */}
            <div className="inline-block relative border border-gray-200 rounded-full px-2 py-1">
              <span className="cabin-400 text-[#0F172B] px-4 py-2 text-sm font-medium z-2 relative">
                Meet Tech4Edges
              </span>
              <div className="w-10 h-[120%] -mt-1 bg-white absolute top-0 right-0 z-1"></div>
            </div>

            {/* Main Heading */}
            <h1 className="cabin-400 text-3xl md:text-4xl lg:text-[60px] font-black text-[#0F172B] leading-tight">
              IT solutions
              <br />
              for a <span className="text-[#1E90FF]">growing</span>
              <br />
              businesses
            </h1>

            {/* Subtitle */}
            <p className="inter-font text-black text-md md:text-lg leading-relaxed max-w-xl">
              Empowering enterprises with innovative technology to stay ahead in
              the digital age
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="cabin-400 bg-[#1E90FF] hover:bg-[#1570d1] text-white font-semibold px-3 py-2 transition-all duration-300 flex items-center gap-5 group shadow-lg hover:shadow-xl">
                View Solutions
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-full">
            {/* Left Image */}
            <div className="absolute top-15 left-45 h-122 w-88 hero-clip-path">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover shadow-xl "
              />
            </div>

            {/* Right Image */}
            <div className="absolute -top-10 -right-3 h-115 w-90 hero-clip-path">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=500&fit=crop"
                alt="Business meeting"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full  px-5"> */}
      {/* <div className="flex justify-center gap-12 w-[80%] mx-auto items-center"> */}

      {/* Right Images */}
      {/* <div className="relative border h-full"> */}
      {/* Top Left Image */}
      {/* <div className="absolute -top-30 -right-10 h-110 w-73 transform skew-x-2 self-end overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover fixed"
              />
            </div> */}

      {/* Top Right Image */}
      {/* <div className="absolute -bottom-50 left-10 h-110 w-73 transform skew-x-2 self-start overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=500&fit=crop"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
