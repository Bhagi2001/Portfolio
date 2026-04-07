'use client'

/* ─────────────────────────────────────────────────────────────
   TechStack.tsx  ·  Original brand logos via Devicons CDN
   ───────────────────────────────────────────────────────────── */

const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const techIcons = [
  { name: 'React', src: `${BASE}/react/react-original.svg` },
  { name: 'Angular', src: `${BASE}/angular/angular-original.svg` },
  { name: 'Next.js', src: `${BASE}/nextjs/nextjs-original.svg` },
  { name: 'Node.js', src: `${BASE}/nodejs/nodejs-original.svg` },
  { name: 'Express', src: `${BASE}/express/express-original.svg` },
  { name: 'TypeScript', src: `${BASE}/typescript/typescript-original.svg` },
  { name: 'MongoDB', src: `${BASE}/mongodb/mongodb-original.svg` },
  { name: 'MySQL', src: `${BASE}/mysql/mysql-original.svg` },
  { name: 'Tailwind', src: `${BASE}/tailwindcss/tailwindcss-original.svg` },
]

const designIcons = [
  { name: 'Figma', src: `${BASE}/figma/figma-original.svg` },
  { name: 'Photoshop', src: `${BASE}/photoshop/photoshop-plain.svg` },
]

// Duplicate for seamless infinite loops
const marqueeItems = [...techIcons, ...techIcons]
const designMarqueeItems = [...designIcons, ...designIcons, ...designIcons, ...designIcons]

export default function TechStack() {
  return (
    <section id="tech" className="tech-section">
      <div className="tech-inner">

        {/* ── TECH STACK ── */}
        <div className="tech-block" data-reveal>
          <p className="tech-label">Tech Stack</p>

          <div className="marquee-wrapper">
            <div className="marquee-track">
              {marqueeItems.map((icon, i) => (
                <div className="marquee-card" key={`${icon.name}-${i}`} title={icon.name}>
                  <div className="marquee-icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={icon.src} alt={icon.name} width={36} height={36} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DESIGN TOOLS ── */}
        <div className="tech-block" data-reveal>
          <p className="tech-label">Design Tools</p>
          <div className="design-icons-row flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {designIcons.map((icon, i) => (
              <div className="marquee-card" key={`${icon.name}-${i}`} title={icon.name}>
                <div className="marquee-icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon.src} alt={icon.name} width={36} height={36} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
