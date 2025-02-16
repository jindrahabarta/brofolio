import { RefObject, useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function useNavTimeline(): RefObject<gsap.core.Timeline> {
    const navTimeline = useRef(
        gsap.timeline({
            defaults: {
                duration: 0.3,
                ease: 'power1.inOut',
                delay: 0,
            },
            paused: true,
        })
    )

    useEffect(() => {
        const timeline = navTimeline.current
        gsap.registerPlugin()
        const mm = gsap.matchMedia()

        mm.add('(min-width: 640px)', () => {
            timeline
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
                        transform: 'scale(1.4, 1.4)',
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
        })

        mm.add('(max-width: 639px)', () => {
            timeline
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
                        transform: 'translate(10px, 10px) scale(1.4)',

                        translateY: 10,
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
        })

        return () => {
            timeline.kill()
        }
    }, [])

    return navTimeline
}
