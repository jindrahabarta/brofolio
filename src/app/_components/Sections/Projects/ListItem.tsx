import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IProject } from '@/_constants/projects'

const ListItem: React.FC<{ project: IProject }> = ({ project }) => {
    return (
        <Link
            href={project.url}
            className='group h-96 block relative border-b border-gray-400 bg-white hover:bg-[rgb(16,152,173)] ease-out duration-200'
        >
            <span className='absolute top-2 left-0 h-full w-full flex items-center text-[28rem] text-nowrap text-white text-opacity-20 opacity-0 group-hover:opacity-100 overflow-hidden'>
                <span className='flex flex-row items-center gap-20 pr-20 animate-marqueeX'>
                    <span className='font-owners uppercase'>
                        {project.name}
                    </span>
                    <span className='font-owners uppercase text-xl'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>
                        {project.name}
                    </span>
                    <span className='font-owners uppercase text-xl'>
                        &#9679;
                    </span>
                </span>

                <span className='flex flex-row items-center gap-20 pr-20 animate-marqueeX delay-[40s]'>
                    <span className='font-owners uppercase'>
                        {project.name}
                    </span>
                    <span className='font-owners uppercase text-xl'>
                        &#9679;
                    </span>
                    <span className='font-owners uppercase'>
                        {project.name}
                    </span>
                    <span className='font-owners uppercase text-xl'>
                        &#9679;
                    </span>
                </span>
            </span>

            <article className='relative z-10 h-full w-full flex justify-between items-center gap-4 overflow-hidden p-8'>
                <section className='flex flex-col gap-1'>
                    <h2 className='font-instrument text-3xl group-hover:text-white duration-200'>
                        {project.description}
                    </h2>
                    <h1 className='font-league uppercase text-gray-400 group-hover:text-white duration-200 text-8xl'>
                        {project.name}
                    </h1>
                    <ul className='flex gap-2'>
                        {project.badges.map((badge) => (
                            <li
                                key={`${project.name}-${badge}`}
                                className='bg-gray-200 group-hover:bg-white font-sans font-extrabold text-sm rounded-lg p-2'
                            >
                                {badge}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className='hidden md:block w-full md:w-[35rem] aspect-video rounded-xl group-hover:scale-105 duration-300 ease-out overflow-hidden'>
                    <Image
                        width={300}
                        height={168}
                        src='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                        alt={project.name}
                        className='w-full h-full aspect-video group-hover:scale-120 duration-500 ease-out'
                    />
                </section>
            </article>
        </Link>
    )
}

export default ListItem
