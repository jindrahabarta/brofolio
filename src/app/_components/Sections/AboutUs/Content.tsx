import React from 'react'
import Image from 'next/image'
import DiCaprioGifs from './DiCaprioGifs'

import JindraImg from '@/../public/images/AboutUs/JindraHabarta.webp'
import LubaImg from '@/../public/images/AboutUs/LubaHabarta.webp'
import TVGLitch from './TVGLitch'
import Link from 'next/link'

const Content: React.FC<{
    onAbout1Load: () => void
    onAbout2Load: () => void
}> = ({ onAbout1Load, onAbout2Load }) => {
    return (
        <div
            id='aboutUsContent'
            className='h-fit flex flex-col justify-start sm:scale-[0.6] origin-[center_19%] sm:origin-[center_15%]'
        >
            <div className='h-screen relative bg-black overflow-hidden flex justify-center'>
                <DiCaprioGifs></DiCaprioGifs>

                <TVGLitch></TVGLitch>
            </div>

            <div className='flex flex-col uppercase text-red-500 relative'>
                <article
                    id='sectionJindra'
                    className='relative w-full md:h-[120vh] flex flex-col md:flex-row'
                >
                    <Image
                        src={JindraImg}
                        alt='Jindra Habarta'
                        width={1500}
                        height={2000}
                        onLoad={onAbout1Load}
                        priority
                        className='w-full h-full absolute object-cover object-[0%_25%]'
                    />

                    <section className='md:w-3/5 md:relative z-10 flex flex-col gap-12 p-4 pt-16 sm:pt-12 sm:p-8 select-text'>
                        <h1 className='aboutUsScrollSpeed md:translate-y-20 flex flex-col font-league text-[14vw] sm:text-[12vw] leading-[80%]'>
                            Jindra
                            <span className='font-league indent-[2.5vw]'>
                                Habarta
                            </span>
                        </h1>

                        <span className='w-full max-w-sm'>
                            <p className='aboutUsScrollSpeed md:translate-y-44 font-instrument text-justify text-base sm:text-xl indent-4 sm:bg-stone-800/50 sm:backdrop-blur-sm sm:py-6 sm:px-8'>
                                Kreativec a tvůrce. Kromě projektu MotionLabs se
                                věnuji své vlastní značce{' '}
                                <Link
                                    className='font-semibold hover:underline'
                                    target='_blank'
                                    href={
                                        'https://www.instagram.com/drippy_rugs'
                                    }
                                >
                                    @drippy_rugs
                                </Link>
                                . Jelikož mě neskutečně naplňuje tvořit
                                originální, neotřelé a &quot;cool&quot; věci,
                                toto je skvělá forma, jak ukojit své potřeby.
                            </p>
                            <p className='aboutUsScrollSpeed md:translate-y-72 font-instrument text-justify text-base sm:text-xl indent-4 mt-4 sm:bg-stone-800/50 sm:backdrop-blur-sm sm:py-6 sm:px-8'>
                                Tento zápal bych chtěl projevit i v tomto
                                projektu a doufám, že se nám společně podaří
                                naplnit tvé očekávání.
                            </p>
                        </span>
                    </section>

                    <section className='md:w-2/5 md:relative z-10 self-end md:self-auto flex flex-col justify-end gap-12 p-4 py-16 sm:py-4 sm:p-8 select-text'>
                        <h1 className='aboutUsScrollSpeed md:-translate-y-72 font-league text-[10vw] sm:text-[8vw] leading-[80%]'>
                            Front-end developer
                        </h1>

                        <p className='aboutUsScrollSpeed md:-translate-y-44 w-full max-w-sm font-instrument text-justify text-base sm:text-xl indent-4 sm:bg-stone-800/50 sm:backdrop-blur-sm sm:py-6 sm:px-8'>
                            Nudí tě standardy ve webové tvorbě? Chceš pro sebe
                            něco víc, než kam ti dovolí jít nudná šablona?
                            Pokusím se, tvé nápady zhmotnit v realitu!
                        </p>
                    </section>
                </article>

                <article
                    id='aboutUsThemeSwitcher'
                    className='relative flex flex-col md:flex-row-reverse md:justify-end items-center select-text'
                >
                    <section className='absolute md:relative w-full md:w-3/5 h-full md:h-[120vh] md:flex md:flex-col justify-end items-end aspect-square overflow-y-hidden'>
                        <div className='absolute md:relative w-full h-full flex justify-center items-center overflow-hidden'>
                            <Image
                                src={LubaImg}
                                alt='Luba Habarta'
                                width={1500}
                                height={200}
                                onLoad={onAbout2Load}
                                priority
                                className='w-full h-full md:h-[calc(100%+18rem)] object-cover aboutUsScrollSpeed md:translate-y-72'
                            />
                        </div>

                        <div className='relative md:absolute z-10 flex flex-col p-4 md:p-8'>
                            <h1 className='flex flex-col font-league uppercase md:text-right text-[14vw] md:text-[12vw] leading-[80%] text-red-500'>
                                <span className='font-league aboutUsScrollSpeed md:-translate-y-96'>
                                    Luba
                                </span>
                                <span className='font-league indent-[2.5vw] md:indent-[-2.5vw] aboutUsScrollSpeed md:-translate-y-32'>
                                    Habarta
                                </span>
                            </h1>
                        </div>
                    </section>

                    <section className='relative w-full md:flex-1 flex flex-col-reverse md:items-center justify-center gap-12 overflow-hidden p-4 pb-10 pt-[35vw] md:p-8'>
                        <span className='w-full max-w-md self-end md:self-start'>
                            <h1 className='font-league text-[10vw] md:text-[8vw] leading-[80%] md:hidden pb-10'>
                                Full-stack developer
                            </h1>
                            <p className='font-instrument text-justify text-base sm:text-xl indent-4'>
                                A kdo vlastně jsem? Trochu plavec, trochu
                                kytarista, trochu umělec… Ale hlavně webař a
                                programátor. A protože nás s bráchou oba baví
                                nestandardní, animované a umělecké weby,
                                rozhodli jsme se vytvořit Motion Labs, kde
                                chceme tyto hodnoty ztvárnit.
                            </p>
                        </span>

                        <div className='self-start md:self-end flex flex-col-reverse gap-12'>
                            <h1 className='font-league text-[10vw] sm:text-[8vw] leading-[80%] hidden md:block'>
                                Full-stack developer
                            </h1>

                            <p className='w-full max-w-sm font-instrument text-justify text-base sm:text-xl indent-4'>
                                K technologiím mě to táhlo už od malička.
                                Postupem času jsem se dostal k programování a
                                tvorbě vlastních projektů.
                            </p>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default Content
