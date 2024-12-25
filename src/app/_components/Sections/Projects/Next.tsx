import React from 'react'
import NextCard from './NextCard'

const Next = () => {
    return (
        <div className='group flex justify-center items-center hover:cursor-pointer overflow-hidden mt-4'>
            <span className='absolute w-full flex items-center text-xl text-nowrap bg-black text-white opacity-0 group-hover:opacity-100 duration-200 overflow-hidden py-2'>
                <span className='flex flex-row items-center gap-4 pr-4 animate-marqueeX'>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                </span>

                <span className='flex flex-row items-center gap-4 pr-4 animate-marqueeX delay-[40s]'>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>next</span>
                    <span className='font-owners uppercase text-sm'>
                        &#9679;
                    </span>
                </span>
            </span>

            <ul className='relative z-10 w-52 aspect-video'>
                <NextCard />
                <NextCard />
                <NextCard />
                <NextCard />
                <NextCard />
            </ul>
        </div>
    )
}

export default Next
