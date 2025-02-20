import React, { RefObject } from 'react'
import Lenis from 'lenis'

import HamburgerIcon from './HamburgerIcon'

import Link from 'next/link'
import NavLink from './NavLink'
import GreenBox from './GreenBox'
import RainbowBar from './RainbowBar'

import './style.css'
import BlurryButton from '../Buttons/BlurryButton'
import useNavTimeline from '@/_animations/useNavTimeline'

const Navigation = ({ lenis }: { lenis: RefObject<Lenis | null> }) => {
    const navTl = useNavTimeline()

    const openMenu = () => {
        if (!lenis.current) return

        lenis.current.stop()
        navTl.current.play()
    }

    const closeMenu = () => {
        if (!lenis.current) return

        navTl.current.reverse()
        lenis.current.start()
    }

    return (
        <header className='fixed w-screen text-white p-4 sm:p-8 z-50 pointer-events-none'>
            <nav className='flex z-40 items-center justify-between gap-2 '>
                <div className='z-50 select-none pointer-events-auto'>
                    <Link
                        id='navLogo'
                        href='/'
                        className='inline-block w-40 h-10 origin-left'
                    ></Link>
                </div>

                <div className='flex items-center gap-4 pointer-events-auto'>
                    <BlurryButton
                        text='Kontakt'
                        link='/'
                        id='blurry1'
                    ></BlurryButton>

                    <HamburgerIcon
                        handleClick={openMenu}
                        variant='open'
                    ></HamburgerIcon>
                </div>
            </nav>

            <figure
                id='navBg'
                className='absolute top-0 left-0 w-screen h-screen z-30 hidden pointer-events-auto'
                onClick={closeMenu}
            >
                <aside
                    id='navAside'
                    className='absolute top-0 right-0 h-dvh w-full sm:w-3/5 lg:w-2/5 py-3 px-4 translate-x-full flex gap-4'
                >
                    <RainbowBar></RainbowBar>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='group/navMainBlock bg-gray-100/70 backdrop-blur-sm rounded-xl h-full p-4 px-4 flex flex-col justify-between overflow-hidden'>
                            <div className='flex justify-end'>
                                <HamburgerIcon
                                    handleClick={closeMenu}
                                    variant='close'
                                ></HamburgerIcon>
                            </div>

                            <div className='text-right'>
                                <ul>
                                    <NavLink
                                        text='Úvod'
                                        link='#home'
                                        altLink='/'
                                        lenis={lenis}
                                    ></NavLink>
                                    <NavLink
                                        text='O nás'
                                        link='#about'
                                        altLink='/#about'
                                        lenis={lenis}
                                    ></NavLink>
                                    <NavLink
                                        text='Projekty'
                                        link='#projects'
                                        altLink='/#projects'
                                        lenis={lenis}
                                    ></NavLink>
                                    <NavLink
                                        text='Kontakt'
                                        link='#contact'
                                        altLink='/#contact'
                                        lenis={lenis}
                                    ></NavLink>
                                </ul>
                            </div>
                        </div>
                        <GreenBox></GreenBox>
                    </div>
                </aside>

                <div className='absolute bottom-10 left-10 -z-10 hidden sm:block'>
                    <h1 className='navBarTitle  opacity-0 sm:flex flex-col lg:block'>
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
