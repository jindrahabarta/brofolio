import { useRef, useEffect } from 'react'
import Noisy from '@/_components/Noisy/Noisy'
import { lerp } from '@/_utils/lerp'
import gsap from 'gsap'

const Background = () => {
    const mouseRef = useRef<HTMLDivElement | null>(null)
    const backgroundRef = useRef<HTMLDivElement | null>(null)
    const mousePosition = useRef({
        x: 0,
        y: 0,
    })
    const delayedMousePosition = useRef({
        x: 0,
        y: 0,
    })

    const handleMouseMove = (e: MouseEvent) => {
        if (!mouseRef.current) return

        const { pageX, pageY } = e

        if (pageX > window.innerWidth || pageY > window.innerHeight) return

        const mouseX = pageX - mouseRef.current.offsetWidth / 2
        const mouseY = pageY - mouseRef.current.offsetHeight / 2

        mousePosition.current = {
            x: mouseX,
            y: mouseY,
        }
    }

    const animateMouse = (x: number, y: number) => {
        gsap.set(mouseRef.current, {
            x,
            y,
        })
    }

    // const animateBackground = (y: number) => {
    //     if (!backgroundRef.current) return

    //     // TODO:
    //     gsap.to(backgroundRef.current, {
    //         x: -y / 2,
    //     })
    // }

    useEffect(() => {
        const animate = () => {
            if (!mouseRef.current) return

            const { x, y } = delayedMousePosition.current

            delayedMousePosition.current = {
                x: lerp(x, mousePosition.current.x, 0.05),
                y: lerp(y, mousePosition.current.y, 0.05),
            }

            animateMouse(x, y)
            // animateBackground(y)

            window.requestAnimationFrame(animate)
        }

        animate()

        document.addEventListener('mousemove', handleMouseMove)

        return () => document.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            <div ref={backgroundRef} id='hero-radial-gradient' />

            {/* TODO: create other fades on the edges */}
            <div ref={mouseRef} id='hero-mouse-gradient' />

            <Noisy />

            <div className='h-44 bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black z-10 absolute' />
        </>
    )
}

export default Background
