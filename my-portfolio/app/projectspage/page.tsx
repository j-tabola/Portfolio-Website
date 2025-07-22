'use client';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: 'Mobile App Developer - Arterne (University Project)',
    description:
      'Collaborated with an external organisation and a small team to design and implement a mobile app targeted at elderly users. Focused on accessibility, clean UI, and performance across devices. Included user testing and iterative development.',
    technologies: ['Mobile', 'Figma', 'Agile', 'UI/UX'],
    image: '/images/arterne-mobile-preview.png',
  },
  {
    title: 'Independent Game Development',
    description:
      'Created a prototype 2D game using C# and Unity. Developed gameplay mechanics, simple AI behaviors, and integrated assets. Managed scope and debugging independently, applying core game design principles.',
    technologies: ['C#', 'Unity', 'Game Design', 'Aseprite'],
    image: '/images/unity-game-preview.png',
  },
  {
    title: 'AI Web Application Project - Beat Fusion (University Project)',
    description:
      'Developed a full-stack app that integrates three AI models to generate melodies, lyrics, and song titles from user prompts. Connected pretrained models with a React frontend, focusing on UX and real-time feedback.',
    technologies: ['Python', 'React', 'Flask', 'HuggingFace','Pretrained Models'],
    image: '/images/ai-app-preview.png',
  },
  {
    title: 'OpenGL Shader Project - Flaming Skull',
    description:
      'Built a 3D visualization of a flaming skull using OpenGL and GLSL. Implemented real-time fire effects and dynamic lighting with custom fragment and vertex shaders. Emphasized customizability and visual fidelity.',
    technologies: ['OpenGL', 'GLSL', 'C++', 'Shaders'],
    image: '/images/opengl-flame-skull.png',
  },
  {
    title: 'Web App with API Integration - Personal Dashboard',
    description:
      'Built a responsive personal dashboard web application built with React and Tailwind CSS, designed to display real-time data including weather, news headlines, and GitHub profile information. The app fetches data from external APIs — OpenWeatherMap for weather updates, NewsAPI for news articles, and GitHub’s REST API for user repositories — using Axios for HTTP requests. Environment variables securely manage API keys, and the project is deployed seamlessly on Netlify with support for dark mode and optimized UI components from React Icons.',
    technologies: ['React', 'Tailwind CSS', 'APIs', 'Axios', 'Netlify'],
    image: '/images/web-app-api.png',
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-12 text-center">My Projects</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md border hover:shadow-lg transition"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-md mb-6"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://github.com/jtabola"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.6.1.8-.25.8-.55v-2c-3.25.7-3.95-1.45-3.95-1.45-.55-1.35-1.35-1.7-1.35-1.7-1.1-.75.1-.75.1-.75 1.2.1 1.85 1.25 1.85 1.25 1.1 1.85 2.85 1.3 3.55 1 .1-.8.45-1.3.85-1.6-2.6-.3-5.35-1.3-5.35-5.75 0-1.3.45-2.35 1.2-3.2-.1-.3-.55-1.55.1-3.25 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.65 1.7.2 2.95.1 3.25.75.85 1.2 1.9 1.2 3.2 0 4.45-2.75 5.45-5.35 5.75.45.35.9 1.05.9 2.15v3.2c0 .3.2.65.8.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}