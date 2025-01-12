import React from 'react'
import Image from 'next/image'

import BackgroundImg from '@/../public/images/AboutUs/bg.png'
import TVImg from '@/../public/images/AboutUs/bg-tv2.png'

const ScrollEffect = () => {
    return (
        <div className='h-[200vh] absolute top-0 w-full'>
            <div className='h-screen sticky top-0 overflow-hidden'>
                <div className='relative w-full h-screen'>
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
    )
}

export default ScrollEffect
