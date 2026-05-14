import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-void overflow-hidden">
      {/* Very subtle ambient glow at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(120, 53, 15, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-left">
        {/* Prompt line */}
        <p className="section-label mb-10">system // ready</p>

        {/* Name block */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#ddd0b8] mb-2 tracking-tight leading-none">
          TODD
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-none phosphor">
          MIZERA<span className="cursor-blink text-[#d97706]">_</span>
        </h1>

        {/* Role lines */}
        <div className="mb-10 space-y-1">
          <p className="text-sm text-[#5a5040] tracking-widest">
            &gt; role<span className="phosphor-dim">:</span> full_stack_developer
          </p>
          <p className="text-sm text-[#5a5040] tracking-widest">
            &gt; focus<span className="phosphor-dim">:</span> clean_code · thoughtful_design
          </p>
          <p className="text-sm text-[#5a5040] tracking-widest">
            &gt; status<span className="phosphor-dim">:</span>{' '}
            <span className="text-amber-600">available_for_work</span>
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <a href="#projects" className="btn-phosphor-fill">[view_work]</a>
          <a href="#contact" className="btn-phosphor">[contact]</a>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-amber-900/20" />
    </section>
  )
}

export default Hero
