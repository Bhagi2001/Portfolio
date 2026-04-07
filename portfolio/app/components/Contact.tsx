import Image from 'next/image'

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="pt-28 pb-8 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">

        {/* Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-charcoal leading-[1.1] tracking-tight mb-5">
          Thanks for exploring<br />my portfolio!
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mb-16">
          Let&apos;s build something amazing together.
        </p>

        {/* Chat widget */}
        <div className="space-y-4 text-left mb-14">
          {/* User bubble */}
          <div className="flex items-end gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-black text-gray-500 flex-shrink-0">
              You
            </div>
            <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-5 py-3.5 max-w-[80%]">
              <p className="text-charcoal font-medium text-base">
                Hey, how can I get in touch with you?
              </p>
            </div>
          </div>

          {/* Bhagya bubble */}
          <div className="flex items-end gap-3 justify-end">
            <div className="bg-charcoal rounded-2xl rounded-br-sm px-5 py-3.5 max-w-[80%]">
              <p className="text-white font-medium text-base">
                Hey! You can email me at{' '}
                <a
                  href="mailto:bhagyawelivita2021@gmail.com"
                  className="underline underline-offset-2 text-accent hover:text-yellow-300 transition-colors"
                >
                  bhagyawelivita2021@gmail.com
                </a>
              </p>
            </div>
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-accent flex-shrink-0">
              <Image src="/avatar.png" alt="Bhagya" width={36} height={36} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="mailto:bhagyawelivita2021@gmail.com"
            className="px-8 py-4 bg-charcoal text-white rounded-2xl font-semibold text-base hover:bg-black hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Send an Email
          </a>
          <a
            href="https://linkedin.com/in/bhagya-welivita-550966302"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-charcoal text-charcoal rounded-2xl font-semibold text-base hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg bg-white"
          >
            LinkedIn
          </a>
        </div>

        {/* Footer strip */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 font-medium">© Copyright 2026 · Bhagya Welivita</p>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/bhagya-welivita-550966302"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-accent hover:text-charcoal hover:border-accent transition-all duration-200"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Bhagi2001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-200"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
