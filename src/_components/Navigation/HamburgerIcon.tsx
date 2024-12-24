import React from 'react'

const HamburgerIcon = ({
    handleClick,
    variant,
}: {
    handleClick: () => void
    variant?: string
}) => {
    if (!variant || variant === 'open')
        return (
            <button
                onClick={handleClick}
                aria-label='Hamburger icon open'
                className='hamburgerIcon w-14 h-14 rounded-lg cursor-pointer flex items-center justify-center'
            >
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='rounded-full w-8 h-[2px] bg-white/50'></span>
                    <span className='rounded-full w-8 h-[2px] bg-white/65'></span>
                    <span className='rounded-full w-8 h-[2px] bg-white/75'></span>
                </div>
            </button>
        )
    else if (variant === 'close')
        return (
            <button
                onClick={handleClick}
                aria-label='Hamburger icon open'
                className='hamburgerIcon w-14 h-14 rounded-lg cursor-pointer flex items-center justify-center'
            >
                <span className='rounded-full w-8 h-[2px] bg-white/70 rotate-45 -translate-x-1/2 absolute'></span>
                <span className='rounded-full w-8 h-[2px] bg-white/70 -rotate-45 -translate-x-1/2 absolute'></span>
            </button>
        )
}

export default HamburgerIcon
