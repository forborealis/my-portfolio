import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPhp, 
  FaPython, 
  FaLaravel 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiMysql, 
  SiFirebase 
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "React Native", icon: <TbBrandReactNative />, color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
        { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
        { name: "Laravel", icon: <FaLaravel />, color: "text-red-500" }
      ]
    },
    {
      category: "Database",
      technologies: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-orange-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Technologies and tools I use and have experience with.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-gradient-to-br from-primary-900/10 to-primary-800/10 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 hover:border-primary-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Category Title */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary-300 mb-2">
                    {skillCategory.category}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
                </div>


                <div className="space-y-6">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="group">
                      <div className="flex items-center gap-3">
                        <div className={`text-2xl group-hover:scale-110 transition-transform ${tech.color}`}>
                          {tech.icon}
                        </div>
                        <span className="text-white font-medium text-lg">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Skills;