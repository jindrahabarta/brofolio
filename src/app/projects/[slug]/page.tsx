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
        <>
            <section className='h-[50vh] w-full fixed'>
                <Image
                    src={selectedProject.bannerImage}
                    alt={'Banner image'}
                    width={1500}
                    height={1000}
                    className='object-cover w-full h-full object-center'
                    priority
                ></Image>
                /
                <figure
                    id='bannerOverlay'
                    className='absolute top-0 left-0 w-full h-full bg-black/0 flex items-end justify-start px-10'
                >
                    {/* <Links
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
                    </Links> */}
                </figure>
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
                <section className='py-16 px-10 bg-black '>
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

                            <p className='mt-4 max-w-3xl staggerText opacity-0'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corrupti fuga ab veriasdfasdf
                                asd fasd fasd fa sdfas
                            </p>
                        </div>
                        <div>
                            <Image
                                src={'/images/Projects/Logo/HabartoviLogo.svg'}
                                alt={'ProjectLogo'}
                                width={300}
                                height={300}
                                className='staggerText opacity-0'
                            ></Image>
                        </div>
                    </div>

                    <p className='mt-16 staggerText opacity-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti fuga ab veriasdfasdf asd fasd fasd fa sdfas
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo provident nesciunt aliquam. Id alias odio
                        assumenda facilis vel! Ducimus quod veniam explicabo
                        ipsam excepturi totam delectus cumque? Soluta, ipsa
                        nesciunt.
                    </p>
                    <p className='mt-16 staggerText opacity-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti fuga ab veriasdfasdf asd fasd fasd fa sdfas
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo provident nesciunt aliquam. Id alias odio
                        assumenda facilis vel! Ducimus quod veniam explicabo
                        ipsam excepturi totam delectus cumque? Soluta, ipsa
                        nesciunt.
                    </p>
                </section>

                <section className='py-16 px-10 bg-black'>
                    {/* <header>
                        <h2 className='leading-normal text-xl text-center'>
                            <em className='block origin-left'>
                                Chceš s náma rozjet projekt?
                            </em>
                        </h2>
                        <h1 className='text-[clamp(1rem,7.5vw,3rem)] leading-[1.1em] mt-2 text-center'>
                            <strong className='inline-block '>Napiš nám</strong>
                        </h1>
                    </header> */}
                    <div className='flex justify-center'>
                        <ContactForm textColor='text-white'></ContactForm>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Project
