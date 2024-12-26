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
        <div className='bg-green-400 rounded-xl flex gap-4 p-4 select-none'>
            <Link
                href='/'
                className='py-4 flex gap-2 justify-center items-center flex-1 rounded-xl bg-black/20 text-black border-black/10 border-2 box-content hover:bg-black/100 hover:text-white duration-200'
            >
                <LetterIcon className='h-6' />
                <p className=' font-league text-xl'>Text us</p>
            </Link>

            {/* <div className='rounded-xl flex-1 bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))] duration-200'> */}
            <Link
                href='/'
                className='h-full flex flex-1 gap-2 justify-center items-center rounded-xl bg-black hover:bg-motionBlue hover:text-black relative duration-200'
            >
                <PhoneIcon className='h-6' />
                <p className=' font-league text-xl'>Book a call</p>
            </Link>
            {/* </div> */}
        </div>
    )
}

export default GreenBox
