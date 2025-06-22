import React from 'react';
import AboutImage from '../assets/images/about.png'; 

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl rotate-6 opacity-20"></div>
                <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 p-1 rounded-2xl">
                  <img 
                    src={AboutImage} 
                    alt="About me" 
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">

              
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                I'm Hannah Aurora O. Busto, currently a third-year Information Technology student at the Technological University of the Philippines - Taguig.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                I have a stable foundation in web development, with experience in both frontend and backend technologies. My passion lies in creating and implementing designs that not only look great but also provide a seamless user experience.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 bg-gradient-to-br from-primary-900/20 to-primary-800/20 rounded-xl border border-primary-500/20">
                  <div className="text-3xl font-bold text-primary-400 mb-2">20+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary-900/20 to-primary-800/20 rounded-xl border border-primary-500/20">
                  <div className="text-3xl font-bold text-primary-400 mb-2">2+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;