'use client'
import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const LanguageSelector = () => {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className='relative' onMouseLeave={() => setIsOpened(false)}>
            <div
                onClick={() => setIsOpened((prev) => !prev)}
                className='blurryBtn btnFilter group w-12 h-12 sm:w-14 sm:h-14 rounded-lg cursor-pointer flex gap-[0.12rem] items-center justify-center select-none'
            >
                cs
                <FiChevronDown
                    className={`duration-200 pt-0.5 ${
                        isOpened ? '-rotate-180' : 'rotate-0 '
                    }`}
                    size={18}
                />
            </div>

            {isOpened && (
                <div className='absolute w-full pt-1'>
                    <div className='flex btnFilter blurryBtn !rounded-lg overflow-hidden flex-col items-center'>
                        <button className=' bg-transparent hover:bg-black/20 duration-200 w-full'>
                            cs
                        </button>
                        <button className=' bg-transparent hover:bg-black/20 duration-200 w-full'>
                            en
                        </button>
                        <button className=' bg-transparent hover:bg-black/20 duration-200 w-full'>
                            no
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LanguageSelector
