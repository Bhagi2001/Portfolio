'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

function TypingName() {
  const text = "Bhagya Welivita"
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let i = 0

    const type = () => {
      if (i < text.length) {
        setDisplayed(text.substring(0, i + 1))
        i++
        timeout = setTimeout(type, 120)
      } else {
        // Pause for 1 second at the end, then clear and restart
        timeout = setTimeout(() => {
          i = 0
          setDisplayed("")
          timeout = setTimeout(type, 300) // brief pause before typing again
        }, 1000)
      }
    }

    type()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="h-[2.5em] md:h-[1.5em] flex items-center mb-1">
      <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight flex items-center whitespace-nowrap">
        {displayed}
        <span className="text-accent animate-cursor-blink ml-1 font-light -mt-2">|</span>
      </h2>
    </div>
  )
}

const tech = [
  { name: 'React', color: '#61DAFB', bg: '#E8F9FE' },
  { name: 'Angular', color: '#DD0031', bg: '#FDE8EC' },
  { name: 'Next.js', color: '#333', bg: '#F0F0F0' },
  { name: 'Node.js', color: '#339933', bg: '#E8F5E9' },
  { name: 'ExpressJS', color: '#555', bg: '#F5F5F5' },
  { name: 'TypeScript', color: '#3178C6', bg: '#E8F0FB' },
  { name: 'MongoDB', color: '#47A248', bg: '#E8F5E9' },
  { name: 'MySQL', color: '#00618A', bg: '#E3F1F8' },
  { name: 'Tailwind', color: '#0EA5E9', bg: '#E0F5FF' },
]

const design = [
  { name: 'Figma', color: '#F24E1E', bg: '#FEF0ED' },
  { name: 'Photoshop', color: '#31A8FF', bg: '#E8F4FF' },
]

function Chip({ name, color, bg }: { name: string; color: string; bg: string }) {
  return (
    <div
      className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
      style={{ backgroundColor: bg }}
    >
      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
      <span className="text-sm font-semibold text-gray-700">{name}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* ── Left: Photo ── */}
          <div className="flex justify-start lg:justify-end">
            <div className="relative w-72 h-96 md:w-80 md:h-[26rem]">
              {/* Shadow block */}
              <div className="absolute inset-0 rounded-3xl bg-accent-light translate-x-4 translate-y-4" />
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image src="/my.jpeg" alt="Bhagya Welivita" fill className="object-cover" />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100 flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</p>
                  <p className="text-sm font-bold text-charcoal">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Bio + Stack ── */}
          <div className="space-y-7 pt-4">
            {/* Animated Name */}
            <TypingName />

            {/* Bio */}
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              Hi, I&apos;m Bhagya! I&apos;m a{' '}
              <strong className="text-charcoal font-semibold">Software Engineering student</strong> at
              Sabaragamuwa University of Sri Lanka and a proud{' '}
              <strong className="text-charcoal font-semibold">Ranabima Royal College</strong> alumnus.
              I thrive at the intersection of design and logic, ensuring that every line of code
              serves a better user experience.
            </p>

            {/* Uni logos */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0">
                  <Image src="/images.png" alt="SUSL" fill className="object-cover" />
                </div>
                <span className="text-sm font-semibold text-charcoal leading-tight">
                  Sabaragamuwa<br />University
                </span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0">
                  <Image src="/download.jpg" alt="RRC" fill className="object-cover" />
                </div>
                <span className="text-sm font-semibold text-charcoal leading-tight">
                  Ranabima<br />Royal College
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
