'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'ABOUT ME', href: '#about' },
  { label: 'WORKS', href: '#works' },
  { label: 'DESIGNS', href: '#showcase' },
  { label: 'VOLUNTEERING', href: '#volunteering' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${scrolled ? 'shadow-sm' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#hero" className="text-xl font-black tracking-tight text-charcoal">
          Bhagya <span className="text-accent">/ UX</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-[11px] font-bold tracking-[0.18em] text-gray-500 hover:text-charcoal transition-colors duration-200 group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-accent rounded-full transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Resume Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-2.5 bg-accent text-charcoal text-xs font-bold tracking-wide rounded-full hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-charcoal rounded transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-charcoal rounded transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-charcoal rounded transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-72' : 'max-h-0'} bg-white border-t border-gray-100`}>
        <div className="px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[11px] font-bold tracking-[0.18em] text-gray-500 hover:text-charcoal transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-block px-6 py-3 bg-accent text-charcoal text-[11px] font-bold tracking-wide rounded-full text-center hover:bg-yellow-400 transition-colors mt-2"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}
