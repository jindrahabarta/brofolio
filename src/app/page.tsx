import { Metadata } from 'next'
import AboutUs from './_components/Sections/AboutUs/AboutUs'
import Contact from './_components/Sections/Contact/Contact'
// import FAQ from './_components/Sections/FAQ/FAQ'
import Hero from './_components/Sections/Hero/Hero'
// import Process from './_components/Sections/Process/Process'
import Projects from './_components/Sections/Projects/Projects'
import Loader from '@/_components/Loader/Loader'
import LoaderProvider from '@/_components/Loader/LoaderProvider'
// import Technology from './_components/Sections/Technology/Technology'

export const metadata = {
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
