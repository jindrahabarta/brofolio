import AboutUs from './_components/Sections/AboutUs/AboutUs'
import Contact from './_components/Sections/Contact/Contact'
import FAQ from './_components/Sections/FAQ/FAQ'
import Hero from './_components/Sections/Hero/Hero'
import Projects from './_components/Sections/Projects/Projects'
import Technology from './_components/Sections/Technology/Technology'

export default function Home() {
    return (
        <>
            <Hero />

            <AboutUs />
            <Projects />
            <Technology />
            {/* <FAQ /> */}
            <Contact />
        </>
    )
}
