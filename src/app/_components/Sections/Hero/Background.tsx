import { useRef, useEffect } from 'react'
import Noisy from '@/app/_components/Sections/Hero/Noisy'
import { lerp } from '@/_utils/lerp'
import gsap from 'gsap'

const Background = () => {
    const mouseRef = useRef<HTMLDivElement | null>(null)
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

    useEffect(() => {
        const animate = () => {
            if (!mouseRef.current) return

            const { x, y } = delayedMousePosition.current

            delayedMousePosition.current = {
                x: lerp(x, mousePosition.current.x, 0.05),
                y: lerp(y, mousePosition.current.y, 0.05),
            }

            gsap.set(mouseRef.current, {
                x: delayedMousePosition.current.x,
                y: delayedMousePosition.current.y,
            })

            window.requestAnimationFrame(animate)
        }

        animate()

        document.addEventListener('mousemove', handleMouseMove)

        return () => document.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            <div id='hero-radial-gradient' />

            {/* TODO: create other fades on the edges */}
            <div ref={mouseRef} id='hero-mouse-gradient' />

            <Noisy />

            <div className='h-44 bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black z-10 absolute' />
        </>
    )
}

export default Background
