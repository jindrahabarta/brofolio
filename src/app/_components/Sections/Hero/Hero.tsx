'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import './style.css'
import Noisy from './Noisy'
import Logo from '@/../public/brand/ml_logo.svg'

const Hero = () => {
    useEffect(() => {
        const heroTl = gsap
            .timeline({
                onComplete: function () {
                    this.restart()
                },
            })
            .set('#heroText1', {
                display: 'inline-block',
            })
            .set('#heroText2', {
                display: 'none',
            })
            .set('.heroHeadingSpan', {
                transform: 'translate(0,15px) ',
            })
            .to('.heroHeadingSpan', {
                transform: 'translate(0,0)',
                duration: 0.2,
                stagger: 0.05,
                opacity: 1,
            })
            .to('.heroHeadingSpan', {
                transform: 'translate(0,-0.1em) rotateX(-90deg)',

                duration: 0.2,
                stagger: 0.05,
            })
            .set('#heroText1', {
                display: 'none',
            })
            .set('#heroText2', {
                display: 'inline-block',
            })
            .set('.heroHeadingSpan', {
                transform: 'translate(0,15px)',
            })
            .to('.heroHeadingSpan', {
                transform: 'translate(0,0)',
                duration: 0.2,
                stagger: 0.05,
                opacity: 1,
            })
            .to('.heroHeadingSpan', {
                transform: 'translate(0,-15px)',
                duration: 0.2,
                stagger: 0.05,
                opacity: 0,
            })

        heroTl.play()
    }, [])

    return (
        <section
            id='home'
            className='relative text-white pt-9 h-screen bg-black'
        >
            {/* <Image
                src={'/images/Hero/motion_labs_fade.jpg'}
                alt={'Hero image'}
                width={1500}
                height={1000}
                className='absolute top-0 w-full h-full object-cover'
            ></Image> */}

            <div id='radial-gradient'></div>

            <Noisy />

            <div className='h-44 bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black z-10 absolute'></div>

            <main className='w-full h-full relative z-20 flex flex-col lg:flex-row-reverse lg:justify-evenly items-center justify-center lg:gap-8 px-4 sm:px-8 py-16 overflow-hidden'>
                <div className='lg:flex-1 max-w-xl'>
                    <Image
                        src={Logo}
                        alt={'logo'}
                        width={1000}
                        height={1000}
                        className='invert'
                    />
                </div>
                <div className='lg:flex-1 max-w-xl'>
                    <h1 className='text-[10vw] md:text-[5rem] flex flex-col w-[90%] lg:w-1/2'>
                        <strong>Motion Labs</strong>
                    </h1>
                    <span className='flex flex-col-reverse sm:flex-row gap-4 mt-4'>
                        <span
                            id='heroText1'
                            className=' leading-none pb-1 text-4xl md:text-6xl text-motionBlue'
                        >
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0'>
                                W
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                e
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                b
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                &nbsp;
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                d
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                e
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                v
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                e
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                l
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                o
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                p
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                m
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                e
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                n
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                t
                            </span>
                        </span>
                        <span
                            id='heroText2'
                            className='hidden leading-none pb-1 text-4xl md:text-6xl text-motionPurple'
                        >
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                M
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                o
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                t
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                i
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                o
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                n
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                &nbsp;
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                g
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                r
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                a
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                p
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                h
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                i
                            </span>
                            <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0 '>
                                c
                            </span>
                        </span>
                    </span>
                    <p className='mt-4'>Motion & Designer websites nás baví</p>
                </div>
            </main>
        </section>
    )
}

export default Hero
