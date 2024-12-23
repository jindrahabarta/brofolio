import React from 'react'

const HamburgerIcon = ({ handleClick }: { handleClick: () => void }) => {
    return (
        <button
            onClick={handleClick}
            aria-label='Hamburger icon'
            className='backdrop-blur-sm border border-white/20 bg-white/20 w-14 h-14 rounded-lg flex flex-col justify-center items-center gap-2 cursor-pointer'
        >
            <span className='rounded-full w-8 h-[2px] bg-white/50'></span>
            <span className='rounded-full w-8 h-[2px] bg-white/65'></span>
            <span className='rounded-full w-8 h-[2px] bg-white/75'></span>
        </button>
    )
}

export default HamburgerIcon
