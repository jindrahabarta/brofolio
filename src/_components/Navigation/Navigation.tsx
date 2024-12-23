import React, { RefObject } from 'react'
import gsap from 'gsap'
import Lenis from 'lenis'
import Image from 'next/image'
import HamburgerIcon from './HamburgerIcon'
import Button from '../Button'
import Link from 'next/link'
import NavLink from './NavLink'

const Navigation = ({ lenis }: { lenis: RefObject<Lenis | null> }) => {
    const navTl = gsap.timeline({
        defaults: { duration: 0.3, ease: 'power1.in' },
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
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',

                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
            })
            .to(
                '#navLogo',
                {
                    scale: 1,
                },
                '<'
            )
            .to(
                '#navAside',
                {
                    translateX: 0,
                },
                '<'
            )
            .to(
                '.navLink',
                {
                    translateX: 0,
                    opacity: 1,
                    stagger: 0.1,
                },
                '<'
            )
            .to(
                '.navBarTitle',
                {
                    opacity: 1,
                    stagger: 0.1,
                },
                '<'
            )

        navTl.play()
    }

    const closeMenu = () => {
        if (!lenis.current) return

        navTl.reverse()

        document.body.classList.remove('disableScroll')
        lenis.current.start()
    }

    return (
        <header className='fixed w-screen text-white px-8 py-8 z-50'>
            <nav className='flex z-40 items-center justify-between gap-2'>
                <div className='z-50'>
                    <Link id='navLogo' href='/'>
                        <Image
                            id='navLogo'
                            className='scale-[0.6]'
                            src={
                                'https://daydrift.design/images/daydrift_logo.svg'
                            }
                            width={120}
                            height={120}
                            alt='Logo'
                        ></Image>
                    </Link>
                </div>

                <div className='flex items-center gap-4'>
                    <Button text='Call us' link='tel:444444444'></Button>

                    <HamburgerIcon
                        handleClick={openMenu}
                        variant='open'
                    ></HamburgerIcon>
                </div>
            </nav>

            <figure
                id='navBg'
                className='absolute top-0 left-0 w-screen h-screen z-30 hidden'
                onClick={closeMenu}
            >
                <aside
                    id='navAside'
                    className='absolute top-0 right-0 h-screen w-full sm:w-3/5 lg:w-2/5 py-3 px-4 translate-x-full flex gap-4'
                >
                    <div
                        id='navRainbowBar'
                        className='h-full w-12 rounded-xl hidden sm:block select-none overflow-hidden'
                    >
                        <div className='text-black rotate-180 w-full flex gap-8 items-center justify-center'>
                            <span>●</span>
                            <span className='font-owners text-xl text-nowrap'>
                                Motion Labs
                            </span>
                            <span>●</span>
                            <span className='font-owners text-xl text-nowrap'>
                                Motion Labs
                            </span>
                            <span>●</span>
                            <span className='font-owners text-xl text-nowrap'>
                                Motion Labs
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='group/navMainBlock bg-gray-100/70 backdrop-blur-sm rounded-xl h-full p-4 px-4 flex flex-col justify-between'>
                            <div className='flex justify-end'>
                                <HamburgerIcon
                                    handleClick={closeMenu}
                                    variant='close'
                                ></HamburgerIcon>
                            </div>

                            <div className='text-right'>
                                <ul>
                                    <NavLink text='Home' link='/'></NavLink>
                                    <NavLink text='About us' link='/'></NavLink>
                                    <NavLink
                                        text='Portfolio'
                                        link='/'
                                    ></NavLink>
                                    <NavLink
                                        text='Contact us'
                                        link='/'
                                    ></NavLink>
                                </ul>
                            </div>
                        </div>
                        <div className='bg-green-400 rounded-xl h-20'></div>
                    </div>
                </aside>

                <div className='absolute bottom-10 left-10'>
                    <h1 className='navBarTitle  opacity-0'>
                        <em>Motion</em> <strong>Labs</strong>
                    </h1>
                    <p className='navBarTitle opacity-0 font-instrument text-gray-400 text-2xl'>
                        Design, web dev, etc..
                    </p>
                </div>
            </figure>
        </header>
    )
}

export default Navigation

// const NavigationContent = () => {
//     return <div></div>
// }
