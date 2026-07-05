import React from 'react'

const projects = [
  {
    id: '01',
    title: 'REST-Task-Management',
    description: 'A RESTful API for task management built with Spring Boot — clean architecture, JWT security, full CRUD, category/tag filtering, and Swagger docs.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
    url: 'https://github.com/TC303/REST-Task-Management',
  },
  {
    id: '02',
    title: 'project_two',
    description: 'An e-commerce platform with seamless payment integration and inventory management.',
    tags: ['React', 'Tailwind', 'Stripe'],
  },
  {
    id: '03',
    title: 'project_three',
    description: 'A social media dashboard with real-time analytics and WebSocket-powered updates.',
    tags: ['React', 'Firebase', 'WebSocket'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-void border-t border-amber-900/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="section-label mb-3">// section_02</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ddd0b8] tracking-tight">
            projects<span className="phosphor">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="terminal-card flex flex-col" onClick={() => project.url && window.open(project.url, '_blank', 'noopener,noreferrer')} style={project.url ? { cursor: 'pointer' } : {}}>
              {/* Image area */}
              <div
                className="h-40 flex items-center justify-center border-b border-amber-900/15 relative overflow-hidden"
                style={{
                  background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(120, 53, 15, 0.07) 0%, transparent 100%)',
                }}
              >
                <span className="text-xs text-[#2e2820] tracking-widest">
                  // {project.id}.png
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="phosphor-dim text-xs">[{project.id}]</span>
                  <h3 className="text-sm font-semibold text-[#ddd0b8] tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="text-xs text-[#7a6a58] leading-6 mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-amber-700 border border-amber-900/30 px-2 py-0.5 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
