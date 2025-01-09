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
                className='hamburgerIcon btnFilter group w-12 h-12 sm:w-14 sm:h-14 rounded-lg cursor-pointer flex items-center justify-center select-none'
            >
                <div className='flex flex-col justify-center items-center gap-[0.4rem] sm:gap-2'>
                    <div className='rounded-full w-7 sm:w-8 h-[2px] bg-white/50 '>
                        <div className='rounded-full h-full w-0 bg-white group-hover:w-full duration-200'></div>
                    </div>
                    <div className='rounded-full w-7 sm:w-8 h-[2px] bg-white/65'>
                        <div className='rounded-full h-full w-0 bg-white group-hover:w-full duration-200 delay-100'></div>
                    </div>
                    <div className='rounded-full w-7 sm:w-8 h-[2px] bg-white/75 '>
                        <div className='rounded-full h-full w-0 bg-white group-hover:w-full duration-200 delay-200'></div>
                    </div>
                </div>
                {/* <figure className='bg-yellow-400 absolute w-full h-full -z-50 opacity-55 blur-xl'></figure> */}
            </button>
        )
    else if (variant === 'close')
        return (
            <button
                onClick={handleClick}
                aria-label='Hamburger icon open'
                className='hamburgerIcon bg-black/30 w-fit h-14 rounded-lg cursor-pointer flex items-center justify-center select-none'
            >
                <span className='font-owners backdrop:invert blurryBtnText'>
                    Zavřít
                </span>
            </button>
        )
}

export default HamburgerIcon
