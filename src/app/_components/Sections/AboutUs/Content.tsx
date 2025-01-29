import React from 'react'
import Image from 'next/image'

import JindraImg from '@/../public/images/AboutUs/JindraHabarta.jpg'

const Content = () => {
    return (
        <div
            id='aboutUsContent'
            className='h-fit flex flex-col justify-start scale-[0.6] '
            style={{ transformOrigin: 'center 15%' }}
        >
            <div className='h-screen relative bg-black'>
                <video
                    className='w-full h-screen object-cover opacity-80'
                    autoPlay
                    loop
                    controls={false}
                    muted
                    src={'/images/AboutUs/video.mp4'}
                ></video>
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                    <h1 className='text-yellow-400 text-[3vw] text-center '>
                        <strong>_About_us</strong>
                    </h1>
                </div>
            </div>

            <div className='flex flex-col uppercase text-red-500'>
                <article className='relative w-full md:h-[120vh] flex flex-col md:flex-row'>
                    <div className='md:absolute w-full h-full'>
                        <div className='bg-black/50 absolute top-0 left-0 w-full h-full'></div>
                        <Image
                            src={JindraImg}
                            alt='Jindra Habarta'
                            width={1920}
                            height={1080}
                            className=' w-full h-full object-cover object-[0%_25%]'
                        />
                    </div>

                    <section className='md:w-3/5 md:relative z-10 flex flex-col gap-12 p-4 sm:p-8'>
                        <h1 className='aboutUsScrollSpeed md:translate-y-20 flex flex-col font-league text-[12vw] leading-[80%]'>
                            Jindra
                            <span className='font-league indent-[2.5vw]'>
                                Habarta
                            </span>
                        </h1>

                        <span className='w-full max-w-sm'>
                            <p className='aboutUsScrollSpeed md:translate-y-44 font-instrument text-justify text-lg indent-4'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dicta aut voluptatem voluptas
                                tenetur quam illum eaque expedita commodi fuga,
                                cupiditate provident veniam necessitatibus
                                facilis eius nesciunt. Ducimus veniam
                                dignissimos praesentium.
                            </p>
                            <p className='aboutUsScrollSpeed md:translate-y-72 font-instrument text-justify text-lg indent-4 mt-4'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nam quasi laudantium iusto
                                saepe excepturi autem assumenda consectetur?
                            </p>
                        </span>
                    </section>

                    <section className='md:w-2/5 md:relative z-10 self-end md:self-auto flex flex-col justify-end gap-12 p-4 sm:p-8 overflow-y-hidden'>
                        <h1 className='aboutUsScrollSpeed md:-translate-y-72 font-league text-[8vw] leading-[80%]'>
                            Front-end developer
                        </h1>

                        <p className='aboutUsScrollSpeed md:-translate-y-44 w-full max-w-sm font-instrument text-justify text-lg indent-4'>
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
                    <section className='relative w-full md:w-3/5 md:h-[120vh] flex flex-col justify-end items-end aspect-square overflow-y-hidden'>
                        <div className='md:absolute w-full h-full flex justify-center items-center overflow-hidden'>
                            <Image
                                src='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                                alt='Luba Habarta'
                                width={1240}
                                height={1240}
                                className='w-full h-[calc(100%+18rem)] object-cover aboutUsScrollSpeed md:translate-y-72'
                            />
                        </div>

                        <div className='md:relative z-10 flex flex-col p-4 sm:p-8'>
                            <h1 className='flex flex-col font-league uppercase text-right text-[12vw] leading-[80%] text-red-500'>
                                <span className='font-league aboutUsScrollSpeed md:-translate-y-96'>
                                    Luba
                                </span>
                                <span className='font-league indent-[-2.5vw] aboutUsScrollSpeed md:-translate-y-32'>
                                    Habarta
                                </span>
                            </h1>
                        </div>
                    </section>

                    <section className='w-full md:flex-1 flex flex-col items-center justify-center gap-12 overflow-hidden p-4 sm:p-8'>
                        <span className='w-full max-w-sm self-end md:self-auto'>
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

                        <div className='self-start md:self-auto flex flex-col gap-12 '>
                            <h1 className='font-league text-[12vw] leading-[80%]'>
                                Role
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
