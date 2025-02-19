import React from 'react'
import { IProject } from '@/_constants/projects'

const Project = ({
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    project,

    i,
}: {
    handleMouseEnter: () => void
    handleMouseLeave: () => void
    handleClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void

    project: IProject
    i: number
}) => {
    return (
        <li className='projectsListItem h-[8.5rem] overflow-hidden relative w-full border-t-[1px] border-white/20 group bg-black hover:bg-white duration-500 ease-out '>
            <a
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='px-4 group-hover:-translate-y-[8.5rem] duration-500 ease-out flex justify-between items-center w-full select-none text-8xl h-[8.5rem]'
                href={`/projects/${project.slug}`}
                onClick={(e) => handleClick(e)}
            >
                <div className='flex items-center'>
                    <div className='h-full  flex items-center text-3xl font-charm text-gray-300 group-hover:text-black'>
                        {i.toString().padStart(2, '0')}
                    </div>

                    <div className='pl-10 group-hover:pl-12 ease-out duration-300 font-emberlyRegular leading-none text-white group-hover:text-black'>
                        {project.name}
                    </div>
                </div>

                <div className='flex gap-4'>
                    {project.badges.map((tag) => {
                        return (
                            <div
                                key={tag}
                                className='flex items-center h-10  px-4 py-4 w-fit rounded-lg bg-white text-black group-hover:invert text-base font-extrabold font-sans'
                            >
                                {tag}
                            </div>
                        )
                    })}
                </div>
            </a>
            <a
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='px-4 group-hover:-translate-y-[8.5rem] duration-500 ease-out flex justify-between items-center w-full select-none text-8xl  h-[8.5rem]'
                href={`/projects/${project.slug}`}
                onClick={(e) => handleClick(e)}
            >
                <div className='flex items-center'>
                    <div className='h-full  flex items-center text-3xl font-charm text-gray-300 group-hover:text-black'>
                        {i.toString().padStart(2, '0')}
                    </div>

                    <div className='pl-10 group-hover:pl-12 ease-out duration-300 font-emberlyRegular leading-none text-white group-hover:text-black'>
                        {project.name}
                    </div>
                </div>

                <div className='flex gap-4'>
                    {project.badges.map((tag) => {
                        return (
                            <div
                                key={tag}
                                className='flex items-center h-10  px-4 py-4 w-fit rounded-lg bg-white text-black group-hover:invert text-base font-extrabold font-sans'
                            >
                                {tag}
                            </div>
                        )
                    })}
                </div>
            </a>
        </li>
    )
}

export default Project
