import { Metadata } from 'next'
import LoaderProvider from '@/_components/Loader/LoaderProvider'

export const metadata: Metadata = {
    title: {
        default: 'Motionlabs',
        template: '%s | Motionlabs',
    },
    authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
    description: '',
    keywords: [],
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
