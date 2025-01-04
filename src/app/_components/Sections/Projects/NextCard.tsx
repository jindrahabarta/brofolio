import React from 'react'
import Image from 'next/image'

const NextCard: React.FC<{ src: string; className?: string }> = ({
    src,
    className,
}) => {
    return (
        <li
            className={`absolute w-40 sm:w-52 aspect-video rounded-lg duration-500 ease-out overflow-hidden ${
                className ?? ''
            }`}
        >
            <Image
                width={150}
                height={84}
                src={src}
                alt='Project card 1'
                className='w-full h-full aspect-video'
            />
        </li>
    )
}

export default NextCard
