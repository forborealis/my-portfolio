
import React, {useState} from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-primary-500/20">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                        Portfolio
                    </div>

                    {/*Desktop Nav */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="hover:text-primary-400 transition-colors">Home</a>
                        <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
                        <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
                        <a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a>
                        <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4">
                        <a href="#home" className="block hover:text-primary-400 transition-colors">Home</a>
                        <a href="#about" className="block hover:text-primary-400 transition-colors">About</a>
                        <a href="#projects" className="block hover:text-primary-400 transition-colors">Projects</a>
                        <a href="#skills" className="block hover:text-primary-400 transition-colors">Skills</a>
                        <a href="#contact" className="block hover:text-primary-400 transition-colors">Contact</a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;