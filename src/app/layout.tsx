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
import { useEffect, useRef } from 'react'
import gsapAnimationsInit from '@/_animations/gsapAnimationsInit'
import { usePathname } from 'next/navigation'

const source_serif_4 = Source_Serif_4({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--source-serif',
})
const charm = Charm({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--charm',
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

    useEffect(() => {
        //Lenis
        lenis.current = new Lenis()
        function raf(time: number) {
            if (!lenis.current) return

            lenis.current.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        gsapAnimationsInit(path)
    }, [path])

    return (
        <html lang='cs'>
            <body
                className={`antialiased
                    ${charm.variable}
                    ${owners.variable}
                    ${source_serif_4.variable}
                    ${emberly_regular.variable}
                    ${instrument.variable}
                    ${league.variable}
                `}
            >
                <Navigation lenis={lenis}></Navigation>

                <main>{children}</main>

                <Footer />
            </body>
        </html>
    )
}
