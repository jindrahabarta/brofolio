import React from 'react'
import Image from 'next/image'

const Content = () => {
    return (
        <div
            id='aboutUsContent'
            className='h-fit flex flex-col justify-start scale-[0.6]'
            style={{ transformOrigin: 'center 15%' }}
        >
            <div className='h-screen relative'>
                <video
                    className='w-full h-screen object-cover'
                    autoPlay
                    loop
                    controls={false}
                    src='https://media.istockphoto.com/id/649431220/cs/video/k%C3%B3d-obrazovky-po%C4%8D%C3%ADta%C4%8De-z%C3%A1vadov%C3%BD-efekt-4k.mp4?s=mp4-640x640-is&k=20&c=NzqFy_RmQPW34BSKh8m6cSVK_ws-n6fDLFKtJz_m9EI='
                ></video>
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                    <h1 className='text-yellow-400 text-center '>
                        <strong>O nás</strong>
                    </h1>
                </div>
            </div>

            <div className='flex flex-col uppercase text-red-500'>
                <article className='relative w-full md:h-[120vh] flex flex-col md:flex-row'>
                    <Image
                        src='https://c.pxhere.com/photos/c2/1b/black_and_white_fun_happy_laughing_man_person_portrait_smile-913378.jpg!d'
                        alt='Jindra Habarta'
                        width={1920}
                        height={1080}
                        className='md:absolute w-full h-full object-cover'
                    />

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
                        <h1 className='aboutUsScrollSpeed md:-translate-y-72 font-league text-[12vw] leading-[80%]'>
                            Role
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
