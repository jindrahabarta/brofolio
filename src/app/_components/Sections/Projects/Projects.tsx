import { projectList } from '@/_constants/projects'
import React from 'react'

const Projects = () => {
    return (
        <section>
            <header className='h-96 flex items-center border-b border-gray-400 px-8'>
                <h1>
                    <em>Our</em> <strong>projects</strong>
                </h1>
            </header>
            <ul className='flex flex-col'>
                {projectList.map((project, index) => (
                    <li
                        key={`${index}-${project.name}`}
                        className='h-96 relative border-b border-gray-400 overflow-hidden'
                    >
                        <article className='h-96 w-full flex flex-col md:flex-row md:justify-between md:items-center p-8'>
                            <section>
                                <h2 className='font-instrument text-3xl'>
                                    {project.description}
                                </h2>
                                <h1>{project.name}</h1>
                            </section>
                            <section>obrazek</section>
                        </article>
                    </li>
                ))}
            </ul>
            <footer></footer>
        </section>
    )
}

export default Projects
