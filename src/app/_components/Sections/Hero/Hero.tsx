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
                        <h1 className='flex font-owners uppercase leading-[90%] font-black text-[10vw] md:text-[5rem] lg:text-[5rem]'>
                            Motion Labs
                        </h1>
                        <span
                            id='heroSubHeadig'
                            className='font-league pb-1 text-4xl md:text-5xl text-white'
                        >
                            Tvoříme unikátní weby na zakázku.
                        </span>
                        <p className='text-xl md:text-2xl'>
                            Mícháme design s výkonem. Každý web je pečlivě
                            ověřený experiment. Výsledek spojuje krásu, výkon a
                            smysl🧪.
                        </p>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Hero
