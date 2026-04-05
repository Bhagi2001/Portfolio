import Image from 'next/image'



const projects = [
  {
    id: 'quickcert',
    title: 'QuickCert',
    subtitle: 'Digital Income Statement Platform for Sri Lanka',
    desc: 'Simplifying government document requests through QR-verified automation and digital workflow management.',
    role: 'UI/UX Designer & Frontend Integration',
    stack: ['Angular', 'Node.js', 'JWT', 'QRCode.js'],
    tag: 'UI/UX + Frontend',
    tagColor: '#3178C6',
    tagBg: '#E8F0FB',
    img: '/quickcert.png',
    github: 'https://github.com/Bhagi2001',
    figma: '#',
  },
  {
    id: 'safari',
    title: 'Ahasata Gauwai',
    subtitle: 'Smart Safari Booking System',
    desc: 'Modernizing wildlife tourism in Belihuloya with real-time inventory management and secure payment processing.',
    role: 'UI/UX Lead & Full-Stack Support',
    stack: ['React.js', 'MongoDB', 'Tailwind', 'Vercel'],
    tag: 'UI/UX Lead + Full-Stack',
    tagColor: '#339933',
    tagBg: '#E8F5E9',
    img: '/safari.png',
    github: 'https://github.com/Bhagi2001',
    figma: '#',
  },
  {
    id: 'transitcare',
    title: 'TransitCare',
    subtitle: 'Public Transport Complaint Management',
    desc: 'Bridging the gap between passengers and authorities with data-driven reporting and smart analytics dashboards.',
    role: 'Backend Developer & UI Designer',
    stack: ['Node.js', 'MongoDB', 'React.js', 'Docker'],
    tag: 'Backend + UI Design',
    tagColor: '#6366F1',
    tagBg: '#EEEFFC',
    img: '/transitcare.png',
    github: 'https://github.com/Bhagi2001',
    figma: '#',
  },
]

export default function Projects() {
  return (
    <section id="works" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-light rounded-full text-xs font-black tracking-widest text-amber-600 mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-charcoal mb-5">
            My Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            Real-world work spanning product design, full-stack development, and systems thinking.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden" style={{ backgroundColor: p.tagBg }}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold bg-white"
                    style={{ color: p.tagColor }}
                  >
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-2xl font-black text-charcoal mb-0.5">{p.title}</h3>
                <p className="text-sm font-semibold text-gray-400 mb-3">{p.subtitle}</p>
                <p className="text-base text-gray-500 leading-relaxed mb-4">{p.desc}</p>

                {/* Stack chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-semibold text-gray-500"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Role */}
                <p className="text-xs font-semibold text-gray-400 mb-5 flex-1">
                  <span className="text-accent mr-1.5">✦</span>
                  {p.role}
                </p>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-charcoal text-white text-sm font-semibold hover:bg-black transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-4 h-4 invert" />
                    GitHub
                  </a>
                  <a
                    href={p.figma}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-charcoal text-sm font-semibold hover:bg-gray-50 transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="w-4 h-4" />
                    Figma
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
