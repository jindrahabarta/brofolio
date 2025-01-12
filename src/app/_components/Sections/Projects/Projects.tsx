import React from 'react'
import ProjectList from './ProjectList'
import Next from './Next'

const Projects = () => {
    return (
        <section
            id='projects'
            className='bg-gray-200 rounded-t-[2rem] sm:rounded-t-[3rem] overflow-hidden pb-32'
        >
            <header className='h-60 sm:h-80 flex items-center border-b border-gray-300 overflow-x-hidden px-4 sm:px-8'>
                <h1 className='flex flex-col text-[clamp(1rem,7.5vw,3.75rem)]'>
                    <em>Naše</em>
                    <strong> portfolio</strong>
                </h1>
            </header>

            <ProjectList />

            <footer className='h-96 flex flex-col justify-center items-center text-sm sm:text-base px-4 sm:px-8'>
                <h2 className='font-instrument text-3xl sm:text-4xl text-center max-w-[10em]'>
                    Všechny realizované projekty na kterých jsme pracovali
                </h2>
                <Next />
            </footer>
        </section>
    )
}

export default Projects
