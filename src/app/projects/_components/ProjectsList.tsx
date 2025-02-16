'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import Project from './Project'

import testImg from '@/../public/images/Projects/Avantgarda_.webp'

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

const ProjectsList = () => {
    const cursor = useRef<HTMLImageElement | null>(null)
    const mousePosition = useRef({
        x: 0,
        y: 0,
    })
    const delayedMousePosition = useRef({
        x: 0,
        y: 0,
    })

    function getMousePosition(e: MouseEvent) {
        mousePosition.current = {
            x: e.clientX,
            y: e.clientY,
        }
    }

    function moveMouse(x: number, y: number) {
        let newX = x
        let xd = -10

        if (x + cursor.current?.offsetWidth > window.innerWidth) {
            newX = window.innerWidth - cursor.current?.offsetWidth - 30
            xd = -110
        }

        gsap.set(cursor.current, {
            x: newX,
            y,
            xPercent: xd,
            yPercent: -50,
        })
    }

    function animate() {
        const { x, y } = delayedMousePosition.current

        delayedMousePosition.current = {
            x: lerp(x, mousePosition.current.x, 0.1),
            y: lerp(y, mousePosition.current.y, 0.1),
        }

        moveMouse(
            delayedMousePosition.current.x,
            delayedMousePosition.current.y
        )
        window.requestAnimationFrame(animate)
    }

    useEffect(() => {
        animate()
        window.addEventListener('mousemove', getMousePosition)
        return () => window.removeEventListener('mousemove', getMousePosition)
    }, [])
    return (
        <ul className='overflow-hidden'>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>

            <Image
                ref={cursor}
                className={`projectImage w-48 pointer-events-none origin-center select-none absolute top-0 left-0 aspect-[4/5] object-cover rounded-lg z-20 -translate-y-1/2`}
                src={testImg}
                alt={'alsdjfas'}
                width={500}
                height={800}
            ></Image>
        </ul>
    )
}

export default ProjectsList
