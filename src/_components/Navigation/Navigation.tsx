import React, { RefObject } from 'react'
import gsap from 'gsap'
import Lenis from 'lenis'
import HamburgerIcon from './HamburgerIcon'

const Navigation = ({ lenis }: { lenis: RefObject<Lenis | null> }) => {
    const navTl = gsap.timeline({
        defaults: { duration: 0.5, ease: 'power1.inOut' },
    })

    const openMenu = () => {
        if (!lenis.current) return

        document.body.classList.add('disableScroll')
        lenis.current.stop()

        navTl
            .set('#navBg', {
                display: 'block',
            })
            .to('#navBg', {
                css: {
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                },
            })
            .to(
                '#navAside',
                {
                    translateX: 0,
                },
                '<'
            )

        navTl.play()
    }

    const closeMenu = () => {
        if (!lenis.current) return

        document.body.classList.remove('disableScroll')
        lenis.current.start()

        navTl.reverse()
    }

    return (
        <header className='fixed w-screen px-8 py-3 z-50'>
            <nav className='flex z-40 items-center justify-between gap-2'>
                <div>Logo</div>

                <div className='flex items-center gap-4'>
                    <button>Call us</button>

                    <HamburgerIcon handleClick={openMenu}></HamburgerIcon>
                </div>
            </nav>

            <figure
                id='navBg'
                className='absolute top-0 left-0 w-screen h-screen z-30 hidden'
            >
                <aside
                    id='navAside'
                    className='absolute top-0 right-[7px] h-screen w-2/5 py-3 translate-x-full'
                >
                    <div className='bg-red-400/80 rounded-xl h-full p-4 px-8 '>
                        <div className='flex justify-end'>
                            <button className=' bg-black' onClick={closeMenu}>
                                close Navbar
                            </button>
                        </div>

                        <div>
                            <ul>
                                <li>link</li>
                                <li>link</li>
                                <li>link</li>
                                <li>link</li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </figure>
        </header>
    )
}

export default Navigation

// const NavigationContent = () => {
//     return <div></div>
// }
