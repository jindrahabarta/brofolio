import type { MetadataRoute } from 'next'
import { projectList } from '@/_constants/projects'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://motionlabs.cz'

    const projects = projectList.map((project) => {
        return {
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        }
    })

    console.log(projects)

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...projects,
    ]
}
