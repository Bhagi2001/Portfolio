'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev === 0 ? 1 : 0))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-36 pb-120 px-6 bg-white"
    >
      {/* Floating avatar */}
      <div className="relative mb-8 animate-float">
        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden bg-accent-light flex items-center justify-center shadow-2xl shadow-accent/20 border-4 border-accent/20 relative">
          <Image
            src="/avatar.png"
            alt="Bhagya Avatar"
            fill
            className={`object-cover transition-opacity duration-500 ${imgIndex === 0 ? 'opacity-100' : 'opacity-0'
              }`}
            priority
          />
          <Image
            src="/my1.jpeg"
            alt="Bhagya Photo"
            fill
            className={`object-cover transition-opacity duration-500 ${imgIndex === 1 ? 'opacity-100' : 'opacity-0'
              }`}
            priority
          />
        </div>
        {/* Status dot */}
        <span className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-green-500 border-2 border-white animate-glow" />
      </div>

      {/* Greeting pill */}
      <div className="mb-7 px-6 py-2.5 rounded-full bg-accent-light border border-accent/30 text-charcoal font-semibold text-base shadow-lg shadow-accent/10">
        Hi, I&apos;m Bhagya 👋
      </div>

      {/* Headline */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-charcoal text-center leading-[1.1] tracking-tight max-w-4xl mb-6">
        I craft digital products
        <br />
        and experiences!
      </h1>

      {/* Sub-headline */}
      <p className="text-lg md:text-xl text-gray-500 text-center leading-relaxed max-w-2xl mb-10">
        A <strong className="text-charcoal font-semibold">UI/UX &amp; Frontend Enthusiast</strong>{' '}
        based in Kandy, focused on building intuitive user interfaces and transforming complex
        workflows into seamless digital solutions.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#works"
          className="px-8 py-4 bg-charcoal text-white rounded-2xl font-semibold text-base hover:bg-black hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-4 border-2 border-charcoal text-charcoal rounded-2xl font-semibold text-base hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg bg-white"
        >
          Get In Touch
        </a>
      </div>

      {/* Scroll hint */}
      <div className="mt-20 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-200 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  )
}
