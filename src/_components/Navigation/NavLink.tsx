import { useLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({
    link,
    altLink,
    text,
}: {
    link: string
    altLink: string
    text: string
}) => {
    const path = usePathname()
    const lenis = useLenis()

    const handleScrollTo: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        if (!lenis) return

        if (path === '/') {
            e.preventDefault()
            lenis.start()
            lenis.scrollTo(link)
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
