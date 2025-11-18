'use client'
import React, { useEffect } from 'react'
import FooterBottom from './FooterBottom'
import Image from 'next/image'
import Link from 'next/link'
import RetroButton from '../Buttons/RetroButton'
import MailButton from './MailButton'
import SadCat from '@/../public/images/Footer/sadcat.gif'
import { useLenis } from 'lenis/react'
import gsap from 'gsap'
import { usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const lenis = useLenis()
    const path = usePathname()
    const t = useTranslations('footer')
    const t2 = useTranslations('navigation.links')

    const scrollTo = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        id: string
    ) => {
        if (!lenis) return

        if (path === '/') {
            e.preventDefault()
            lenis?.scrollTo(id)
        }
    }

    useEffect(() => {
        gsap.to('.footerHeading', {
            translateY: 0,
            stagger: 0.2,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '#footer',
                start: 'bottom-=50px bottom',
                end: 'bottom-=50px bottom',
                toggleActions: 'play none none reverse',
            },
        })
    }, [])

    return (
        <footer id='footer' className='bg-black text-white pb-10 relative'>
            <section
                id='footerTop'
                className='flex flex-col sm:grid grid-cols-2 md:flex md:flex-row'
            >
                <div className='flex-1 p-4 border-white border flex flex-col justify-between'>
                    <div>
                        <div className='z-50 select-none pointer-events-auto flex'>
                            <Link
                                id='navLogo'
                                aria-label='Motion labs logo'
                                href='/#home'
                                className='inline-block w-16 sm:w-20 aspect-[8/5] origin-left'
                                onClick={(e) => scrollTo(e, '#home')}
                            ></Link>
                        </div>

                        <ul className='mt-12 text-lg flex flex-col'>
                            <li>IČO: 22371575</li>
                            <li>Moravský Karlov 103</li>
                            <li>Červená Voda - Czech Republic</li>
                        </ul>
                    </div>

                    <p className='text-right mt-12'>
                        @2025 -{' '}
                        <Link
                            aria-label='MotionLabs Link'
                            className='hover:underline text-lg'
                            href={'/#home'}
                            onClick={(e) => scrollTo(e, '#home')}
                        >
                            MotionLabs.cz
                        </Link>
                    </p>
                </div>
                <div className='flex-1 p-4 flex flex-col justify-between gap-6 border-white border bg-motionPink shadow-inner shadow-gray-800'>
                    <h2 className='text-2xl'>{t('textUs')}</h2>

                    <MailButton></MailButton>
                </div>
                <div className='border-white border relative group '>
                    <div className='absolute w-full h-full'>
                        <Image
                            alt='Follow Us Gif'
                            src={SadCat}
                            unoptimized
                            width={300}
                            height={400}
                            className='absolute w-full h-full object-cover sm:group-hover:hidden'
                        ></Image>
                        <div className='absolute w-full h-full bg-black/20'></div>
                    </div>
                    <div className='p-4 h-full flex flex-col gap-20 justify-between relative'>
                        <h2 className='font-semibold'>{t('ourSocials')}</h2>

                        <ul>
                            <li>
                                <RetroButton
                                    link='/'
                                    text='ig: @MotionLabs'
                                    blank
                                ></RetroButton>
                            </li>
                            <li className='mt-2'>
                                <RetroButton
                                    link='/'
                                    text='fb: Motion labs'
                                    blank
                                ></RetroButton>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='border-white border p-4 flex flex-col gap-8 justify-between bg-motionOrange shadow-inner shadow-gray-800'>
                    <h2 className='font-semibold'>{t('links')}</h2>
                    <ul>
                        <li className='text-lg hover:underline hover:text-black w-fit'>
                            <Link
                                aria-label='Navigation link to home'
                                href={'/#home'}
                                onClick={(e) => scrollTo(e, '#home')}
                            >
                                {t2('hero')}
                            </Link>
                        </li>
                        <li className='text-lg hover:underline hover:text-black w-fit'>
                            <Link
                                href={'/#about'}
                                aria-label='Navigation link to about us'
                                onClick={(e) => scrollTo(e, '#about')}
                            >
                                {t2('about')}
                            </Link>
                        </li>
                        <li className='text-lg hover:underline hover:text-black w-fit'>
                            <Link
                                href={'/#projects'}
                                aria-label='Navigation link to projects'
                                onClick={(e) => scrollTo(e, '#projects')}
                            >
                                {t2('projects')}
                            </Link>
                        </li>
                        <li className='text-lg hover:underline hover:text-black w-fit'>
                            <Link
                                href={'/#contact'}
                                aria-label='Navigation link to contact'
                                onClick={(e) => scrollTo(e, '#contact')}
                            >
                                {t2('contact')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <FooterBottom></FooterBottom>
        </footer>
    )
}

export default Footer
