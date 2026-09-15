import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <div className="App bg-canvas text-ink min-h-screen">
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;