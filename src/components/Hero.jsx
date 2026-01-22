import shape01 from "../assets/shape01.png";
import shape02 from "../assets/shape02.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden py-8 md:py-12 lg:py-15 px-4 md:px-6">
      {/* Decorative Shapes - Hidden only on mobile */}
      <img
        src={shape01}
        alt=""
        className="w-30 sm:hidden md:block sm:w-45 absolute bottom-30 left-[20%] md:left-[40%]"
      />
      <img
        src={shape02}
        alt=""
        className="sm:hidden md:block w-30 sm:w-65 absolute bottom-18 md:right-0"
      />

      <div className="w-full flex justify-center md:justify-center lg:justify-end">
        <div className="w-full md:w-[90%] xl:w-[85%] h-full flex flex-col lg:flex-row px-2 gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="relative z-10 space-y-4 w-full md:flex md:flex-col md:items-center md:text-center lg:items-start lg:text-left lg:w-[38%] pt-4 md:pt-8 lg:pt-0">
            {/* Badge */}
            <div className="inline-block relative border border-gray-200 rounded-full px-2 py-1">
              <span className="cabin-400 text-(--color-dark) px-4 py-2 text-[12px] font-medium z-2 relative">
                Meet Tech4Edges
              </span>
              <div className="w-10 h-[120%] -mt-1 bg-white absolute top-0 right-0 z-1"></div>
            </div>

            {/* Main Heading */}
            <h1 className="cabin-400 text-[28px] sm:text-[35px] md:text-[40px] lg:text-[35px] xl:text-[45px] font-black text-(--color-dark) md:leading-tight text-left">
              IT solutions
              <br />
              for a <span className="text-(--color-primary)">growing</span>
              <br />
              businesses
            </h1>

            {/* Subtitle */}
            <p className="inter-font text-black text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-xl">
              Empowering enterprises with innovative technology to stay ahead in
              the digital age
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="cabin-400 text-[12px] bg-(--color-primary) hover:bg-(--color-primary-dark) text-white font-semibold px-3 py-2 transition-all duration-300 flex items-center gap-5 group shadow-lg hover:shadow-xl">
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

          {/* Images Container */}
          <div className="relative w-full h-[380px] sm:h-[500px] md:h-[550px] lg:h-full mt-4 lg:mt-0">
            {/* Left Image - Hidden only on small mobile */}
            <div className="hidden sm:block absolute top-10 left-8 sm:top-12 sm:left-12 md:top-45 md:left-10 lg:top-35 lg:left-45 h-[400px] w-[240px] sm:h-[350px] sm:w-[270px] md:h-[320px] md:w-[290px] lg:h-102 lg:w-72 hero-clip-path">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>

            {/* Right Image - Visible on all screens */}
            <div className="absolute top-0 right-4 sm:top-0 sm:right-8 md:top-0 md:right-0 lg:-top-10 lg:-right-3 h-[380px] w-[260px] sm:h-[380px] sm:w-[300px] md:h-[400px] md:w-[340px] lg:h-102 lg:w-88 hero-clip-path">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=500&fit=crop"
                alt="Business meeting"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
