import { Charm, Instrument_Serif, League_Gothic } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'
import ReactLenis from 'lenis/react'
import Navigation from '@/_components/Navigation/Navigation'
import Footer from '@/_components/Footer/Footer'

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
    return (
        <html lang='cs'>
            <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
                <body
                    className={`antialiased
                        bg-black 
                    ${instrument.variable}
                    ${league.variable}
                    ${owners.variable}
                    ${charm.variable}
                `}
                >
                    <Navigation></Navigation>

                    <main>{children}</main>

                    <Footer />
                </body>
            </ReactLenis>
        </html>
    )
}
