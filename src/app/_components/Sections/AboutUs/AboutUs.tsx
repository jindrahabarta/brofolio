import React from 'react'
import Image from 'next/image'

import BackgroundImg from '@/../public/images/AboutUs/bg.png'
import TVImg from '@/../public/images/AboutUs/bg-tv2.png'

import TVFillImg from '@/../public/images/AboutUs/TVfill.png'

const AboutUs = () => {
    return (
        <section id='aboutus' className='bg-black relative select-none'>
            <div className='h-44 bg-gradient-to-b from-0% from-black to-[rgba(223, 232, 233, 0.2)] absolute z-10 w-full'></div>

            <div className='h-[200vh] w-full'>
                <div className='h-screen sticky top-0 overflow-hidden'>
                    <div className='relative w-full h-screen'>
                        <div className='absolute w-full h-full flex justify-center items-center'>
                            <div
                                id='aboutUs-TvFill'
                                className='w-full h-screen z-50 opacity-50 scale-[0.4] aspect-[4/3] flex flex-col relative'
                            >
                                <div className='h-screen'>
                                    <video
                                        className='w-full h-screen object-cover'
                                        autoPlay
                                        loop
                                        src='https://media.istockphoto.com/id/649431220/cs/video/k%C3%B3d-obrazovky-po%C4%8D%C3%ADta%C4%8De-z%C3%A1vadov%C3%BD-efekt-4k.mp4?s=mp4-640x640-is&k=20&c=NzqFy_RmQPW34BSKh8m6cSVK_ws-n6fDLFKtJz_m9EI='
                                    ></video>
                                </div>

                                <div className='h-fit bg-yellow-400'>
                                    <h1 className='text-center text-amber-500'>
                                        <strong>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Illo
                                            nemo recusandae magni corporis? Non
                                            illum tenetur quisquam, ipsum
                                            voluptatum, consequuntur deleniti
                                            sed obcaecati praesentium provident
                                            corporis repellendus esse. Illo,
                                            corporis!
                                        </strong>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <Image
                            id='aboutus-bg'
                            src={BackgroundImg}
                            width={1200}
                            height={1000}
                            alt='Television image'
                            className='aboutUs-scale w-full h-full object-cover object-center absolute'
                        ></Image>

                        <div
                            id='aboutus-tv'
                            className='aboutUs-scale w-full h-full absolute z-10'
                        >
                            <Image
                                src={TVImg}
                                width={1200}
                                height={1000}
                                alt='Television image'
                                className='w-full h-full object-cover object-center'
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col bg-gray-200 uppercase text-red-500'>
                <article className='relative w-full md:h-[120vh] flex flex-col md:flex-row aspect-square'>
                    <Image
                        src={
                            'https://c.pxhere.com/photos/c2/1b/black_and_white_fun_happy_laughing_man_person_portrait_smile-913378.jpg!d'
                        }
                        alt={'Jindra Habarta'}
                        width={1920}
                        height={1080}
                        className='md:absolute w-full h-full object-cover'
                    />

                    <section className='md:w-3/5 md:relative z-10 flex flex-col gap-16 p-4 sm:p-8'>
                        <h1 className='flex flex-col font-league text-[12vw] leading-[80%]'>
                            Jindra
                            <span className='font-league indent-[2.5vw]'>
                                Habarta
                            </span>
                        </h1>

                        <span className='w-full max-w-sm'>
                            <p className='font-instrument text-justify text-lg indent-4'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dicta aut voluptatem voluptas
                                tenetur quam illum eaque expedita commodi fuga,
                                cupiditate provident veniam necessitatibus
                                facilis eius nesciunt. Ducimus veniam
                                dignissimos praesentium.
                            </p>
                            <p className='font-instrument text-justify text-lg indent-4 mt-4'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nam quasi laudantium iusto
                                saepe excepturi autem assumenda consectetur?
                            </p>
                        </span>
                    </section>

                    <section className='md:w-2/5 md:relative z-10 flex flex-col justify-end gap-16 p-4 sm:p-8'>
                        <h1 className='font-league text-[12vw] leading-[80%]'>
                            Role
                        </h1>

                        <span className='w-full max-w-sm'>
                            <p className='font-instrument text-justify text-lg indent-4'>
                                Dicta aut voluptatem voluptas tenetur quam illum
                                eaque expedita commodi fuga, cupiditate
                                provident veniam necessitatibus facilis eius
                                nesciunt.
                            </p>
                        </span>
                    </section>
                </article>

                <article className='flex flex-col sm:flex-row-reverse sm:justify-end items-center'>
                    <div className='relative w-full lg:w-3/5 max-w-[1240px] lg:h-[120vh] aspect-square'>
                        <Image
                            src={
                                'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                            }
                            alt={'Jindra Habarta'}
                            width={1240}
                            height={1240}
                            className='w-full h-full object-cover'
                        />

                        <h1 className='flex flex-col absolute bottom-[3%] right-[3%] font-league uppercase text-[12vw] leading-[80%] text-red-500'>
                            <span className='font-league indent-[-12%]'>
                                Luba Habarta
                            </span>
                        </h1>
                    </div>

                    <div className='flex-1 flex flex-col items-center justify-center'></div>
                </article>
            </div>
        </section>
    )
}

export default AboutUs
