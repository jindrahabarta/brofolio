import React, { RefObject } from 'react'
import FooterBottom from './FooterBottom'
import Image from 'next/image'

import Lenis from 'lenis'
import Link from 'next/link'
import RetroButton from '../Buttons/RetroButton'
import MailButton from './MailButton'
import SadCat from '@/../public/images/Footer/sadcat.gif'

const Footer = ({ lenis }: { lenis: RefObject<Lenis | null> }) => {
    const scrollToTop = () => {
        if (!lenis) return
        lenis.current?.scrollTo('#home')
    }

    return (
        <footer id='footer' className='bg-black text-white pb-10 relative'>
            <section
                id='footerTop'
                className='flex flex-col sm:grid grid-cols-2 md:flex md:flex-row'
            >
                <div className='flex-1 p-4 border-white border flex flex-col justify-between'>
                    <div>
                        <div
                            className='cursor-pointer w-fit'
                            onClick={scrollToTop}
                        >
                            <Image
                                id='navLogo'
                                src={
                                    'https://daydrift.design/images/daydrift_logo.svg'
                                }
                                width={100}
                                height={50}
                                alt='Logo'
                                className='h-12 aspect-[10/5] object-cover'
                            ></Image>
                        </div>
                        <ul className='mt-12'>
                            <li>IČO: 123 23</li>
                            <li>Moravský Karlov 103</li>
                            <li>Červená Voda</li>
                        </ul>
                    </div>

                    <p className='text-right mt-12'>
                        @2025 -{' '}
                        <Link className='hover:underline' href={'/'}>
                            MotionLabs.cz
                        </Link>
                    </p>
                </div>
                <div className='flex-1 p-4 flex flex-col justify-between gap-6 border-white border bg-motionPink shadow-inner shadow-gray-800'>
                    <h2 className='text-2xl'>Napište nám</h2>

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
                        <h2 className='font-semibold'>Naše sítě</h2>

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
                    <h2 className='font-semibold'>Odkazy</h2>
                    <ul>
                        <li className='text-lg hover:underline hover:text-black w-fit'>
                            <Link href={'/'}>Uvod</Link>
                        </li>
                        <li className='text-lg hover:underline hover:text-black w-fit'>
                            <Link href={'/'}>O nas</Link>
                        </li>
                        <li className='text-lg hover:underline hover:text-black w-fit'>
                            <Link href={'/'}>Projects</Link>
                        </li>
                        <li className='text-lg hover:underline hover:text-black w-fit'>
                            <Link href={'/'}>Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <FooterBottom></FooterBottom>
        </footer>
    )
}

export default Footer
