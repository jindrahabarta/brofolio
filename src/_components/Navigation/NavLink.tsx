import Lenis from 'lenis'
import React, { RefObject } from 'react'

const NavLink = ({
    link,
    text,
    lenis,
}: {
    link: string
    text: string
    lenis: RefObject<Lenis | null>
}) => {
    const handleScrollTo: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault()
        if (!lenis.current) return

        lenis.current.start()
        lenis.current.scrollTo(link)
    }

    return (
        <li className='navLink translate-x-full opacity-0 select-none'>
            <a
                onClick={handleScrollTo}
                className='font-instrument text-7xl text-black group-hover/navMainBlock:text-black/50 hover:!text-black/100 duration-200'
                href={link}
            >
                {text}
            </a>
        </li>
    )
}

export default NavLink
