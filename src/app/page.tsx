'use client'

import React, { useState } from 'react'
// import { Metadata } from 'next'
import AboutUs from './_components/Sections/AboutUs/AboutUs'
import Contact from './_components/Sections/Contact/Contact'
// import FAQ from './_components/Sections/FAQ/FAQ'
import Hero from './_components/Sections/Hero/Hero'
// import Process from './_components/Sections/Process/Process'
import Projects from './_components/Sections/Projects/Projects'
import Loader from '@/_components/Loader/Loader'
// import Technology from './_components/Sections/Technology/Technology'

// TODO:
// export const metadata: Metadata = {
//     title: {
//         default: 'Motionlabs',
//         template: '%s | Motionlabs',
//     },
//     authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
//     description: '',
//     keywords: [],
//     twitter: {
//         card: 'summary_large_image',
//     },
//     openGraph: {
//         title: 'Motionlabs - Web development',
//         description: '',
//         images: [''],
//     },
// }

export default function Home() {
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
