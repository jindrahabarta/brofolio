import { Charm, Instrument_Serif, League_Gothic } from 'next/font/google'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import '../globals.css'
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
    src: '../../_assets/fonts/owners-xxwide.ttf',
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

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params

    const t = (await import(`../../i18n/locales/${locale}/layout.json`)).default

    return {
        metadataBase: new URL('https://motionlabs.cz'),
        authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
        title: {
            default: `Motionlabs | ${t.seo.title}`,
            template: 'Motionlabs | %s',
        },
        description: t.seo.description,
        keywords: t.seo.keywords,
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
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params

    return (
        <NextIntlClientProvider>
            <html lang={locale}>
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
        </NextIntlClientProvider>
    )
}
