import React from 'react'
import { projectList } from '@/_constants/projects'
import ListItem from './ListItem'

const ProjectList = () => {
    return (
        <ul className='flex flex-col'>
            {projectList.slice(0, 3).map((project, index) => (
                <ListItem key={`${index}-${project.name}`} project={project} />
            ))}
        </ul>
    )
}

export default ProjectList
