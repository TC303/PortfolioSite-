import React from 'react'

const links = [
  { label: 'github', href: '#' },
  { label: 'linkedin', href: '#' },
]

const Footer = () => {
  return (
    <footer className="border-t border-amber-900/20 bg-void py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-xs text-[#3d3529] tracking-widest">
            &copy; 2024 todd_mizera — all_rights_reserved
          </span>
          <div className="flex gap-6">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs text-[#5a5040] hover:text-amber-600 transition-colors duration-200 tracking-wider"
                style={{ '--tw-text-opacity': 1 }}
              >
                /{label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
