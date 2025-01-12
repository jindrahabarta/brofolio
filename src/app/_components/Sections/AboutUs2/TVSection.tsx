import React from 'react'
import Image from 'next/image'
import BackgroundImg from '@/../public/images/AboutUs/bg.png'
import TVImg from '@/../public/images/AboutUs/bg-tv2.png'
import TVScreen from './TVScreen'

const TVSection = () => {
    return (
        <section className='w-full sticky top-0 left-0 opacity-50'>
            <div className='relative w-full h-screen overflow-hidden'>
                <Image
                    src={BackgroundImg}
                    width={1200}
                    height={1000}
                    alt='Pozadí'
                    className='aboutUs-scale object-cover object-center w-full h-screen absolute top-0 left-0'
                ></Image>
                <Image
                    src={TVImg}
                    width={1200}
                    height={1000}
                    alt='Pozadí'
                    className='aboutUs-scale object-cover object-center w-full h-screen absolute top-0 left-0'
                ></Image>
            </div>
        </section>
    )
}

export default TVSection
