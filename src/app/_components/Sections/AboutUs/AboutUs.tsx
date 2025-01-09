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
            <div className='h-screen bg-red-400'></div>
        </section>
    )
}

export default AboutUs
