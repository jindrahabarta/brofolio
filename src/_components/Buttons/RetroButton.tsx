import Link from 'next/link'
import React from 'react'

interface props {
    link: string
    text: string
    blank?: boolean
}

const RetroButton = ({ link, text, blank }: props) => {
    return (
        <Link
            aria-label={`Navigation link to ${text}`}
            href={link}
            target={blank ? '_blank' : '_self'}
        >
            <button
                type='button'
                aria-label={`Navigation link to ${text}`}
                className='retroButton text-lg px-4 py-2 w-full text-center text-nowrap bg-gradient-to-b from-orange-600 to-yellow-400 rounded-full shadow-inner shadow-yellow-600 hover:to-orange-600 hover:from-yellow-400 hover:shadow-orange-700 hover:underline'
            >
                {text}
            </button>
        </Link>
    )
}

export default RetroButton
