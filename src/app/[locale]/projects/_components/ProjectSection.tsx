'use client'
import { IProject } from '@/_constants/projects'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ArrowBack from '@/_assets/icons/global/ArrowBack'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ProjectSection = ({
    project,
    isEven,
    index,
}: {
    project: IProject
    isEven: boolean
    index: number
}) => {
    const sectionRef = useRef<null | HTMLElement>(null)

    useEffect(() => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',

            onEnter: () => {
                gsap.to(`#ProjectImage${index}`, {
                    filter: 'grayscale(0)',
                    delay: 0.5,
                })

                gsap.to(`.stagger-${index}`, {
                    opacity: 1,
                    delay: 0.5,
                    stagger: 0.4,
                })
            },
        })
    }, [])

    return (
        <section
            ref={sectionRef}
            className={`projectSection flex-col sm:flex-row ${
                isEven && 'sm:flex-row-reverse'
            } flex gap-4 h-[100dvh] min-h-screen`}
        >
            <div className='flex-1 h-full overflow-hidden aspect-video sm:aspect-auto'>
                <Image
                    src={project.bannerImage}
                    alt={`Project Logo`}
                    width={1500}
                    height={1500}
                    id={`ProjectImage${index}`}
                    className=' w-full h-full sm:min-h-screen object-cover grayscale'
                ></Image>
            </div>
            <div className='flex-1 flex items-end p-4 pb-8'>
                <div>
                    <div>
                        <Image
                            src={project.logo}
                            alt={`Project Logo`}
                            width={300}
                            height={300}
                            className={`w-full max-w-40 sm:max-w-72 stagger-${index} opacity-0`}
                        ></Image>
                    </div>
                    <h1
                        id='heading'
                        className={`bottom-4 text-[5vw] sm:text-[2.5vw] stagger-${index} opacity-0`}
                    >
                        <div className=' font-charm text-[7vw] sm:text-[2vw] leading-relaxed'>
                            Projekt
                        </div>
                        <strong>{project.name}</strong>
                    </h1>

                    <p
                        className={`mt-4 max-w-3xl font-mono stagger-${index} opacity-0`}
                    >
                        {project.content}
                    </p>

                    <div
                        className={`mt-4 flex items-center gap-4 stagger-${index} opacity-0`}
                    >
                        <span>{project.url}</span>
                        <Link
                            href={project.url}
                            target='_blank'
                            className='relative  flex justify-center items-center border relatve border-white rounded-full w-20 aspect-square group hover:scale-110 duration-200'
                            aria-label='See the project'
                        >
                            <figure className='w-full h-full bg-gray-300 absolute top-0 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 delay-100 duration-300 ease-out'>
                                <div className='w-full h-full bg-white rounded-full scale-0 group-hover:scale-100 delay-200 duration-300 ease-out'></div>
                            </figure>

                            <span className='relative font-semibold duration-200 delay-100 flex flex-col justify-start h-8 overflow-hidden'>
                                <span className='h-8 text-white group-hover:text-black duration-200 delay-100 flex justify-center items-center '>
                                    <ArrowBack className='h-8 rotate-180'></ArrowBack>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
