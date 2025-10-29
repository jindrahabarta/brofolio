import { Charm, Instrument_Serif, League_Gothic } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'
import ReactLenis from 'lenis/react'
import Navigation from '@/_components/Navigation/Navigation'
import Footer from '@/_components/Footer/Footer'
import { Metadata } from 'next'

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

export const metadata: Metadata = {
    metadataBase: new URL('https://motionlabs.cz'),
    title: {
        default: 'Motionlabs',
        template: 'Motionlabs | %s',
    },
    authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
    description:
        'V MotionLabs vyvíjíme weby v laboratorních podmínkách. Každý detail testujeme, dokud nevznikne výsledek, který spojuje design, výkon a smysl.',
    keywords: [
        'Tvorba webů',
        'Zakázkové weby',
        'MotionLabs',
        'Moderní weby',
        'Tvorba webových stránek',
        'Webové aplikace',
        'Vývoj webových aplikací',
        'Responzivní weby',
        'Rychlé weby',
        'Profesionální weby',
        'Design webu',
        'Webdesign',
        'UI/UX design',
        'Optimalizace webu',
        'SEO optimalizace',
        'Tvorba e-shopů',
        'Firemní weby',
        'Portfolio weby',
        'Landing page',
        'Web na míru',
        'Tvorba webu na zakázku',
        'Frontend vývoj',
        'Next.js vývoj',
        'React vývoj',
        'Web development',
        'Vývoj na míru',
        'Digitální laboratoř',
        'Laboratoř na weby',
        'Inovativní weby',
        'Moderní design webu',
        'Výkon a rychlost webu',
        'Tvorba webu Nový Jičín',
        'Webové studio',
        'Kreativní studio',
        'Vývoj webových řešení',
    ],
    twitter: {
        card: 'summary_large_image',
    },
    openGraph: {
        title: 'Motionlabs - Web development',
        description:
            'V MotionLabs vyvíjíme weby v laboratorních podmínkách. Každý detail testujeme, dokud nevznikne výsledek, který spojuje design, výkon a smysl.',
        images: '/brand/open-graph.png',
    },
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/brand/favicon-dark.ico',
                href: '/brand/favicon-dark.ico',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/brand/favicon-light.ico',
                href: '/brand/favicon-light.ico',
            },
        ],
        apple: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/brand/apple-touch-icon-dark.png',
                href: '/brand/apple-touch-icon-dark.png',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/brand/apple-touch-icon-light.png',
                href: '/brand/apple-touch-icon-light.png',
            },
        ],
    },
}

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
