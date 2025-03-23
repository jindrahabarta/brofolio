import React, { MouseEventHandler, useEffect, useRef } from 'react'
import Image from 'next/image'
import LogoSvg from '@/../public/brand/ml_logo.svg'
import gsap from 'gsap'
import { lerp } from '@/_utils/lerp'

const Logo = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const imageRef = useRef<HTMLImageElement | null>(null)
    const mousePosition = useRef({
        x: 0,
        y: 0,
    })
    const delayedMousePosition = useRef({
        x: 0,
        y: 0,
    })

    const handleMouseOver: MouseEventHandler<HTMLDivElement> = () => {}

    const handeMouseOut: MouseEventHandler<HTMLDivElement> = () => {
        if (!imageRef.current) return

        mousePosition.current = {
            x: 0,
            y: 0,
        }
    }

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        if (!containerRef.current || !imageRef.current) return

        const { x, y } = containerRef.current.getBoundingClientRect()

        const { clientX, clientY } = e

        const mouseX = clientX - x - containerRef.current.clientWidth / 2
        const mouseY = clientY - y - containerRef.current.clientHeight / 2

        const percentX = mouseX / (containerRef.current.clientWidth / 2)
        const percentY = mouseY / (containerRef.current.clientHeight / 2)

        mousePosition.current = {
            x: percentX,
            y: percentY,
        }
    }

    useEffect(() => {
        const animate = () => {
            if (!imageRef.current) return

            const { x, y } = delayedMousePosition.current

            delayedMousePosition.current = {
                x: lerp(x, mousePosition.current.x, 0.05),
                y: lerp(y, mousePosition.current.y, 0.05),
            }

            const deg = 20
            gsap.set(imageRef.current, {
                rotateX: `${-delayedMousePosition.current.y * deg}deg`,
                rotateY: `${delayedMousePosition.current.x * deg}deg`,
            })

            window.requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return (
        <div
            ref={containerRef}
            onMouseOver={handleMouseOver}
            onMouseOut={handeMouseOut}
            onMouseMove={handleMouseMove}
            className='flex-1 lg:h-full flex items-center justify-center relative'
        >
            <Image
                src={LogoSvg}
                alt={'logo'}
                width={1000}
                height={1000}
                ref={imageRef}
                className='max-w-xl absolute translate-x-4 translate-y-4 blur-lg opacity-75 '
            />
            <Image
                src={LogoSvg}
                alt={'logo'}
                width={1000}
                height={1000}
                ref={imageRef}
                className='invert max-w-xl'
            />
        </div>
    )
}

export default Logo
