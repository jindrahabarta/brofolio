export interface IProject {
    name: string
    slug: string
    description: string
    image: string
    url: string
    badges: string[]
    color?: string
}

export const projectList: IProject[] = [
    {
        name: 'Drippy Rugs',
        slug: 'drippy-rugs',
        description: 'Zakázková výroba koberečků',
        image: '/images/Projects/DrippyRugs.webp',
        url: 'https://example.com/project1',
        badges: ['TypeScript', 'Next.js'],
        color: 'bg-red-400',
    },
    {
        name: 'Habartovi.cz',
        slug: 'habartovi',
        description: 'Soukromé ubytování a keramická dílna',
        image: '/images/Projects/Habartovi.webp',
        url: 'https://example.com/project2',
        badges: ['WordPress', 'Next.js'],
        color: 'bg-green-500',
    },
    {
        name: 'Printujto',
        slug: 'printujto',
        description: 'Zakázkový 3D tisk',
        image: '/images/Projects/Printujto.webp',
        url: 'https://example.com/project3',
        badges: ['Next.js', 'React', 'Express.js'],
        color: 'bg-violet-500',
    },
    {
        name: 'Avantgarda',
        slug: 'avantgarda',
        description: 'Solární studio',
        image: '/images/Projects/Avantgarda.webp',
        url: 'https://example.com/project3',
        badges: ['Next.js'],
        color: 'bg-orange-500',
    },
]
