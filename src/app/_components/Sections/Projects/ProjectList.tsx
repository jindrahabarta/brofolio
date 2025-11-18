import React from 'react'
import { getProjects } from '@/_constants/projects'
import ListItem from './ListItem'
import { useTranslations } from 'next-intl'

const ProjectList = () => {
    const t = useTranslations('projects')
    const projectList = getProjects(t)
    return (
        <ul className='flex flex-col'>
            {projectList
                .filter((project) => project.pin)
                .map((project, index) => (
                    <ListItem
                        key={`${index}-${project.name}`}
                        project={project}
                    />
                ))}
        </ul>
    )
}

export default ProjectList
