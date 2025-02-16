import React from 'react'

const Project = () => {
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault()
    }

    return (
        <li className='relative w-full border-t-[1px] border-b-[1px] border-white/20'>
            <a
                className='py-4 px-4 inline-block w-full select-none'
                href='xd'
                onClick={(e) => handleClick(e)}
            >
                lasjfl;asdjf;j
            </a>
        </li>
    )
}

export default Project
