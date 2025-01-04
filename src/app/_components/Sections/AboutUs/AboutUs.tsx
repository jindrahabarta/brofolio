import React from 'react'
import Image from 'next/image'
import TVImg from '@/../public/images/AboutUs/TV.png'

import Background2Img from '@/../public/images/AboutUs/Background_without_tv.png'
import TVFillImg from '@/../public/images/AboutUs/TVfill.png'

const AboutUs = () => {
    return (
        <section id='aboutus' className='bg-black relative select-none'>
            <div className='h-44 bg-gradient-to-b from-0% from-black to-[rgba(223, 232, 233, 0.2)] absolute z-10 w-full'></div>

            <div className='h-[400vh] w-full bg-blue-300'>
                <div className='bg-red-500/50 h-screen sticky top-0 overflow-hidden'>
                    <div className='relative w-full h-screen'>
                        <Image
                            id='aboutus-TVFill'
                            src={TVFillImg}
                            width={1200}
                            height={1000}
                            alt='TV Image'
                            className='aboutUs-scale absolute w-full h-full object-bottom object-cover'
                        ></Image>

                        <Image
                            id='aboutus-bg'
                            src={Background2Img}
                            width={1200}
                            height={1000}
                            alt='Television image'
                            className='aboutUs-scale w-full h-full object-cover object-bottom absolute'
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
                                className='w-full h-full object-cover object-bottom '
                            ></Image>
                        </div>

                        <h1>
                            <strong>about us</strong>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='h-screen bg-red-400'></div>
        </section>
    )
}

export default AboutUs
