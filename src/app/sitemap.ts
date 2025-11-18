import type { MetadataRoute } from 'next'
// import { projectList } from '@/_constants/projects'

// type ChangeFrequencyType =
//     | 'monthly'
//     | 'yearly'
//     | 'always'
//     | 'hourly'
//     | 'daily'
//     | 'weekly'
//     | 'never'
//     | undefined

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://motionlabs.cz'

    // const projects = projectList.map((project) => {
    //     return {
    //         url: `${baseUrl}/projects/${project.slug}`,
    //         lastModified: new Date(),
    //         changeFrequency: 'monthly' as ChangeFrequencyType,
    //         priority: 0.7,
    //     }
    // })

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
            alternates: {
                languages: {
                    cs: `https://motionlabs.cz/cs`,
                    en: `https://motionlabs.cz/en`,
                },
            },
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            alternates: {
                languages: {
                    cs: `https://motionlabs.cz/cs/projects`,
                    en: `https://motionlabs.cz/en/projects`,
                },
            },
        },
        // ...projects,
    ]
}
