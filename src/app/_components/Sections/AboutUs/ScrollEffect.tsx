import React from 'react'
import Image from 'next/image'

import TVImg from '@/../public/images/AboutUs/TVTransitionImage.webp'
import MobileTVImg from '@/../public/images/AboutUs/MobileTVTransitionImage.webp'

const ScrollEffect = () => {
    return (
        <div
            id='aboutUsScrollSection'
            className='h-[400vh] absolute top-0 w-full select-none pointer-events-none'
        >
            <div className='h-screen sticky top-0 overflow-hidden'>
                <div className='relative w-full h-screen'>
                    <div
                        id='aboutusTV'
                        className='aboutUs-scale w-full h-full absolute z-10'
                    >
                        <Image
                            src={MobileTVImg}
                            width={1500}
                            height={857}
                            alt='Television image'
                            className='w-full h-full object-cover object-center block sm:hidden'
                        ></Image>
                        <Image
                            id='aboutGradient'
                            src={TVImg}
                            width={1080}
                            height={1920}
                            alt='Television image'
                            className='w-full h-full object-cover object-center hidden sm:block'
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollEffect
