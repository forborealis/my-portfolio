import React, { useEffect, useState } from 'react';
import MindfulMap_0 from '../assets/images/mindful-map_0.png';
import MindfulMap_1 from '../assets/images/mindful-map_1.png';
import MindfulMap_2 from '../assets/images/mindful-map_2.png';
import FlowersforYou_0 from '../assets/images/flowers-for-you_0.png';
import FlowersforYou_1 from '../assets/images/flowers-for-you_1.png';
import FlowersforYou_2 from '../assets/images/flowers-for-you_2.png';
import Pizzaria_0 from '../assets/images/pizzaria_0.png';
import Pizzaria_1 from '../assets/images/pizzaria_1.png';
import Pizzaria_2 from '../assets/images/pizzaria_2.png';
import Compawnion_0 from '../assets/images/compawnion_0.png';
import Compawnion_1 from '../assets/images/compawnion_1.png';
import Compawnion_2 from '../assets/images/compawnion_2.png';

const projects = [
  {
    title: 'Mindful Map',
    description: 'Mindful Map is a data-driven app that helps young users track habits, analyze mood trends, and receive tailored wellness guidance. It also gives educators a dedicated dashboard to monitor student well-being and apply timely interventions.',
    images: [MindfulMap_0, MindfulMap_1, MindfulMap_2],
    technologies: ['MongoDB', 'React', 'Node.js', 'Tailwind CSS', 'Python'],
    functionalities: [
      'Tracks daily habits and guided activities to deliver personalized lifestyle suggestions.',
      'Forecasts emotional trends after two weeks of user data logging.',
      'Enables teachers to monitor student well-being trends and apply targeted interventions.',
    ],
    liveUrl: 'https://mindfulmap.vercel.app/',
    githubUrl: 'https://github.com/forborealis/mindful-map',
  },
  {
    title: 'Flowers for You',
    description: 'An interactive web app that lets users design custom digital bouquets complete with unique wrappers, flower arrangements, and personalized messages.',
    images: [FlowersforYou_0, FlowersforYou_1, FlowersforYou_2],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    functionalities: [
      'Select a wrapper, pick up to 3 flowers, and add a custom message.',
      'Download completed bouquets as high-resolution mobile wallpapers.',
      'Send creations to others via uniquely generated web links.',
    ],
    liveUrl: 'https://flowers-for-you-wheat.vercel.app/',
    githubUrl: 'https://github.com/forborealis/flowers-for-you',
  },
  {
    title: 'Compawnion',
    description: 'A lightweight Electron desktop app that combines a functional clock with an interactive pixel-art cat. It adapts visual themes based on the time of day to provide a cozy screen companion.',
    images: [Compawnion_0, Compawnion_1, Compawnion_2],
    technologies: ['React', 'Tailwind CSS', 'Electron'],
    functionalities: [
      'Displays various cute pixel art animations whenever you click on the cat.',
      'Automatically updates sprite visuals and background atmosphere based on the time of day.',
      'Functions as a lightweight, functional desktop timekeeper.',
    ],
    liveUrl: 'https://github.com/forborealis/cat-calendar-clock-app/releases/tag/v1.0.0',
    githubUrl: 'https://github.com/forborealis/cat-calendar-clock-app',
  },
    {
      title: 'Pizzaria Landing Page',
      description: 'A clean, responsive frontend-only landing page for a pizzeria, designed to showcase menu items, customer feedback, and location details.',
      images: [Pizzaria_0, Pizzaria_1, Pizzaria_2],
      technologies: ['React', 'CSS'],
      functionalities: [
        'Previews menu categories and guides users through the online ordering process.',
        'Displays customer feedback and ratings to showcase social proof.',
        'Provides essential restaurant details including opening hours, contact information, and physical location.',
      ],
      liveUrl: 'https://pizzaria-landing-page-vert.vercel.app/',
      githubUrl: 'https://github.com/forborealis/pizzaria-landing-page',
    },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  return (
    <>
      <section id="projects" className="bg-canvas px-4 py-16 sm:px-6 sm:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-500">
              Selected work
            </p>
            <h2 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
              Featured projects
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              A collection of digital experiences built with thoughtful design and practical implementation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                role="button"
                tabIndex="0"
                onClick={() => openProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openProject(project);
                  }
                }}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-soft-border bg-milky-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-900/10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-image-surface">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-70" />

                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="mb-6">
                    <h3 className="mb-3 text-2xl font-medium text-ink sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted sm:text-base text-ellipsis overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-5 flex flex-wrap gap-2 border-t border-soft-border pt-5">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full bg-pink px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-pink-hover"
                    >
                      Live demo
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm sm:p-6"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative grid max-h-[88vh] w-full max-w-7xl overflow-y-auto rounded-2xl bg-milky-white shadow-2xl md:grid-cols-[1.2fr_1fr] md:overflow-hidden"
          >
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/90 text-xl text-ink shadow-sm transition-colors hover:bg-pink focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              &times;
            </button>

            <div className="relative h-[300px] shrink-0 bg-image-surface md:h-[500px]">
              <img
                src={selectedProject.images[activeImage]}
                alt={`${selectedProject.title} preview ${activeImage + 1}`}
                className="h-full w-full object-contain"
              />
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous project image"
                    onClick={() => setActiveImage((current) => (
                      current === 0 ? selectedProject.images.length - 1 : current - 1
                    ))}
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-canvas/90 text-2xl text-ink shadow-sm hover:bg-pink"
                  >
                    &#8249;
                  </button>
                  <button
                    type="button"
                    aria-label="Next project image"
                    onClick={() => setActiveImage((current) => (
                      (current + 1) % selectedProject.images.length
                    ))}
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-canvas/90 text-2xl text-ink shadow-sm hover:bg-pink"
                  >
                    &#8250;
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        aria-label={`Show project image ${index + 1}`}
                        onClick={() => setActiveImage(index)}
                        className={`h-2.5 w-2.5 rounded-full ${index === activeImage ? 'bg-pink' : 'bg-canvas/70'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col p-6 sm:p-8 md:p-10">
              <h2 id="project-modal-title" className="mb-4 text-3xl font-medium text-ink sm:text-4xl">
                {selectedProject.title}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted sm:text-base text-justify">
                {selectedProject.description}
              </p>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink">
                Major functionalities
              </h3>
              <ul className="mb-8 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted sm:text-base">
                {selectedProject.functionalities.map((functionality) => (
                  <li key={functionality}>{functionality}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-pink px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-pink-hover"
                >
                  Live website
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-500 px-5 py-2.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-500 hover:text-white"
                >
                  Source code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
