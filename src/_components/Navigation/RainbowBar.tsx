import React from 'react'

const RainbowBar = () => {
    return (
        <div
            id='navRainbowBar'
            className='h-full w-12 rounded-xl hidden sm:flex justify-start select-none overflow-hidden'
        >
            <div
                id='rainbowBarContent'
                className='text-black w-full flex gap-8 items-center justify-center pb-8'
            >
                <span>&#9679;</span>
                <span className='font-owners text-xl text-nowrap'>
                    Motion Labs
                </span>
                <span>&#9679;</span>
                <span className='font-owners text-xl text-nowrap'>
                    Motion Labs
                </span>
                <span>&#9679;</span>
                <span className='font-owners text-xl text-nowrap'>
                    Motion Labs
                </span>
            </div>
            <div
                id='rainbowBarContent'
                className='text-black w-full flex gap-8 items-center justify-center pb-8'
            >
                <span>&#9679;</span>
                <span className='font-owners text-xl text-nowrap'>
                    Motion Labs
                </span>
                <span>&#9679;</span>
                <span className='font-owners text-xl text-nowrap'>
                    Motion Labs
                </span>
                <span>&#9679;</span>
                <span className='font-owners text-xl text-nowrap'>
                    Motion Labs
                </span>
            </div>
        </div>
    )
}

export default RainbowBar
