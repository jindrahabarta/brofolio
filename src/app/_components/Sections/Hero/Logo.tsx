import React, { MouseEventHandler, useEffect, useRef } from 'react'
import Image from 'next/image'
import LogoSvg from '@/../public/brand/ml_logo.svg'
import gsap from 'gsap'
import { lerp } from '@/_utils/lerp'
import MlLogoStroke from '@/_assets/brand/MlLogoStroke'

const Logo = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const logoRef = useRef<HTMLImageElement | null>(null)
    const stroke1Ref = useRef<SVGSVGElement | null>(null)
    const stroke2Ref = useRef<SVGSVGElement | null>(null)
    const stroke3Ref = useRef<SVGSVGElement | null>(null)

    const imageRefShadow = useRef<HTMLImageElement | null>(null)

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
        if (!logoRef.current) return

        mousePosition.current = {
            x: 0,
            y: 0,
        }
    }

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        if (!containerRef.current || !logoRef.current) return

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
            if (!logoRef.current) return

            const { x, y } = delayedMousePosition.current

            delayedMousePosition.current = {
                x: lerp(x, mousePosition.current.x, 0.07),
                y: lerp(y, mousePosition.current.y, 0.07),
            }

            const deg = 26
            const offsetDeg = 10

            gsap.set(logoRef.current, {
                rotateX: `${
                    -delayedMousePosition.current.y * deg + offsetDeg
                }deg`,
                rotateY: `${
                    delayedMousePosition.current.x * deg + offsetDeg
                }deg`,
            })

            gsap.set(stroke1Ref.current, {
                rotateX: `${
                    -delayedMousePosition.current.y * deg + offsetDeg
                }deg`,
                rotateY: `${
                    delayedMousePosition.current.x * deg + offsetDeg
                }deg`,
                translateX: `${delayedMousePosition.current.x * 1 + 0.5}rem`,
                translateY: `${delayedMousePosition.current.y * 1 + 0.5}rem`,
            })

            gsap.set(stroke2Ref.current, {
                rotateX: `${
                    -delayedMousePosition.current.y * deg + offsetDeg
                }deg`,
                rotateY: `${
                    delayedMousePosition.current.x * deg + offsetDeg
                }deg`,
                translateX: `${delayedMousePosition.current.x * 2 + 1}rem`,
                translateY: `${delayedMousePosition.current.y * 2 + 1}rem`,
            })

            gsap.set(stroke3Ref.current, {
                rotateX: `${
                    -delayedMousePosition.current.y * deg + offsetDeg
                }deg`,
                rotateY: `${
                    delayedMousePosition.current.x * deg + offsetDeg
                }deg`,
                translateX: `${delayedMousePosition.current.x * 3 + 1.5}rem`,
                translateY: `${delayedMousePosition.current.y * 3 + 1.5}rem`,
            })

            gsap.set(imageRefShadow.current, {
                rotateX: `${
                    -delayedMousePosition.current.y * deg + offsetDeg
                }deg`,
                rotateY: `${
                    delayedMousePosition.current.x * deg + offsetDeg
                }deg`,
                translateX: `${delayedMousePosition.current.x * 4 + 4}rem`,
                translateY: `${delayedMousePosition.current.y * 4 + 4}rem`,
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
            className='md:flex-1 lg:h-full w-full flex items-center justify-center relative max-w-80 sm:max-w-md md:max-w-none'
        >
            <Image
                src={LogoSvg}
                alt={'logo'}
                width={1000}
                height={1000}
                ref={imageRefShadow}
                className='max-w-xl absolute  blur-lg opacity-50'
            />

            <MlLogoStroke
                ref={stroke3Ref}
                className='max-w-xl absolute translate-x-6 translate-y-6 text-motionGreen'
                style={{ transform: 'rotate3d(1, 1, 0, 10deg)' }}
            ></MlLogoStroke>

            <MlLogoStroke
                ref={stroke2Ref}
                className='max-w-xl absolute translate-x-4 translate-y-4  text-motionEmerald'
                style={{ transform: 'rotate3d(1, 1, 0, 10deg)' }}
            ></MlLogoStroke>
            <MlLogoStroke
                ref={stroke1Ref}
                className='heroLogo max-w-xl absolute translate-x-2 translate-y-2  text-motionBlue'
                style={{ transform: 'rotate3d(1, 1, 0, 10deg)' }}
            ></MlLogoStroke>

            <Image
                src={LogoSvg}
                alt={'logo'}
                width={1000}
                height={1000}
                ref={logoRef}
                className='invert max-w-xl w-full'
                style={{ transform: 'rotate3d(1, 1, 0, 10deg)' }}
            />
        </div>
    )
}

export default Logo
