import React from 'react'
import NextCard from './NextCard'
import Marquee from '@/_components/Marquee/Marquee'
import Link from 'next/link'

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
            </div>
        </Link>
    )
}

export default Next
