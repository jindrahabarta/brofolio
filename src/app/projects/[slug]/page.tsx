'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import { projectList } from '@/_constants/projects'
import { useParams } from 'next/navigation'

const Project = () => {
    const { slug } = useParams()

    const selectedProject = projectList.find((project) => {
        return project.slug === slug
    })

    useEffect(() => {
        const landingTl = gsap
            .timeline({ defaults: { duration: 1 } })
            .to('#bannerOverlay', {
                backgroundColor: 'rgba(0,0,0,0.2)',
            })
            .to('#heading', {
                opacity: 1,
            })
        landingTl.play()
    }, [])

    if (!selectedProject)
        return (
            <section className='text-white h-screen bg-black overflow-hidden flex flex-col justify-center'>
                <h1 className=' bottom-4 text-[4vw] left-4 text-center'>
                    <strong>ProjectnotFound</strong>
                </h1>
            </section>
        )

    return (
        <div className='text-white h-screen bg-black overflow-hidden'>
            <section className=' h-[50vh] relative'>
                <figure
                    id='bannerOverlay'
                    className='absolute top-0 left-0 w-full h-full bg-black/0'
                ></figure>
                <Image
                    src={selectedProject.bannerImage}
                    alt={`${selectedProject.name} Banner Image`}
                    width={1500}
                    height={1000}
                    className='w-full h-full object-cover object-[0_15%]'
                ></Image>
            </section>

            <section className='mt-16 px-10'>
                <h1
                    id='heading'
                    className=' bottom-4 text-[2.5vw] left-4 opacity-0'
                >
                    <div className='font-charm text-[2vw] leading-relaxed'>
                        Projekt
                    </div>
                    <strong>{selectedProject.name}</strong>
                </h1>

                <p className='mt-4 max-w-3xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti fuga ab veriasdfasdf asd fasd fasd fa sdfas
                </p>

                <p className='mt-16'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti fuga ab veriasdfasdf asd fasd fasd fa sdfas Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                    provident nesciunt aliquam. Id alias odio assumenda facilis
                    vel! Ducimus quod veniam explicabo ipsam excepturi totam
                    delectus cumque? Soluta, ipsa nesciunt.
                </p>
            </section>
        </div>
    )
}

export default Project
