import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';  // Add this line
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App bg-black text-white min-h-screen">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;