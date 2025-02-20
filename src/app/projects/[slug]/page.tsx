'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import { projectList } from '@/_constants/projects'
import { useParams } from 'next/navigation'
import ArrowBack from '@/_assets/icons/global/ArrowBack'
import Link from 'next/link'

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
            <section className='text-white min-h-screen bg-black overflow-hidden flex flex-col justify-center'>
                <h1 className=' bottom-4 text-[4vw] left-4 text-center'>
                    <strong>ProjectnotFound</strong>
                </h1>
            </section>
        )

    return (
        <div className=' text-white min-h-screen bg-black overflow-hidden'>
            <section
                style={{
                    background: `url(${selectedProject.bannerImage})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: '0 15%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
                className='h-[50vh] w-full relative'
            >
                <figure
                    id='bannerOverlay'
                    className='absolute top-0 left-0 w-full h-full bg-black/0 flex items-end justify-start px-10'
                >
                    <Link
                        href={'/projects'}
                        className='flex justify-center items-center border relatve border-white rounded-full w-20 aspect-square translate-y-1/2 group hover:scale-110 duration-200'
                    >
                        <figure className='w-full h-full bg-gray-300 absolute top-0 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 delay-100 duration-300 ease-out'>
                            <div className='w-full h-full bg-white rounded-full scale-0 group-hover:scale-100 delay-200 duration-300 ease-out'></div>
                        </figure>

                        <span className='relative font-semibold duration-200 delay-100 flex flex-col justify-start h-8 overflow-hidden'>
                            <span className='h-8 group-hover:text-black duration-200 delay-100 flex justify-center items-center group-hover:pr-1 pr-0'>
                                <ArrowBack className='h-8'></ArrowBack>
                            </span>
                        </span>
                    </Link>
                    <Link
                        href={'/projects'}
                        className='border flex justify-center items-center relatve border-white rounded-full w-20 aspect-square translate-y-1/2 group hover:scale-110 duration-200'
                    >
                        <figure className='w-full h-full bg-gray-300 absolute top-0 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 delay-100 duration-300 ease-out'>
                            <div className='w-full h-full bg-white rounded-full scale-0 group-hover:scale-100 delay-200 duration-300 ease-out'></div>
                        </figure>

                        <span className='relative font-semibold  duration-200 delay-100 flex flex-col justify-start h-[1.1em] overflow-hidden'>
                            <span className=' leading-[1.1em] group-hover:translate-y-[1.1em] duration-200 delay-100'>
                                Jít zpět
                            </span>
                            <span className=' leading-[1.1em] group-hover:-translate-y-[1.1em] delay-100 duration-200 text-black'>
                                Jít zpět
                            </span>
                        </span>
                    </Link>
                </figure>
            </section>

            <section className='py-16 px-10'>
                <div className='flex w-full items-center justify-between'>
                    <div className=''>
                        <h1 id='heading' className=' bottom-4 text-[2.5vw] '>
                            <div className='font-charm text-[2vw] leading-relaxed'>
                                Projekt
                            </div>
                            <strong>{selectedProject.name}</strong>
                        </h1>

                        <p className='mt-4 max-w-3xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti fuga ab veriasdfasdf asd fasd fasd fa
                            sdfas
                        </p>
                    </div>
                    <div>
                        <Image
                            src={'/images/Projects/Logo/HabartoviLogo.svg'}
                            alt={'ProjectLogo'}
                            width={300}
                            height={300}
                        ></Image>
                    </div>
                </div>

                <p className='mt-16'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti fuga ab veriasdfasdf asd fasd fasd fa sdfas Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                    provident nesciunt aliquam. Id alias odio assumenda facilis
                    vel! Ducimus quod veniam explicabo ipsam excepturi totam
                    delectus cumque? Soluta, ipsa nesciunt.
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

            <section className='py-16 px-10'>
                <header>
                    <h2 className='leading-normal text-xl text-center'>
                        <em className='block origin-left'>
                            Chceš s náma rozjet projekt?
                        </em>
                    </h2>
                    <h1 className='text-[clamp(1rem,7.5vw,3rem)] leading-[1.1em] mt-2 text-center'>
                        <strong className='inline-block '>Napiš nám</strong>
                    </h1>
                </header>
            </section>
        </div>
    )
}

export default Project
