import React from 'react'

const TVGLitch = () => {
    return (
        <div className='absolute bottom-0 w-full h-full'>
            <div
                id='aboutUsHeadingBg'
                className='absolute opacity-0 w-full h-full flex flex-col'
            >
                <div className='flex h-full'>
                    <div className='flex-1 h-full bg-white'></div>
                    <div className='flex-1 h-full bg-yellow-300'></div>
                    <div className='flex-1 h-full bg-cyan-400'></div>
                    <div className='flex-1 h-full bg-green-400'></div>
                    <div className='flex-1 h-full bg-pink-600'></div>
                    <div className='flex-1 h-full bg-red-600'></div>
                    <div className='flex-1 h-full bg-blue-600'></div>
                </div>

                <div className='flex h-20'>
                    <div className='flex-1 h-full bg-blue-600'></div>
                    <div className='flex-1 h-full bg-white'></div>
                    <div className='flex-1 h-full bg-yellow-300'></div>
                    <div className='flex-1 h-full bg-cyan-400'></div>
                    <div className='flex-1 h-full bg-green-400'></div>
                    <div className='flex-1 h-full bg-pink-600'></div>
                    <div className='flex-1 h-full bg-red-600'></div>
                </div>
                <div className='bg-black w-full md:w-4/5 overflow-hidden absolute bottom-40 left-1/2 -translate-x-1/2 flex items-center'>
                    <div
                        id='aboutUsHeading'
                        className='flex gap-10 justify-start'
                    >
                        <h1 className='inline-flex gap-44 text-nowrap relative text-white leading-[0.8em] md:leading-[2.3em]'>
                            <strong className='text-[1rem] md:text-[5rem] '>
                                About us
                            </strong>
                            <strong className='text-[1rem] md:text-[5rem] '>
                                About us
                            </strong>
                            <strong className='text-[1rem] md:text-[5rem] '>
                                About us
                            </strong>
                            <strong className='text-[1rem] md:text-[5rem] '>
                                About us
                            </strong>
                            <strong className='text-[1rem] md:text-[5rem] '>
                                About us
                            </strong>
                            <strong className='text-[1rem] md:text-[5rem] '>
                                About us
                            </strong>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TVGLitch
