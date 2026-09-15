import React from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    technologies: ['HTML', 'CSS', 'React', 'React Native', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'PHP', 'Python', 'Laravel', 'C', 'C++'],
  },
  {
    category: 'Database',
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-canvas px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-500">
            Skills
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-ink md:text-6xl">
            Tech stack
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-6 rounded-2xl border border-soft-border bg-milky-white p-6 transition-colors hover:border-primary-400 md:grid-cols-[minmax(150px,0.35fr)_1fr] md:items-start md:p-8"
            >
              <h3 className="text-2xl font-medium text-primary-600 md:text-3xl">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                {group.technologies.map((technology) => (
                  <span key={technology} className="text-base text-muted md:text-lg">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
