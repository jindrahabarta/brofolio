import React from 'react'
import { projectList } from '@/_constants/projects'
import ListItem from './ListItem'

const ProjectList = () => {
    return (
        <ul className='flex flex-col'>
            {projectList.map((project, index) => (
                <li key={`${index}-${project.name}`}>
                    <ListItem project={project} />
                </li>
            ))}
        </ul>
    )
}

export default ProjectList
