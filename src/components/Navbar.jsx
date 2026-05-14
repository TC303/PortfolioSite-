import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 border-b border-amber-900/20 bg-void/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <span className="text-sm phosphor tracking-wider">
            &gt; todd_mizera<span className="cursor-blink">_</span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} className="nav-link">
                /{item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
