import React from 'react'
import LetterIcon from '../Icons/LetterIcon'
import Link from 'next/link'
import PhoneIcon from '../Icons/PhoneIcon'

const GreenBox = () => {
    return (
        <div className='bg-green-400 rounded-xl flex gap-4 p-4 select-none'>
            <Link
                href='/'
                className='py-4 flex gap-2 justify-center items-center flex-1 rounded-xl bg-black/20 text-black border-black/10 border-2 box-content hover:bg-black/100 hover:text-white duration-200'
            >
                <LetterIcon className='h-6' />
                <p className=' font-league text-xl'>Napište nám</p>
            </Link>

            <Link
                href='/'
                className='h-full flex flex-1 gap-2 justify-center items-center rounded-xl bg-black hover:bg-motionBlue hover:text-black relative duration-200'
            >
                <PhoneIcon className='h-6' />
                <p className=' font-league text-xl'>Zavolat</p>
            </Link>
        </div>
    )
}

export default GreenBox
