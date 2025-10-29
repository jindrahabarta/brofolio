import { Metadata } from 'next'
import React from 'react'
import ProjectsList from './_components/ProjectsList'

export const metadata: Metadata = {
    title: 'Motionlabs | Projekty',
    description:
        'Projekty za kterými si stojíme. U každého projektu nám záleží hlavně na spokojenosti zákazníka. Design, animace a přehlednost jsou naším standardem.',
}

const Projects = () => {
    // TODO: Scroll to top on mount
    return (
        <div className='pt-[7.5rem] text-white min-h-screen bg-black overflow-hidden'>
            <ProjectsList></ProjectsList>

            <section className='projectsListItem pt-24 pb-32'>
                <p className='font-charm text-center text-[clamp(2vw,7vw,2rem)]'>
                    ...Na dobré se musí počkat :&#41;
                </p>
            </section>
        </div>
    )
}

export default Projects
