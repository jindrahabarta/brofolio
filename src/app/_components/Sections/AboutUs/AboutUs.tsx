import React from 'react'
import Image from 'next/image'
import TVImg from '@/../public/images/AboutUs/TV.png'
import BackgroundImg from '@/../public/images/AboutUs/Background.png'

const AboutUs = () => {
    return (
        <section id='aboutus' className='bg-black'>
            <div className='h-[200vh] w-screen bg-blue-300'>
                <div className='bg-red-500/50 h-screen sticky top-0'>
                    <Image
                        src={TVImg}
                        width={1200}
                        height={1000}
                        alt='Television image'
                    ></Image>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
