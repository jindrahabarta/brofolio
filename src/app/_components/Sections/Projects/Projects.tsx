import React from 'react'
import ProjectList from './ProjectList'
import Next from './Next'

const Projects = () => {
    return (
        <section
            id='projects'
            className='bg-white rounded-t-[4rem] overflow-hidden pb-32'
        >
            <header className='h-96 flex items-center border-b border-gray-400 overflow-x-hidden px-8'>
                <h1 className='text-[clamp(1rem,8vw,3.75rem)]'>
                    <em>Naše</em>
                    <strong> portfolio</strong>
                </h1>
            </header>

            <ProjectList />

            <footer className='h-96 flex flex-col justify-center items-center px-8'>
                <h3>
                    <strong>Ostatní</strong>
                </h3>
                <h2 className='font-instrument text-5xl text-center max-w-[9em]'>
                    An assortment of visuals not in a project.
                </h2>
                <Next />
            </footer>
        </section>
    )
}

export default Projects
