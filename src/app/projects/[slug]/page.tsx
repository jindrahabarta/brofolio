import React from 'react'
import { projectList } from '@/_constants/projects'
import PageContent from './_components/PageContent'

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params

    const selectedProject = projectList.find((project) => {
        return project.slug === slug
    })

    console.log(selectedProject?.bannerImage)

    return {
        title: {
            default: `Projekty - ${selectedProject?.name}`,
        },
        description: selectedProject?.content[0].slice(0, 160),
        openGraph: {
            title: `Motionlabs | Projekt - ${selectedProject?.name}`,
            description: selectedProject?.content[0].slice(0, 160),
            images: selectedProject?.bannerImage,
        },
    }
}

const Project = () => {
    return <PageContent></PageContent>
}

export default Project
