import React from 'react'
import Logo from './Logo'
import Background from './Background'

const Hero: React.FC<{ onLogoLoad: () => void }> = ({ onLogoLoad }) => {
    return (
        <section
            id='home'
            className='relative flex justify-center text-white pt-9 h-screen bg-black overflow-hidden'
        >
            <Background />

            <main className='w-full h-full relative z-20 flex flex-col lg:flex-row-reverse gap-32 items-center justify-evenly lg:gap-8 px-4 sm:px-8'>
                <Logo onLogoLoad={onLogoLoad} />

                <div className='md:flex-1 flex items-end md:items-center justify-center pb-20 md:pb-0'>
                    <div className='max-w-xl'>
                        <h1 className='flex font-morn leading-[80%] font-black text-[10vw] md:text-[8rem] lg:text-[10rem]'>
                            Motion Labs
                        </h1>
                        <div className='flex flex-col relative'>
                            <div
                                id='heroSubHeadig'
                                className='pb-1 text-4xl md:text-5xl text-gray-300'
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
