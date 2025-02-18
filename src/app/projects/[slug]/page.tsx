'use client'
import React from 'react'
import Image from 'next/image'

import { projectList } from '@/_constants/projects'
import { useParams } from 'next/navigation'

const Project = () => {
    const { slug } = useParams()

    const selectedProject = projectList.find((project) => {
        return project.slug === slug
    })

    if (!selectedProject)
        return (
            <section className='text-white h-screen bg-black overflow-hidden flex flex-col justify-center'>
                <h1 className=' bottom-4 text-[4vw] left-4 text-center'>
                    <strong>ProjectnotFound</strong>
                </h1>
            </section>
        )

    return (
        <section className='text-white  h-screen bg-black overflow-hidden'>
            <div className='w-full h-[50vh]'>
                <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.name} Banner Image`}
                    width={1500}
                    height={1000}
                    className='w-full h-full object-cover'
                ></Image>
            </div>

            <h1 className=' bottom-4 text-[4vw] left-4 text-center'>
                <strong>{selectedProject.name}</strong>
            </h1>
        </section>
    )
}

export default Project
