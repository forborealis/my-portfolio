import React, { useState, useEffect } from 'react';
import profileImage from '../assets/images/image.png';
import Aurora from './Aurora';

const Hero = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black"></div>
      

      <Aurora
        colorStops={["#670D2F", "#A53860", "#EF88AD"]}
        blend={0.3}
        amplitude={1.2}
        speed={0.4}
      />
      

      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="w-40 h-40 mx-auto mb-8  to-primary-600 p-1 rounded-full">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span 
              className={`bg-white bg-clip-text text-transparent transition-all duration-1000 ${
                isTextVisible 
                  ? 'blur-0 opacity-100' 
                  : 'blur-sm opacity-0'
              }`}
            >
              Hannah Aurora O. Busto
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-primary-500 mb-8 font-medium">
            <span className="inline-block">Web Developer</span>
            <span className="text-primary-500 mx-2">•</span>
            <span className="inline-block">UI Designer</span>
          </div>

          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating visually-appealing, functional, and user-centered digital experiences. 
            I bring ideas to life through code and design.
          </p>

          <div className="flex justify-center mb-12">
            <button 
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/hannah-aurora-busto-b91520275" className="text-gray-400 hover:text-primary-400 transition-colors transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a href="https://github.com/forborealis" className="text-gray-400 hover:text-primary-400 transition-colors transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;