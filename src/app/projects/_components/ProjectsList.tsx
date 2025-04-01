'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import Project from './Project'
import { useRouter } from 'next/navigation'

import { projectList } from '@/_constants/projects'
import { lerp } from '@/_utils/lerp'

const ProjectsList = () => {
    const [hoveredProject, setHoveredProject] = useState<null | string>(null)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const cursor = useRef<HTMLImageElement | null>(null)
    const router = useRouter()

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

        if (!cursor.current) return

        if (x + cursor.current?.offsetWidth > window.innerWidth) {
            newX = window.innerWidth - cursor.current?.offsetWidth - 30
            xd = -10
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
            x: lerp(x, mousePosition.current.x, 0.2),
            y: lerp(y, mousePosition.current.y, 0.2),
        }

        moveMouse(
            delayedMousePosition.current.x,
            delayedMousePosition.current.y
        )
        window.requestAnimationFrame(animate)
    }

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        slug: string
    ) => {
        e.preventDefault()
        cursor.current = null
        setIsTransitioning(true)
        setHoveredProject(hoveredProject)

        const mm = gsap.matchMedia()

        gsap.to('#footer', {
            opacity: 0,
        })

        mm.add('(max-width: 639px)', () => {
            router.push(`/projects/${slug}`)
        })

        //Tablet + PC
        mm.add('(min-width: 640px)', () => {
            gsap.to('.projectsListItem', {
                x: 50,
                opacity: 0,
                duration: 0.1,
                stagger: 0.1,
                onComplete: () => {
                    gsap.to('#projectsImage', {
                        top: 0,
                        left: 0,
                        borderRadius: 0,
                        width: '100%',
                        height: '50vh',
                        aspectRatio: 'auto',
                        opacity: 1,
                        xPercent: 0,
                        yPercent: 0,
                        x: 0,
                        y: 0,
                        duration: 1.2,
                        ease: 'power2.out',

                        onComplete: () => {
                            router.push(`/projects/${slug}`)
                        },
                    })
                },
            })
        })
    }

    useEffect(() => {
        animate()
        window.addEventListener('mousemove', getMousePosition)
        return () => window.removeEventListener('mousemove', getMousePosition)
    }, [])

    useEffect(() => {
        if (hoveredProject !== null) {
            gsap.set('#projectsImage', {
                scale: 0,
                height: 0,
            })

            gsap.to('#projectsImage', {
                height: 'auto',
                scale: 1,
                duration: 0.2,
            })
        }
    }, [hoveredProject])

    return (
        <>
            <ul className=''>
                {projectList.map((project, i) => (
                    <React.Fragment key={project.name}>
                        <Project
                            handleMouseEnter={() => {
                                if (isTransitioning) return

                                setHoveredProject(project.bannerImage)
                            }}
                            handleMouseLeave={() => {
                                if (isTransitioning) return

                                setHoveredProject(null)
                            }}
                            handleClick={(e) => {
                                if (isTransitioning) return

                                handleClick(e, project.slug)
                            }}
                            project={project}
                            i={i + 1}
                        ></Project>
                    </React.Fragment>
                ))}
            </ul>

            {window.innerWidth >= 640 && hoveredProject !== null && (
                <Image
                    ref={cursor}
                    id='projectsImage'
                    className='w-40 sm:w-72 scale-0 object-ćenter opacity-80 aspect-video origin-[center_15%] pointer-events-none select-none fixed top-0 left-0 object-cover rounded-lg z-20 -translate-y-1/2'
                    src={hoveredProject}
                    alt={'ProjectsImage'}
                    width={1200}
                    height={1000}
                ></Image>
            )}
        </>
    )
}

export default ProjectsList
