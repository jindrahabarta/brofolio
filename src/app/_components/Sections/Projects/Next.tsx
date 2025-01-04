import React from 'react'
import NextCard from './NextCard'
import Marquee from '@/_components/Marquee/Marquee'
import Link from 'next/link'

const Next = () => {
    return (
        <Link href={''}>
            <div className='group flex justify-center items-center hover:cursor-pointer mt-6'>
                <Marquee
                    sets={6}
                    containerClassName='absolute bg-black text-white text-xl sm:opacity-0 group-hover:opacity-100 duration-200 py-2'
                    className='gap-16 pr-16'
                >
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase'>next</span>
                </Marquee>

                <ul className='relative z-10 w-40 sm:w-52 aspect-video'>
                    <NextCard
                        src='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                        className='rotate-6 group-hover:rotate-9 group-hover:-translate-x-16 group-hover:translate-y-10 sm:group-hover:-translate-x-28 sm:group-hover:translate-y-14'
                    />
                    <NextCard
                        src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
                        className='group-hover:rotate-2 group-hover:-translate-y-1 sm:group-hover:-translate-y-3'
                    />
                    <NextCard
                        src='https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg'
                        className='-rotate-1 group-hover:rotate-[-18deg] group-hover:translate-x-16 group-hover:translate-y-6 sm:group-hover:translate-x-28 sm:group-hover:translate-y-9'
                    />
                </ul>
            </div>
        </Link>
    )
}

export default Next
