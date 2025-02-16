import React from 'react'
import Image from 'next/image'
import DiCaprioGifs from './DiCaprioGifs'

import JindraImg from '@/../public/images/AboutUs/JindraHabarta.webp'
import LubaImg from '@/../public/images/AboutUs/LubaHabarta.webp'
import TVGLitch from './TVGLitch'

const Content = () => {
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
                {/* <div className='absolute -translate-y-1/2 z-20 top-0 left-0 w-full flex justify-center'>
                    <div className='bg-red-500 -rotate-3 text-white px-6 py-4 shadow-[-10px_10px_0px_0px_black] hover:shadow-[-5px_5px_0px_0px_black] duration-200 hover:mt-2 hover:mr-2'>
                        <h1 className='text-[2rem]'>
                            <strong>About us</strong>
                        </h1>
                    </div>
                </div> */}
                <article
                    id='sectionJindra'
                    className='relative w-full md:h-[120vh] flex flex-col md:flex-row'
                >
                    <Image
                        src={JindraImg}
                        alt='Jindra Habarta'
                        width={1500}
                        height={2000}
                        className='w-full h-full absolute object-cover object-[0%_25%]'
                    />

                    <section className='md:w-3/5 md:relative z-10 flex flex-col gap-12 p-4 pt-16 sm:pt-12 sm:p-8'>
                        <h1 className='aboutUsScrollSpeed md:translate-y-20 flex flex-col font-league text-[14vw] sm:text-[12vw] leading-[80%]'>
                            Jindra
                            <span className='font-league indent-[2.5vw]'>
                                Habarta
                            </span>
                        </h1>

                        <span className='w-full max-w-sm'>
                            <p className='aboutUsScrollSpeed md:translate-y-44 font-instrument text-justify text-base sm:text-lg font-semibold indent-4'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dicta aut voluptatem voluptas
                                tenetur quam illum eaque expedita commodi fuga,
                                cupiditate provident veniam necessitatibus
                                facilis eius nesciunt. Ducimus veniam
                                dignissimos praesentium.
                            </p>
                            <p className='aboutUsScrollSpeed md:translate-y-72 font-instrument text-justify text-base sm:text-lg font-semibold indent-4 mt-4'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nam quasi laudantium iusto
                                saepe excepturi autem assumenda consectetur?
                            </p>
                        </span>
                    </section>

                    <section className='md:w-2/5 md:relative z-10 self-end md:self-auto flex flex-col justify-end gap-12 p-4 py-16 sm:py-4 sm:p-8'>
                        <h1 className='aboutUsScrollSpeed md:-translate-y-72 font-league text-[10vw] sm:text-[8vw] leading-[80%]'>
                            Front-end developer
                        </h1>

                        <p className='aboutUsScrollSpeed md:-translate-y-44 w-full max-w-sm font-instrument text-justify text-base sm:text-lg font-semibold indent-4'>
                            Dicta aut voluptatem voluptas tenetur quam illum
                            eaque expedita commodi fuga, cupiditate provident
                            veniam necessitatibus facilis eius nesciunt.
                        </p>
                    </section>
                </article>

                <article
                    id='aboutUsThemeSwitcher'
                    className='flex flex-col md:flex-row-reverse md:justify-end items-center'
                >
                    <section className='absolute md:relative w-full md:w-3/5 h-[-webkit-fill-available] md:h-[120vh] md:flex md:flex-col justify-end items-end aspect-square overflow-y-hidden'>
                        <div className='absolute md:relative w-full h-full flex justify-center items-center overflow-hidden'>
                            <Image
                                src={LubaImg}
                                alt='Luba Habarta'
                                width={1500}
                                height={200}
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
                            <p className='font-instrument text-justify text-lg indent-4'>
                                Dicta aut voluptatem voluptas tenetur quam illum
                                eaque expedita commodi fuga, cupiditate
                                provident veniam necessitatibus facilis eius
                                nesciunt.
                            </p>

                            <p className='font-instrument text-justify text-lg indent-4 mt-4'>
                                Dicta aut voluptatem voluptas tenetur quam illum
                                eaque expedita commodi fuga, cupiditate
                                provident veniam necessitatibus facilis eius
                                nesciunt.
                            </p>
                        </span>

                        <div className='self-start md:self-end flex flex-col-reverse gap-12'>
                            <h1 className='font-league text-[10vw] sm:text-[8vw] leading-[80%] hidden md:block'>
                                Full-stack developer
                            </h1>

                            <p className='w-full max-w-sm font-instrument text-justify text-lg indent-4'>
                                Dicta aut voluptatem voluptas tenetur quam illum
                                eaque expedita commodi fuga, cupiditate
                                provident veniam necessitatibus facilis eius
                                nesciunt.
                            </p>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default Content
