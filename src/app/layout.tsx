'use client'
import Lenis from 'lenis'
import Navigation from '@/_components/Navigation/Navigation'
import { Source_Serif_4, Charm } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Footer from '@/_components/Footer/Footer'
import { useEffect } from 'react'

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    useEffect(() => {
        //Inicializace lenisu
        const lenis = new Lenis()
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])

    return (
        <html lang='cs'>
            <body
                className={`antialiased ${charm.variable} ${owners.variable} ${source_serif_4.variable}`}
            >
                <Navigation></Navigation>

                <main>{children}</main>

                <Footer />
            </body>
        </html>
    )
}
