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

                <div className='self-start lg:self-center md:flex-1 flex items-end md:items-center justify-center pb-20 md:pb-0'>
                    <div className='max-w-xl flex flex-col gap-2'>
                        <h1 className='flex font-owners uppercase leading-[90%] font-black text-[13vw] md:text-[5rem] lg:text-[5rem]'>
                            Motion Labs
                        </h1>
                        <span
                            id='heroSubHeadig'
                            className='pb-1 text-4xl md:text-5xl text-white'
                        >
                            <span className='heroHeadingSpan inline-block font-league'>
                                T
                            </span>
                            <span className='heroHeadingSpan inline-block font-league'>
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
                        </span>
                        <p className='text-xl md:text-2xl'>
                            In publishing and graphic design, lorem ipsum is
                            common placeholder text used to demonstrate the
                            graphic elements of a document.
                        </p>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Hero
