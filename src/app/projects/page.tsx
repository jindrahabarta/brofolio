import { Metadata } from 'next'
import React from 'react'
import ProjectsList from './_components/ProjectsList'

export const metadata: Metadata = {
    title: 'Projekty | Motionlabs.cz',
    description: '',
}

const Projects = () => {
    return (
        <div className='pt-[7.5rem] text-white min-h-screen bg-black overflow-hidden'>
            <ProjectsList></ProjectsList>

            <section className='projectsListItem pt-24 pb-32'>
                <p className='font-charm text-center text-[clamp(3vw,7vw,2rem)]'>
                    ...víc toho tady zatím není :&#40;
                </p>
            </section>
        </div>
    )
}

export default Projects
