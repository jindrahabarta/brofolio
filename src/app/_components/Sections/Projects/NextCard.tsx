import React from 'react'
import Image from 'next/image'

const NextCard: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <li
            className={`absolute w-52 aspect-video rounded-lg duration-300 ease-out overflow-hidden ${
                className ?? ''
            }`}
        >
            <Image
                width={150}
                height={84}
                src='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                alt='Project card 1'
                className='w-full h-full aspect-video'
            />
        </li>
    )
}

export default NextCard
