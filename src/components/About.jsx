import React from 'react'

const skills = [
  { label: 'frontend', items: ['React', 'Tailwind CSS', 'TypeScript'] },
  { label: 'backend', items: ['Java', 'Python', 'Node.js', 'Express'] },
  { label: 'data', items: ['MongoDB', 'PostgreSQL', 'REST APIs'] },
  { label: 'tooling', items: ['Git', 'Docker', 'Vite', 'CI/CD'] },
]

const About = () => {
  return (
    <section id="about" className="py-28 bg-void border-t border-amber-900/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="section-label mb-3">// section_01</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ddd0b8] tracking-tight">
            about<span className="phosphor">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder */}
          <div className="terminal-card p-1 aspect-square flex items-center justify-center relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(120, 53, 15, 0.06) 0%, transparent 70%)',
              }}
            />
            <div className="text-center relative z-10">
              <p className="text-xs text-[#2e2820] mb-1 tracking-widest">// image_placeholder</p>
              <p className="phosphor-dim text-xs tracking-wider">your_photo.jpg</p>
            </div>
          </div>

          {/* Text + skills */}
          <div>
            <p className="text-sm text-[#a89880] leading-7 mb-5">
              Full Stack Developer focused on building scalable web applications with Java,
              Python, React, and modern JavaScript/TypeScript frameworks. Experienced in
              RESTful APIs, system architecture, secure coding practices, and performance
              optimization.
            </p>
            <p className="text-sm text-[#a89880] leading-7 mb-10">
              Skilled in AI-assisted development workflows, testing, and delivering clean,
              maintainable software solutions.
            </p>

            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.label} className="terminal-card p-4 flex gap-4 items-start">
                  <span className="phosphor-dim text-xs tracking-widest shrink-0 mt-0.5">
                    {skill.label}:
                  </span>
                  <span className="text-xs text-[#a89880] leading-5">
                    {skill.items.join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
