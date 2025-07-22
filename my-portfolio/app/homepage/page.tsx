'use client';

import {
  SiSharp,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCplusplus,
  SiCss3,
  SiReact,
  SiOpengl,
  SiGit,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql
} from 'react-icons/si';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center px-8 py-16 text-center space-y-12">
      <img
        src="/images/portrait.png"
        alt="Jan's portrait"
        className="w-72 h-72 object-cover rounded-xl shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Jan</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl">
        I'm a backend-leaning full-stack developer passionate about solving complex problems,
        integrating diverse technologies, and building scalable systems.
        I enjoy desktop and web app development, with experience in mobile, game dev, and debugging.
      </p>
      <a
        href="/projectspage"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mb-10"
      >
        View Projects
      </a>
      <div className="grid grid-cols-4 gap-6 text-4xl text-blue-500 justify-items-center max-w-xl">
        <SiSharp title="C#" />
        <SiPython title="Python" />
        <SiJavascript title="JavaScript" />
        <SiHtml5 title="HTML" />
        <SiCss3 title="CSS" />
        <SiCplusplus title="C++" />
        <SiReact title="React" />
        <SiNodedotjs title="Node.js" />
        <SiNextdotjs title="Next.js" />
        <SiOpengl title="OpenGL" />
        <SiGit title="Git" />
        <SiPostgresql title="SQL / PostgreSQL" />
      </div>
    </section>
  );
}
