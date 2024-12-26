import React, { RefObject, useEffect } from 'react'
import gsap from 'gsap'
import Lenis from 'lenis'
import Image from 'next/image'
import HamburgerIcon from './HamburgerIcon'

import Link from 'next/link'
import NavLink from './NavLink'
import GreenBox from './GreenBox'
import RainbowBar from './RainbowBar'

import './style.css'
import BlurryButton from '../BlurryButton'

const Navigation = ({ lenis }: { lenis: RefObject<Lenis | null> }) => {
    const navTl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power1.inOut',
            delay: 0,
        },
        paused: true,
    })

    useEffect(() => {
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

        return () => {
            navTl.kill()
        }
    }, [])

    const openMenu = () => {
        if (!lenis.current) return

        lenis.current.stop()

        navTl.play()
    }

    const closeMenu = () => {
        if (!lenis.current) return
        navTl.reverse()
        lenis.current.start()
    }

    return (
        <header className='fixed w-screen text-white p-4 sm:p-8 z-50'>
            <nav className='flex z-40 items-center justify-between gap-2 '>
                <div className='z-50 select-none'>
                    <Link id='navLogo' href='/'>
                        <Image
                            id='navLogo'
                            className='scale-[0.6]'
                            src={
                                'https://daydrift.design/images/daydrift_logo.svg'
                            }
                            width={100}
                            height={100}
                            alt='Logo'
                        ></Image>
                    </Link>
                </div>

                <div className='flex items-center gap-4'>
                    <BlurryButton
                        text='Kontakt'
                        link='/'
                        id='blurry1'
                    ></BlurryButton>

                    {/* <Button text='Kontakt' link='tel:444444444'></Button> */}

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
                                        lenis={lenis}
                                        text='Home'
                                        link='#home'
                                    ></NavLink>
                                    {/* <NavLink text='About us' link='/' onClick={}></NavLink> */}
                                    {/* <NavLink
                                        text='Portfolio'
                                        link='/#projects'
                                        onClick={}
                                    ></NavLink> */}
                                    <NavLink
                                        text='Contact us'
                                        link='#contact'
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
