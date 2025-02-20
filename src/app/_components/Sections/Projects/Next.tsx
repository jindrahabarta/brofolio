import React from 'react'
import NextCard from './NextCard'
import Marquee from '@/_components/Marquee/Marquee'
import Link from 'next/link'
import ArrowBack from '@/_assets/icons/global/ArrowBack'

const Next = () => {
    return (
        <Link href={'/projects'}>
            <div className='group flex justify-center items-center hover:cursor-pointer mt-10'>
                <Marquee
                    sets={6}
                    containerClassName='absolute bg-white text-white text-xl sm:opacity-0 group-hover:opacity-100 duration-200 py-2'
                    className='gap-16 pr-16'
                    id='nextMarquee'
                >
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase'>next</span>
                </Marquee>

                <ul className='relative z-10 w-40 sm:w-52 aspect-video'>
                    <NextCard
                        src='/images/Projects/Habartovi.webp'
                        className='rotate-6 sm:group-hover:rotate-9 sm:group-hover:-translate-x-28 sm:group-hover:translate-y-14'
                    />
                    <NextCard
                        src='/images/Projects/Avantgarda.webp'
                        className=' sm:group-hover:-translate-y-3'
                    />
                    <NextCard
                        src='/images/Projects/Printujto.webp'
                        className='-rotate-6 sm:group-hover:rotate-[-18deg] sm:group-hover:translate-x-28 sm:group-hover:translate-y-9'
                    />
                </ul>
                <div className='absolute z-30  '>
                    <button className='border relatve border-white rounded-full w-20 aspect-square translate-y-1/2 group/arrowBtn hover:scale-110 duration-200 scale-0 group-hover:scale-100 ease-out origin-center'>
                        <figure className='w-full h-full bg-gray-300 opacity-0 group-hover/arrowBtn:opacity-100 absolute top-0 rounded-full flex items-center justify-center scale-0 group-hover/arrowBtn:scale-100 delay-100 duration-300 ease-out'>
                            <div className='w-full h-full bg-white rounded-full  scale-0 group-hover/arrowBtn:scale-100 delay-200 duration-300 ease-out'></div>
                        </figure>

                        <span className='relative font-semibold duration-200 delay-100 flex flex-col justify-start h-8 overflow-hidden'>
                            <span className='h-8 group-hover/arrowBtn:text-black text-white duration-200 delay-100 flex justify-center items-center group-hover/arrowBtn:pl-1 pl-0'>
                                <ArrowBack className='h-8 rotate-180'></ArrowBack>
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default Next
