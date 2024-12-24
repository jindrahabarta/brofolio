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
                className='hamburgerIcon btnFilter group w-14 h-14 rounded-lg cursor-pointer flex items-center justify-center'
            >
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='rounded-full w-8 h-[2px] bg-white/50 group-hover:bg-white/90 duration-200 delay-200'></span>
                    <span className='rounded-full w-8 h-[2px] bg-white/65 group-hover:bg-white/90 duration-200 delay-100'></span>
                    <span className='rounded-full w-8 h-[2px] bg-white/75 group-hover:bg-white/90 duration-200 '></span>
                </div>
            </button>
        )
    else if (variant === 'close')
        return (
            <button
                onClick={handleClick}
                aria-label='Hamburger icon open'
                className='hamburgerIcon btnFilter w-fit h-14 rounded-lg cursor-pointer flex items-center justify-center'
            >
                <span className='font-owners'>Close</span>
                {/* <span className='rounded-full w-8 h-[2px] bg-white/70 rotate-45 -translate-x-1/2 absolute'></span>
                <span className='rounded-full w-8 h-[2px] bg-white/70 -rotate-45 -translate-x-1/2 absolute'></span> */}
            </button>
        )
}

export default HamburgerIcon
