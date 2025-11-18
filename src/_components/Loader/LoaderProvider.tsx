'use client'
import React, { useState } from 'react'
import Loader from './Loader'
import Hero from '@/app/_components/Sections/Hero/Hero'
import AboutUs from '@/app/_components/Sections/AboutUs/AboutUs'
import Projects from '@/app/_components/Sections/Projects/Projects'
import Contact from '@/app/_components/Sections/Contact/Contact'

const LoaderProvider = () => {
    const [logoLoaded, setLogoLoaded] = useState(false)
    const [tvLoaded, setTvLoaded] = useState(false)
    const [about1Loaded, setAbout1Loaded] = useState(false)
    const [about2Loaded, setAbout2Loaded] = useState(false)

    const handleLogoLoaded = () => setLogoLoaded(true)
    const handleTvLoaded = () => setTvLoaded(true)
    const handleAbout1Loaded = () => setAbout1Loaded(true)
    const handleAbout2Loaded = () => setAbout2Loaded(true)

    return (
        <>
            <Loader
                loaded={logoLoaded && tvLoaded && about1Loaded && about2Loaded}
            />
            <Hero onLogoLoad={handleLogoLoaded} />
            <AboutUs
                onTvLoad={handleTvLoaded}
                onAbout1Load={handleAbout1Loaded}
                onAbout2Load={handleAbout2Loaded}
            />
            <Projects />
            {/* <Technology /> */}
            {/* {/* <Process /> */}
            {/* <FAQ /> */}
            <Contact />
        </>
    )
}

export default LoaderProvider
