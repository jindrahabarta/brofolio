'use client'

import Lenis from 'lenis'
import Navigation from '@/_components/Navigation/Navigation'
import {
    Source_Serif_4,
    Charm,
    Instrument_Serif,
    League_Gothic,
} from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'
import Footer from '@/_components/Footer/Footer'
import { useEffect, useRef, useState } from 'react'
import gsapAnimationsInit from '@/_animations/gsapAnimationsInit'
import { usePathname } from 'next/navigation'
import Loader from '@/_components/Loader/Loader'

const source_serif_4 = Source_Serif_4({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--source-serif',
})
const charm = Charm({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--charm',
    display: 'swap',
})
const owners = localFont({
    src: '../_assets/fonts/owners-xxwide.ttf',
    variable: '--owners',
})
const emberly_regular = localFont({
    src: '../_assets/fonts/Emberly-Regular.otf',
    variable: '--emberly-regular',
})
const instrument = Instrument_Serif({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--instrument',
})
const league = League_Gothic({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--league',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const path = usePathname()
    const lenis = useRef<null | Lenis>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //Lenis
        lenis.current = new Lenis()
        lenis.current.stop()

        function raf(time: number) {
            if (!lenis.current) return

            lenis.current.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        gsapAnimationsInit(path)

        setTimeout(() => {
            if (lenis.current) {
                lenis.current.start()
            }
            setLoading(false)
        }, 3000)
    }, [path])

    return (
        <html lang='cs'>
            <body
                className={`antialiased
                    bg-black 
                    ${charm.variable}
                    ${owners.variable}
                    ${source_serif_4.variable}
                    ${emberly_regular.variable}
                    ${instrument.variable}
                    ${league.variable}
                `}
            >
                <Navigation lenis={lenis}></Navigation>

                <Loader loading={loading} />

                <main>{children}</main>

                <Footer lenis={lenis} />
            </body>
        </html>
    )
}
