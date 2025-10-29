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
            default: `Motionlabs | Projekt - ${selectedProject?.name}`,
        },
        description: selectedProject?.content[0].slice(0, 160),
        openGraph: {
            title: `Motionlabs | Projekt - ${selectedProject?.name}`,
            description: selectedProject?.content[0].slice(0, 160),
            images: selectedProject?.bannerImage,
        },
        icons: {
            icon: [
                {
                    media: '(prefers-color-scheme: light)',
                    url: '/brand/favicon-dark.ico',
                    href: '/brand/favicon-dark.ico',
                },
                {
                    media: '(prefers-color-scheme: dark)',
                    url: '/brand/favicon-light.ico',
                    href: '/brand/favicon-light.ico',
                },
            ],
            apple: [
                {
                    media: '(prefers-color-scheme: light)',
                    url: '/brand/apple-touch-icon-dark.png',
                    href: '/brand/apple-touch-icon-dark.png',
                },
                {
                    media: '(prefers-color-scheme: dark)',
                    url: '/brand/apple-touch-icon-light.png',
                    href: '/brand/apple-touch-icon-light.png',
                },
            ],
        },
    }
}

const Project = () => {
    return <PageContent></PageContent>
}

export default Project
