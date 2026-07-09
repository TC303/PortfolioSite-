import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'

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
    title: 'Media-Recommendation-Engine',
    description: 'A movie recommendation engine comparing content-based and collaborative-filtering approaches on the MovieLens dataset, rigorously evaluated on a chronological train/test split and compared side-by-side in an interactive Streamlit app.',
    tags: ['Python', 'Streamlit', 'scikit-learn', 'Pandas'],
    url: 'https://github.com/TC303/Meida-recommendation-engine',
  },
  {
    id: '03',
    title: 'project_three',
    description: 'A social media dashboard with real-time analytics and WebSocket-powered updates.',
    tags: ['React', 'Firebase', 'WebSocket'],
  },
  {
    id: '04',
    title: 'coming_soon',
    description: 'Placeholder slot — swap in the details of your next project here.',
    tags: ['TBD'],
  },
  {
    id: '05',
    title: 'coming_soon',
    description: 'Placeholder slot — swap in the details of your next project here.',
    tags: ['TBD'],
  },
]

const Projects = () => {
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(projects.length - 1)
  const suppressScrollSyncRef = useRef(false)
  const suppressTimeoutRef = useRef(null)

  useEffect(() => () => clearTimeout(suppressTimeoutRef.current), [])

  useLayoutEffect(() => {
    const updateMaxIndex = () => setMaxIndex(getMaxIndex())
    updateMaxIndex()
    window.addEventListener('resize', updateMaxIndex)
    return () => window.removeEventListener('resize', updateMaxIndex)
  }, [])

  // The last index whose card, once scrolled to, already reveals the final
  // card in the track — any index beyond this lands on the same clamped
  // scroll position, so it's the real end of the carousel for looping
  // purposes, not projects.length - 1.
  const getMaxIndex = () => {
    const track = trackRef.current
    if (!track || cardRefs.current.length === 0) return projects.length - 1
    const maxScrollLeft = track.scrollWidth - track.clientWidth
    for (let i = 0; i < cardRefs.current.length; i++) {
      const card = cardRefs.current[i]
      if (card && card.offsetLeft - track.offsetLeft >= maxScrollLeft - 1) {
        return i
      }
    }
    return projects.length - 1
  }

  const scrollToIndex = (index) => {
    const card = cardRefs.current[index]
    const track = trackRef.current
    setActiveIndex(index)

    // Near the end, the target offset can exceed the max scrollable width and
    // get clamped short of the requested card — that still fires scroll events,
    // so suppress the closest-card sync until the smooth scroll settles to
    // avoid it snapping activeIndex back to whatever card the clamp landed on.
    suppressScrollSyncRef.current = true
    clearTimeout(suppressTimeoutRef.current)
    suppressTimeoutRef.current = setTimeout(() => {
      suppressScrollSyncRef.current = false
    }, 500)

    if (card && track) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    }
  }

  const goNext = () => {
    const maxIndex = getMaxIndex()
    scrollToIndex(activeIndex >= maxIndex ? 0 : activeIndex + 1)
  }

  const goPrev = () => {
    const maxIndex = getMaxIndex()
    scrollToIndex(activeIndex <= 0 ? maxIndex : activeIndex - 1)
  }

  const handleScroll = () => {
    if (suppressScrollSyncRef.current) return
    const track = trackRef.current
    if (!track) return
    let closest = 0
    let closestDist = Infinity
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const dist = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft)
      if (dist < closestDist) {
        closestDist = dist
        closest = i
      }
    })
    setActiveIndex(closest)
  }

  return (
    <section id="projects" className="py-28 bg-void border-t border-amber-900/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="section-label mb-3">// section_02</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#ddd0b8] tracking-tight">
              projects<span className="phosphor">.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous project"
              className="w-9 h-9 flex items-center justify-center border border-amber-900/30 text-amber-700 hover:border-amber-600/70 hover:text-amber-500 transition-colors"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next project"
              className="w-9 h-9 flex items-center justify-center border border-amber-900/30 text-amber-700 hover:border-amber-600/70 hover:text-amber-500 transition-colors"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="terminal-card flex flex-col shrink-0 snap-start w-[82%] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]"
              onClick={() => project.url && window.open(project.url, '_blank', 'noopener,noreferrer')}
              style={project.url ? { cursor: 'pointer' } : {}}
            >
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

        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? 'w-6 bg-amber-600' : 'w-1.5 bg-amber-900/40 hover:bg-amber-700/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
