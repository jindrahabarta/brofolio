import React from 'react'
import { projectList } from '@/_constants/projects'
import PageContent from './_components/PageContent'

interface IParams {
    slug: string
}

export const generateMetadata = async ({ params }: { params: IParams }) => {
    const { slug } = await params

    const selectedProject = projectList.find((project) => {
        return project.slug === slug
    })

    return {
        title: `Project ${selectedProject?.name} | Motionlabs.cz`,
    }
}

const Project = () => {
    return <PageContent></PageContent>
}

export default Project
