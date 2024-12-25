import React from 'react'
import LetterIcon from '../Icons/LetterIcon'
import Link from 'next/link'
import PhoneIcon from '../Icons/PhoneIcon'

const GreenBox = () => {
    return (
        // <div className='bg-green-400 rounded-xl flex flex-col gap-4 p-4 '>

        //     <Link
        //         href='/'
        //         className='h-20 py-3 flex gap-2 justify-center items-center flex-1 rounded-xl bg-black/20 duration-200 text-black'
        //     >
        //         <PhoneIcon className='w-8 '></PhoneIcon>

        //         <span className=' font-owners text-sm'>Text us</span>
        //     </Link>
        //     <Link
        //         href='/'
        //         className='h-20 py-3 flex gap-2 justify-center items-center flex-1 rounded-xl bg-black duration-200'
        //     >
        //         <LetterIcon className='w-8 '></LetterIcon>

        //         <span className=' font-owners text-sm'>Text us</span>
        //     </Link>
        // </div>
        <div className='bg-green-400 rounded-xl flex gap-4 p-4 '>
            <Link
                href='/'
                className='flex flex-col gap-1 justify-center items-center flex-1 rounded-xl bg-black/20 text-black border-black/10 border-2'
            >
                <LetterIcon className='h-7'></LetterIcon>
                <p className='font-semibold'>Text us</p>
            </Link>

            <Link
                href='/'
                className='rainbowBorder py-4 flex flex-col gap-1 justify-center items-center flex-1 rounded-xl bg-black border-white/10 border-2 '
            >
                <PhoneIcon className='h-7'></PhoneIcon>
                <p className='font-semibold'>Book a call</p>
            </Link>
        </div>
    )
}

export default GreenBox
