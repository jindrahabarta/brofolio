import Link from 'next/link'
import React from 'react'

const NavLink = ({ link, text }: { link: string; text: string }) => {
    return (
        <li className='navLink translate-x-full opacity-0 '>
            <Link
                className='font-emberlyRegular text-7xl text-black group-hover/navMainBlock:text-black/50 hover:!text-black/100 duration-200'
                href={link}
            >
                {text}
            </Link>
        </li>
    )
}

export default NavLink
