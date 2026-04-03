import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import TechStack from '@/app/components/TechStack'
import Projects from '@/app/components/Projects'
import Showcase from '@/app/components/Showcase'
import Volunteering from '@/app/components/Volunteering'
import Contact from '@/app/components/Contact'
import ScrollReveal from '@/app/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Showcase />
        <Volunteering />
        <Contact />
      </main>
    </>
  )
}
