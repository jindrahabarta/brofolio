import { Metadata } from 'next'
import React from 'react'
import ProjectsList from './_components/ProjectsList'

export const metadata: Metadata = {
    title: 'Projects | Motionlabs.cz',
    description: '',
}

const Projects = () => {
    return (
        <div className='pt-28 text-white h-screen bg-black overflow-hidden'>
            <ProjectsList></ProjectsList>
        </div>
    )
}

export default Projects
