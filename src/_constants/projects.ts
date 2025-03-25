export interface IProject {
    name: string
    slug: string
    description: string
    coverImage: string
    bannerImage: string
    url: string
    target: '_blank' | '_self'
    badges: string[]
    pin: boolean
    color?: string
}

export const projectList: IProject[] = [
    {
        name: 'Drippy Rugs',
        slug: 'drippy-rugs',
        description: 'Zakázková výroba koberečků',
        coverImage: '/images/Projects/dr_small.webp',
        bannerImage: '/images/Projects/dr_full.webp',
        url: 'https://drippyrugs.netlify.app/',
        target: '_blank',
        badges: ['TypeScript', 'Next.js'],
        pin: false,
        color: 'bg-red-400',
    },
    {
        name: 'Printujto',
        slug: 'printujto',
        description: 'Zakázkový 3D tisk',
        coverImage: '/images/Projects/printujto_small.webp',
        bannerImage: '/images/Projects/printujto_full.webp',
        url: 'https://printujto.cz/',
        target: '_blank',
        badges: ['Next.js', 'React', 'Express.js'],
        pin: true,
        color: 'bg-violet-500',
    },
    {
        name: 'Avantgarda',
        slug: 'avantgarda',
        description: 'Solární studio',
        coverImage: '/images/Projects/avantgarda_small.webp',
        bannerImage: '/images/Projects/avantgarda_full.webp',
        url: 'https://solariumolomouc.cz/',
        target: '_blank',
        badges: ['Next.js'],
        pin: true,
        color: 'bg-orange-500',
    },
    {
        name: 'Habartovi.cz',
        slug: 'habartovi',
        description: 'Soukromé ubytování a keramická dílna',
        coverImage: '/images/Projects/habartovi_small.webp',
        bannerImage: '/images/Projects/habartovi_full.webp',
        url: 'https://www.habartovi.cz/',
        target: '_blank',
        badges: ['WordPress', 'Next.js'],
        pin: true,
        color: 'bg-orange-400',
    },
]
