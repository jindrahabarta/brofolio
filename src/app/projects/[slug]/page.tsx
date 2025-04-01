import React from 'react'
import { projectList } from '@/_constants/projects'
import PageContent from './_components/PageContent'

export const generateMetadata = async ({
    params,
}: {
    params: { slug: string }
}) => {
    const { slug } = params

    console.log(slug)

    const selectedProject = projectList.find((project) => {
        return project.slug === slug
    })

    return {
        title: `Projekt ${selectedProject?.name} | Motionlabs.cz`,
        description: selectedProject?.content[0].slice(0, 160),
        openGraph: {
            title: `Motionlabs | Projekt - ${selectedProject?.name}`,
            description: selectedProject?.content[0].slice(0, 160),
            images: [selectedProject?.bannerImage],
        },
    }
}

const Project = () => {
    return <PageContent></PageContent>
}

export default Project
