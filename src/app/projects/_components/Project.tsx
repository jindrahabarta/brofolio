import React from 'react'

const Project = ({
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    title,
}: {
    handleMouseEnter: () => void
    handleMouseLeave: () => void
    handleClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
    title: string
}) => {
    return (
        <li className='projectsListItem py-4 relative w-full border-t-[1px] border-white/20 group hover:pl-4 duration-200'>
            <a
                className=' px-4 inline-block w-full select-none font-emberlyRegular text-8xl'
                href='xd'
                onClick={(e) => handleClick(e)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {title}
            </a>
        </li>
    )
}

export default Project
