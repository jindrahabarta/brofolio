'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

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
            className='text-white pt-9 h-screen bg-black relative '
        >
            <Image
                src={'/images/Hero/motion_labs_fade.jpg'}
                alt={'Hero image'}
                width={1500}
                height={1000}
                className='absolute top-0 w-full h-full object-cover'
            ></Image>

            <div className='h-44 bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black z-10 absolute '></div>

            <main className='w-full h-full overflow-hidden flex flex-col justify-center items-center z-20 relative'>
                <h1 className='relative text-[10vw] lg:text-[4.5vw] bottom-4 left-4 flex flex-col w-[90%] lg:w-1/2'>
                    <span>
                        <strong>Motion</strong>
                    </span>

                    <span className='self-end flex flex-col-reverse sm:flex-row gap-4 items-end'>
                        <span
                            id='heroText1'
                            className=' leading-none pb-1 text-4xl md:text-6xl text-motionGreen'
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
                            className='hidden leading-none pb-1 text-4xl md:text-6xl text-motionGrape'
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
                        <strong>Labs</strong>
                    </span>

                    {/* <ul className='flex gap-10 text-2xl'>
                        <li className='absolute -top-20 -left-5'>Vývoj webů</li>
                        <li className='absolute -bottom-16 -left-20'>
                            Motion Graphic
                        </li>
                        <li className='absolute -bottom-16 -right-5'>
                            Motion Graphic
                        </li>
                        <li className='absolute -bottom-40 right-96'>
                            Motion Graphic
                        </li>
                        <li className='absolute -top-20 -right-20'>
                            Motion Graphic
                        </li>
                        <li className='absolute -top-52 right-80'>
                            Motion Graphic
                        </li>
                        <li className='absolute -top-28 left-60'>
                            Motion Graphic
                        </li>
                        <li className='absolute -top-10 right-56'>
                            Motion Graphic
                        </li>
                    </ul> */}
                </h1>

                {/* <h2 className='font-league '>asdfjasdlfjl</h2> */}
            </main>
        </section>
    )
}

export default Hero
