import Lenis from 'lenis'
import { usePathname } from 'next/navigation'
import React, { RefObject } from 'react'

const NavLink = ({
    link,
    altLink,
    text,
    lenis,
}: {
    link: string
    altLink: string
    text: string
    lenis: RefObject<Lenis | null>
}) => {
    const path = usePathname()

    const handleScrollTo: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        if (!lenis.current) return

        if (path === '/') {
            e.preventDefault()
            lenis.current.start()
            lenis.current.scrollTo(link)
        }
    }

    return (
        <li className='navLink translate-x-full opacity-0 select-none'>
            <a
                onClick={handleScrollTo}
                className='font-instrument text-6xl md:text-7xl text-black group-hover/navMainBlock:text-black/50 hover:!text-black/100 duration-200'
                href={path === '/' ? link : altLink}
            >
                {text}
            </a>
        </li>
    )
}

export default NavLink
