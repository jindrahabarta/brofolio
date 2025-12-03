import { Link } from '@/i18n/navigation'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params

    const t = (await import(`../../../i18n/locales/${locale}/layout.json`))
        .default

    return {
        title: `Ooops, ${t.notFound.text}`,
        description: t.seo.description,
        keywords: t.seo.keywords,
        authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
        twitter: {
            card: 'summary_large_image',
        },
        openGraph: {
            title: 'Motionlabs - Web development',
            description: t.seo.description,
            images: '/brand/open-graph.png',
        },
        robots: {
            index: false,
            follow: false,
        },
    }
}

const PageNotFound = () => {
    const t = useTranslations('notFound')

    return (
        <section className='text-white pt-9 h-screen bg-black overflow-hidden flex flex-col items-center justify-center'>
            <h1 className=' bottom-4 text-[4vw] left-4 text-center'>
                <strong>404</strong>
            </h1>
            <p>{t('text')}</p>

            <Link
                aria-label='Navigation link to home'
                className='underline mt-4 hover:no-underline'
                href={'/'}
            >
                {t('button')}
            </Link>
        </section>
    )
}

export default PageNotFound
