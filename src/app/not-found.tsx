import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Ooops, tato stránka neexistuje | Motionlabs',
    description:
        'Tvoříme unikátní weby na zakázku. Náš cíl je doručovat weby vyladěné do posledního pixelu, ovšem ne na úkor jejich výkonu. Design a rychlost jsou klíčem.',
    keywords: ['Zakázkové weby', 'Tvorba webů', 'Motion labs'],
    authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
    twitter: {
        card: 'summary_large_image',
    },
    openGraph: {
        title: 'Motionlabs - Web development',
        description: '',
        images: [''],
    },
}

const E404 = () => {
    return (
        <section className='text-white pt-9 h-screen bg-black overflow-hidden flex flex-col items-center justify-center'>
            <h1 className=' bottom-4 text-[4vw] left-4 text-center'>
                <strong>404</strong>
            </h1>
            <p>Tato stránka neexistuje</p>

            <Link
                aria-label='Navigation link to home'
                className='underline mt-4 hover:no-underline'
                href={'/'}
            >
                Jít domů
            </Link>
        </section>
    )
}

export default E404
