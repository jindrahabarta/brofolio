import React from 'react'
import { projectList } from '@/_constants/projects'
import ListItem from './ListItem'

const ProjectList = () => {
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
