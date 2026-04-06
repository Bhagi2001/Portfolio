'use client'
import Image from 'next/image'
import { useRef } from 'react'

const mockups = [
  { src: '/quickcert.png', label: 'QuickCert — Citizen App' },
  { src: '/safari.png', label: 'Ahasata Gauwai — Booking Flow' },
  { src: '/transitcare.png', label: 'TransitCare — Report Dashboard' },
  { src: '/quickcert.png', label: 'QuickCert — Admin Panel' },
  { src: '/safari.png', label: 'Ahasata Gauwai — Admin View' },
  { src: '/transitcare.png', label: 'TransitCare — Mobile App' },
  { src: '/quickcert.png', label: 'QuickCert — Web Portal' },
  { src: '/safari.png', label: 'Ahasata Gauwai — Tour Checkout' },
]

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-4 py-1.5 bg-accent-light rounded-full text-xs font-black tracking-widest text-amber-600 mb-4">
      {children}
    </span>
  )
}

export default function Showcase() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') =>
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })

  return (
    <section id="showcase" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── UI/UX Showcase ── */}
        <div className="text-center mb-12">
          <SectionTag>DESIGN</SectionTag>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-charcoal mb-5">
            UI/UX Showcase
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto">
            Mobile-first designs crafted for real-world usability and visual delight.
          </p>
        </div>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-accent transition-colors duration-200"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Scroll strip */}
          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-6 overflow-x-auto pb-6 scroll-smooth"
          >
            {mockups.map((m, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="relative w-52 h-96 rounded-[2.5rem] overflow-hidden border-4 border-gray-100 shadow-2xl bg-gray-50">
                  <Image src={m.src} alt={m.label} fill className="object-cover object-top" />
                </div>
                <p className="text-sm font-semibold text-gray-500 text-center">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-accent transition-colors duration-200"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
