const items = [
  {
    icon: '🔬',
    title: 'Technical Volunteer',
    org: 'ICARC 2025',
    badge: '2025',
    active: false,
  },
  {
    icon: '🔬',
    title: 'Technical Volunteer',
    org: 'ICMR 2024',
    badge: '2024',
    active: false,
  },
  {
    icon: '🌐',
    title: 'Active Member',
    period: '2025–Present',
    org: 'IEEE CS Student Chapter, SUSL',
    badge: 'Active',
    active: true,
  },
  {
    icon: '🌐',
    title: 'Active Member',
    period: '2024–2025',
    org: 'IEEE Student Branch, SUSL',
    badge: '2024–2025',
    active: false,
  },
]

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-light rounded-full text-xs font-black tracking-widest text-amber-600 mb-4">
            COMMUNITY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-charcoal mb-5">
            Volunteering
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto">
            Contributing beyond code — building communities and supporting technical excellence.
          </p>
        </div>

        {/* List */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-6 py-5 md:px-8 md:py-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-5">
                {/* Icon pill */}
                <div className="w-12 h-12 rounded-2xl bg-accent-light flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-accent transition-colors duration-200">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg md:text-xl font-bold text-charcoal">{item.title}</h3>
                    {item.period && (
                      <span className="text-sm text-gray-400 font-medium">({item.period})</span>
                    )}
                  </div>
                  <p className="text-base text-gray-500 font-medium mt-0.5">{item.org}</p>
                </div>
              </div>

              {/* Badge */}
              {item.active ? (
                <span className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-600 text-xs font-bold border border-green-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Active
                </span>
              ) : (
                <span className="flex-shrink-0 px-3 py-1.5 rounded-full bg-gray-50 text-gray-500 text-xs font-bold border border-gray-100">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
