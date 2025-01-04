import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IProject } from '@/_constants/projects'
import Marquee from '@/_components/Marquee/Marquee'

const ListItem: React.FC<{ project: IProject }> = ({ project }) => {
    return (
        <li className='projectsItem opacity-0 -translate-x-80'>
            <Link
                href={project.url}
                className='group h-72 sm:h-96 block relative border-b border-gray-400 bg-white hover:bg-[rgb(16,152,173)] ease-out duration-200'
            >
                <Marquee
                    duration='40s'
                    containerClassName='absolute top-2 left-0 h-full text-[22rem] sm:text-[28rem] text-white text-opacity-20 opacity-0 group-hover:opacity-100'
                    className='gap-20 pr-20'
                >
                    <span className='font-owners uppercase'>
                        {project.name}
                    </span>
                    <span className='font-owners uppercase text-[10rem]'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>
                        {project.name}
                    </span>
                    <span className='font-owners uppercase text-[10rem]'>
                        &#9679;
                    </span>
                </Marquee>

                <article className='relative z-10 h-full w-full flex justify-between items-center gap-4 overflow-hidden px-4 sm:px-8'>
                    <section className='flex-1 xl:flex-none flex flex-col gap-1'>
                        <h2 className='font-instrument text-2xl sm:text-3xl group-hover:text-white duration-200'>
                            {project.description}
                        </h2>
                        <h1 className='font-league text-6xl sm:text-8xl uppercase text-gray-400 group-hover:text-white duration-200'>
                            {project.name}
                        </h1>
                        <ul className='flex gap-2'>
                            {project.badges.map((badge) => (
                                <li
                                    key={`${project.name}-${badge}`}
                                    className='bg-gray-200 group-hover:bg-white font-sans font-extrabold text-xs sm:text-sm rounded-lg p-2'
                                >
                                    {badge}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className='flex-1 xl:flex-none hidden md:block w-full md:w-[35rem] aspect-video rounded-xl group-hover:scale-105 duration-300 ease-out overflow-hidden'>
                        <Image
                            width={300}
                            height={168}
                            src={project.image}
                            alt={project.name}
                            className='w-full h-full aspect-video group-hover:scale-120 duration-500 ease-out'
                        />
                    </section>
                </article>
            </Link>
        </li>
    )
}

export default ListItem
