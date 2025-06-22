import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-primary-500/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              © 2025 Hannah Aurora Busto. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                Made with 
                <span className="text-red-400 animate-pulse">♥</span> 
                and React
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle animated dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
    </footer>
  );
};

export default Footer;