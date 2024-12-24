'use client'
import Lenis from 'lenis'
import Navigation from '@/_components/Navigation/Navigation'
import { Source_Serif_4, Charm } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Footer from '@/_components/Footer/Footer'
import { useEffect, useRef } from 'react'

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
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
    }, [])

    return (
        <html lang='cs'>
            <body
                className={`antialiased ${charm.variable} ${owners.variable} ${source_serif_4.variable} ${emberly_regular.variable}`}
            >
                <Navigation lenis={lenis}></Navigation>

                <main>{children}</main>

                <Footer />
            </body>
        </html>
    )
}
