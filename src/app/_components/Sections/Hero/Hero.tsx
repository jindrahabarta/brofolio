'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Logo from './Logo'
import Background from './Background'

const Hero = () => {
    useEffect(() => {
        const heroTl = gsap
            .timeline({
                onComplete: function () {
                    this.restart()
                },
            })
            // .set('#heroText1', {
            //     display: 'inline-block',
            // })
            // .set('#heroText2', {
            //     display: 'none',
            // })
            // .set('.heroHeadingSpan', {
            //     transform: 'translate(0,15px) ',
            // })
            // .to('.heroHeadingSpan', {
            //     transform: 'translate(0,0)',
            //     duration: 0.2,
            //     stagger: 0.05,
            //     opacity: 1,
            // })
            // .to('.heroHeadingSpan', {
            //     transform: 'translate(0,-0.1em) rotateX(-90deg)',

            //     duration: 0.2,
            //     stagger: 0.05,
            // })
            // .set('#heroText1', {
            //     display: 'none',
            // })
            // .set('#heroText2', {
            //     display: 'inline-block',
            // })
            // .set('.heroHeadingSpan', {
            //     transform: 'translate(0,15px)',
            // })
            // .to('.heroHeadingSpan', {
            //     transform: 'translate(0,0)',
            //     duration: 0.2,
            //     stagger: 0.05,
            //     opacity: 1,
            // })
            // .to('.heroHeadingSpan', {
            //     transform: 'translate(0,-15px)',
            //     duration: 0.2,
            //     stagger: 0.05,
            //     opacity: 0,
            // })
            .to('.heroHeadingSpan', {
                rotateX: 90,
                translateY: -25 + '%',
                stagger: 0.05,
            })

        heroTl.play()
    }, [])

    return (
        <section
            id='home'
            className='relative text-white pt-9 h-screen bg-black overflow-hidden'
        >
            <Background />

            <main className='w-full h-full relative z-20 flex flex-col lg:flex-row-reverse justify-evenly items-center lg:gap-8 px-4 sm:px-8 overflow-hidden'>
                <Logo />

                <div className='flex-1 flex items-center justify-center'>
                    <div className='max-w-xl'>
                        <h1 className='text-[10vw] md:text-[5rem] flex flex-col w-[90%] lg:w-1/2'>
                            <strong>Motion Labs</strong>
                        </h1>
                        <div className='flex flex-col relative mt-4'>
                            <span
                                id='heroSubHeadig'
                                className='absolute top-0 left-0 leading-none pb-1 text-4xl md:text-6xl text-motionBlue'
                            >
                                <span className='heroHeadingSpan inline-block font-league'>
                                    W
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    e
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    b
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    &nbsp;
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    d
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    e
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    v
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    e
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    l
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    o
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    p
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    m
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    e
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    n
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    t
                                </span>
                            </span>

                            <span
                                id='heroText1'
                                className='absolute top-0 left-0 leading-none pb-1 text-4xl md:text-6xl text-motionBlue'
                            >
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]'>
                                    W
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    e
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    b
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    &nbsp;
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    d
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    e
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    v
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    e
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    l
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    o
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    p
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    m
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    e
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    n
                                </span>
                                <span className='heroHeadingSpan inline-block font-league translate-y-[25%]  '>
                                    t
                                </span>
                            </span>
                            {/*   <span
                                id='heroText2'
                                className='hidden leading-none pb-1 text-4xl md:text-6xl text-motionPurple'
                            >
                                <span className='heroHeadingSpan inline-block font-league translate-y-[15px] opacity-0'>
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
                            </span> */}
                        </div>
                        <p className='mt-4'>Motion weby nás baví</p>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Hero
