import Link from 'next/link'
import React from 'react'

const Button = ({ text, link }: { text: string; link: string }) => {
    return (
        <Link
            className='btnFilter h-14 w-fit px-8 flex items-center font-owners border rounded-xl text-sm'
            href={link}
        >
            {text}
        </Link>
    )
}

export default Button
