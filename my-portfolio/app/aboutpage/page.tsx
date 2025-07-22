'use client';

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-20 flex items-start justify-center bg-white text-gray-900">
      <div className="max-w-4xl w-full flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-blue-600">About Me</h1>

        <p className="text-lg leading-relaxed">
          Hi, I'm Jan — a backend-leaning full-stack developer with a passion for building reliable, scalable, and efficient systems. My focus lies in connecting technologies, solving tough problems, and delivering clean solutions that work seamlessly across environments.
        </p>

        <p className="text-lg leading-relaxed">
          My journey in software development started out of pure curiosity — wanting to understand how systems work beneath the surface. Over the years, I've grown from experimenting with small projects to building complete applications that span across web, desktop, and even mobile platforms. While I've dabbled in game development and UI design, I've always found myself gravitating toward backend logic and systems integration.
        </p>

        <p className="text-lg leading-relaxed">
          I find great satisfaction in making different components work together — whether it's connecting APIs, handling data efficiently, or designing architecture that scales and adapts. Debugging isn't a chore to me — it's a puzzle. The challenge of identifying subtle bugs, performance bottlenecks, or system flaws is something I genuinely enjoy.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Core Skills</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Backend-focused full-stack web development (Next.js, Node.js, REST APIs)</li>
            <li>Languages: C#, Python, JavaScript, C++, SQL, HTML/CSS</li>
            <li>Mobile & desktop development experience, with a preference for desktop</li>
            <li>Game development using OpenGL, GLSL, and real-time rendering fundamentals</li>
            <li>Comfortable with Git-based workflows, testing, debugging, and agile practices</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">What Drives Me</h2>
          <p className="text-lg leading-relaxed">
            I'm motivated by the feeling of making progress — taking an idea and watching it evolve from concept to a real, functioning product. I enjoy diving deep into system design, writing reusable code, and identifying ways to improve both performance and maintainability.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Whether I'm working on backend APIs, refactoring code, or debugging a difficult issue, I bring a methodical, problem-solving mindset to everything I do. I'm also an eager learner — always experimenting with new languages, tools, or frameworks to expand my toolkit and adapt to new challenges.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Goals & Vision</h2>
          <p className="text-lg leading-relaxed">
            My goal is to keep building systems that are not just functional, but thoughtful — codebases that are easy to understand, scale, and maintain. I'm especially interested in contributing to tools or platforms that empower others: developer tooling, automation, and software infrastructure are all areas I want to explore further.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            In the long term, I want to be part of teams that value both technical excellence and clear communication. I believe good software is the result of smart engineering paired with strong collaboration and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
}