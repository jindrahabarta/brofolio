import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section
            id='home'
            className='text-white pt-9 h-screen bg-black relative '
        >
            <Image
                src={'/images/Hero/img1.png'}
                alt={'Hero image'}
                width={1500}
                height={1000}
                className='absolute top-0 w-full h-full object-cover'
            ></Image>

            <div className='h-44 bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black z-10 absolute '></div>

            <main className='w-full h-full overflow-hidden flex flex-col justify-center items-center z-20 relative'>
                <h1 className='relative text-[10vw] md:text-[4.5vw] bottom-4 left-4'>
                    <strong>Motion Labs</strong>

                    <ul className='flex gap-10 text-2xl'>
                        <li className='absolute -top-20 -left-5'>Vývoj webů</li>
                        <li className='absolute -bottom-16 -left-20'>
                            Motion Graphic
                        </li>
                        <li className='absolute -bottom-16 -right-5'>
                            Motion Graphic
                        </li>
                        <li className='absolute -bottom-40 right-96'>
                            Motion Graphic
                        </li>
                        <li className='absolute -top-20 -right-20'>
                            Motion Graphic
                        </li>
                        <li className='absolute -top-52 right-80'>
                            Motion Graphic
                        </li>
                        <li className='absolute -top-28 left-60'>
                            Motion Graphic
                        </li>
                        <li className='absolute -top-10 right-56'>
                            Motion Graphic
                        </li>
                    </ul>
                </h1>
                <div></div>
            </main>
        </section>
    )
}

export default Hero
