import React from 'react';
import profileImg from '../assets/my.jpeg';  // 👈 fixed

const HeroSection = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden" id="home">
      {/* Background Circle Shadow */}
      <div className="absolute w-[350px] h-[350px] bg-black rounded-full left-[10%] top-[25%] -z-10 hidden md:block"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Area */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-2">
            I'm <span className="text-[rgb(228,18,169)]">Laiba Azeem</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Full-Stack Web Developer | Tech-Educator | Content Creator
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 mb-6">
            I design and develop responsive, user-focused web solutions while sharing my knowledge through content creation. Always open to exciting freelance and collaborative opportunities.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-[rgb(228,18,169)] transition duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-black text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 relative">
          <div className="rounded-full overflow-hidden w-64 h-64 border-8 border-[rgb(228,18,169)] shadow-lg mx-auto md:mx-0">
            <img
              src={profileImg}
              alt="Aiman Maroof"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
