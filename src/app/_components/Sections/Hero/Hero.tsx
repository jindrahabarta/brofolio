'use client'
import React, { useEffect } from 'react'
// import gsap from 'gsap'
import Logo from './Logo'
import Background from './Background'

const Hero = () => {
    useEffect(() => {
        // const heroTl = gsap.timeline({
        //     onComplete: function () {
        //         this.restart()
        //     },
        // })
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
        // heroTl.play()
    }, [])

    return (
        <section
            id='home'
            className='relative text-white pt-9 h-screen bg-black overflow-hidden'
        >
            <Background />

            <main className='w-full h-full relative z-20 flex flex-col lg:flex-row-reverse justify-end gap-32 items-center lg:gap-8 px-4 sm:px-8 overflow-hidden'>
                <Logo />

                <div className='md:flex-1 flex items-end md:items-center justify-center pb-20 md:pb-0'>
                    <div className='max-w-xl'>
                        <h1 className='flex flex-col w-[90%] lg:w-1/2'>
                            <strong className='w-fit text-[10vw] md:text-[5rem]'>
                                Motion Labs
                            </strong>
                        </h1>
                        <div className='flex flex-col relative mt-4'>
                            <div
                                id='heroSubHeadig'
                                className=' pb-1 text-4xl md:text-6xl text-motionBlue'
                            >
                                <span className='heroHeadingSpan inline-block font-league'>
                                    T
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    v
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    o
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    r
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    b
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    a
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    &nbsp;
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    z
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    a
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    k
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    á
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    z
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    k
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    o
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    v
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    ý
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    ch
                                </span>

                                <span className='heroHeadingSpan inline-block font-league '>
                                    &nbsp;
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    w
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    e
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    b
                                </span>
                                <span className='heroHeadingSpan inline-block font-league '>
                                    ů
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Hero
