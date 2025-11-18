import React from 'react'
import ProjectList from './ProjectList'
import Next from './Next'
import './style.css'
import { useTranslations } from 'next-intl'

const Projects = () => {
    const t = useTranslations('')
    return (
        <section id='projects' className='overflow-hidden sm:py-20'>
            <header className='h-60 sm:h-80 flex items-center border-b border-gray-700 overflow-x-hidden px-4 sm:px-8'>
                <h1
                    id='projectsTitle'
                    className='flex flex-col font-league uppercase text-[clamp(1rem,20vw,7.5rem)]'
                >
                    {t('projectsSection.title')}
                </h1>
            </header>

            <ProjectList />

            <footer className='h-96 flex flex-col justify-center items-center text-sm sm:text-base px-4 sm:px-8'>
                <h2
                    id='nextTitle'
                    className='text-3xl sm:text-3xl text-center text-white max-w-[10em]'
                >
                    {t('projectsSection.text')}
                </h2>
                <Next />
            </footer>
        </section>
    )
}

export default Projects
