'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import { projectList } from '@/_constants/projects'
import { useParams } from 'next/navigation'
import ArrowBack from '@/_assets/icons/global/ArrowBack'
import Link from 'next/link'

import ContactForm from '@/_components/ContactForm/ContactForm'

const Project = () => {
    const { slug } = useParams()

    const selectedProject = projectList.find((project) => {
        return project.slug === slug
    })

    useEffect(() => {
        const landingTl = gsap
            .timeline({ defaults: { duration: 1 } })
            .set('#footer', {
                opacity: 1,
            })
            .set(document.body, {
                backgroundColor: 'black'
            })
            .to('#bannerOverlay', {
                backgroundColor: 'rgba(0,0,0,0.2)',
            })
            .to('#backBtn', {
                opacity: 1,
            })
            .to(
                '.staggerText',
                {
                    opacity: 1,
                    stagger: 0.2,
                },
                '<'
            )
        landingTl.play()
    }, [slug])

    if (!selectedProject)
        return (
            <section className='text-white min-h-screen bg-black overflow-hidden flex flex-col justify-center'>
                <h1 className=' bottom-4 text-[4vw] left-4 text-center'>
                    <strong>ProjectnotFound</strong>
                </h1>
            </section>
        )

    return (
        <>
            <section className='h-[50vh] w-full fixed'>
                <Image
                    src={selectedProject.bannerImage}
                    alt={`${selectedProject.name} Banner Image`}
                    width={1500}
                    height={1000}
                    className='object-cover w-full h-full object-center'
                    priority
                ></Image>
                /
                <figure
                    id='bannerOverlay'
                    className='absolute top-0 left-0 w-full h-full bg-black/0 flex items-end justify-start px-10'
                ></figure>
            </section>
            <div className=' text-white min-h-screen overflow-hidden relative'>
                <section className='h-[50vh] flex justify-start items-end px-10'>
                    <Link
                        href={'/projects'}
                        id='backBtn'
                        className='opacity-0 flex justify-center items-center border relatve border-white rounded-full w-20 aspect-square translate-y-1/2 group hover:scale-110 duration-200'
                    >
                        <figure className='w-full h-full bg-gray-300 absolute top-0 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 delay-100 duration-300 ease-out'>
                            <div className='w-full h-full bg-white rounded-full scale-0 group-hover:scale-100 delay-200 duration-300 ease-out'></div>
                        </figure>

                        <span className='relative font-semibold duration-200 delay-100 flex flex-col justify-start h-8 overflow-hidden'>
                            <span className='h-8 text-white group-hover:text-black duration-200 delay-100 flex justify-center items-center '>
                                <ArrowBack className='h-8'></ArrowBack>
                            </span>
                        </span>
                    </Link>
                </section>
                <section className='py-16 px-4 sm:px-10 bg-black '>
                    <div className='flex w-full sm:items-center justify-between flex-col sm:flex-row gap-8'>
                        <div className=''>
                            <h1
                                id='heading'
                                className=' bottom-4 text-[5vw] sm:text-[2.5vw] '
                            >
                                <div className='staggerText opacity-0 font-charm text-[7vw] sm:text-[2vw] leading-relaxed'>
                                    Projekt
                                </div>
                                <strong className='staggerText opacity-0'>
                                    {selectedProject.name}
                                </strong>
                            </h1>

                            <p className='mt-4 max-w-3xl staggerText opacity-0 font-mono'>
                                {selectedProject.content[0]}
                            </p>
                        </div>
                        <div>
                            <Image
                                src={selectedProject.logo}
                                alt={`${selectedProject.name} Logo`}
                                width={300}
                                height={300}
                                className='staggerText opacity-0 w-full max-w-none sm:max-w-40 md:max-w-72'
                            ></Image>
                        </div>
                    </div>

                    {selectedProject.content.slice(1).map((p, i) => {
                        if (p.includes('<h2>'))
                            return (
                                <h2
                                    key={i}
                                    className='font-mono text-2xl sm:text-3xl mt-16 staggerText opacity-0'
                                >
                                    {p.split('<h2>')[1]}
                                </h2>
                            )

                        return (
                            <p
                                key={i}
                                className='mt-8 staggerText opacity-0 font-mono'
                            >
                                {p}
                            </p>
                        )
                    })}
                </section>

                <section className='py-16 px-10 bg-black'>
                    <div className='flex justify-center'>
                        <ContactForm textColor='text-white'></ContactForm>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Project
