import { Metadata } from 'next'
import LoaderProvider from '@/_components/Loader/LoaderProvider'

export const metadata: Metadata = {
    title: {
        default: 'Motionlabs',
        template: '%s | Motionlabs',
    },
    authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
    description:
        'Tvoříme unikátní weby na zakázku. Náš cíl je doručovat weby vyladěné do posledního pixelu, ovšem ne na úkor jejich výkonu. Design a rychlost jsou klíčem.',
    keywords: ['Zakázkové weby', 'Tvorba webů', 'Motion labs'],
    twitter: {
        card: 'summary_large_image',
    },
    openGraph: {
        title: 'Motionlabs - Web development',
        description: '',
        images: [''],
    },
}

export default function Home() {
    return <LoaderProvider />
}
