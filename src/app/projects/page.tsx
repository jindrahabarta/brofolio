import { Metadata } from 'next'
import React from 'react'
import ProjectsScroller from './_components/ProjectsScroller'

export const metadata: Metadata = {
    title: 'Projects | Motionlabs.cz',
    description: '',
}

const Projects = () => {
    return (
        <section className='text-white h-screen bg-black overflow-hidden '>
            <ProjectsScroller></ProjectsScroller>
        </section>
    )
}

export default Projects
