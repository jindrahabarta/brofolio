import React, { RefObject } from 'react'
import FooterBottom from './FooterBottom'
import Image from 'next/image'

import Lenis from 'lenis'
import Link from 'next/link'

const Footer = ({ lenis }: { lenis: RefObject<Lenis | null> }) => {
    const scrollToTop = () => {
        if (!lenis) return
        lenis.current?.scrollTo('#home')
    }

    return (
        <footer id='footer' className='bg-black text-white pb-10'>
            <section className='flex'>
                <div className='flex-1 p-4 border-white border flex flex-col justify-between'>
                    <div>
                        <div className='cursor-pointer' onClick={scrollToTop}>
                            <Image
                                id='navLogo'
                                src={
                                    'https://daydrift.design/images/daydrift_logo.svg'
                                }
                                width={100}
                                height={100}
                                alt='Logo'
                            ></Image>
                        </div>
                        <ul className='mt-12'>
                            <li>Ic: 123 23</li>
                            <li>Moravsky Karlov 103</li>
                            <li>Cervena Voda</li>
                        </ul>
                    </div>

                    <p className='text-right mt-12'>@copyright MotionLabs.cz</p>
                </div>
                <div className='flex-1 border-white border bg-motionPink'></div>
                <div className='border-white border relative group'>
                    <div className='absolute w-full h-full'>
                        <Image
                            alt='Follow Us Gif'
                            src={
                                'https://i.pinimg.com/originals/9a/3c/3f/9a3c3fb5f73822af8514df07f6676392.gif'
                            }
                            width={300}
                            height={400}
                            className='absolute w-full h-full object-cover'
                        ></Image>
                        <div className='absolute w-full h-full bg-black/20 group-hover:bg-black/100'></div>
                    </div>
                    <div className='p-4 h-full flex flex-col justify-between relative'>
                        <h2>Naše sítě</h2>

                        <ul>
                            <li>
                                <Link href={'/'}>
                                    <button className='px-4 py-2 w-full text-center bg-gradient-to-b from-orange-600 to-yellow-400 rounded-full shadow-inner shadow-yellow-600 hover:to-orange-600 hover:from-yellow-400 hover:shadow-orange-700 hover:underline'>
                                        ig: @motionlabs
                                    </button>
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link href={'/'}>
                                    <button className='px-4 py-2 w-full text-center bg-gradient-to-b from-orange-600 to-yellow-400 rounded-full shadow-inner shadow-yellow-600 hover:to-orange-600 hover:from-yellow-400 hover:shadow-orange-700 hover:underline'>
                                        fb: @motionlabs
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='border-white border p-4 flex flex-col justify-between bg-motionOrange shadow-inner shadow-gray-800'>
                    <h2>Odkazy</h2>
                    <ul>
                        <li className=' hover:underline hover:text-black'>
                            <Link href={'/'}>Uvod</Link>
                        </li>
                        <li className=' hover:underline hover:text-black'>
                            <Link href={'/'}>O nas</Link>
                        </li>
                        <li className=' hover:underline hover:text-black'>
                            <Link href={'/'}>Projects</Link>
                        </li>
                        <li className=' hover:underline hover:text-black '>
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
