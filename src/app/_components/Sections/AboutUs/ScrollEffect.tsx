import React from 'react'
import Image from 'next/image'

import BackgroundImg from '@/../public/images/AboutUs/BGImage blur.webp'
import TVImg from '@/../public/images/AboutUs/TVImage.webp'

const ScrollEffect = () => {
    return (
        <div
            id='aboutUsScrollSection'
            className='h-[400vh] absolute top-0 w-full select-none pointer-events-none'
        >
            <div className='h-screen sticky top-0 overflow-hidden'>
                <div className='relative w-full h-screen'>
                    <Image
                        id='aboutusBg'
                        src={BackgroundImg}
                        width={1200}
                        height={1000}
                        alt='Television image'
                        className='aboutUs-scale w-full h-full object-cover object-center absolute blur-sm'
                    ></Image>

                    <div
                        id='aboutusTV'
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
