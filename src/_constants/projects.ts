export interface IProject {
    name: string
    slug: string
    description: string
    coverImage: string
    bannerImage: string
    logo: string
    url: string
    target: '_blank' | '_self'
    badges: string[]
    pin: boolean
    color?: string
    content: string
}

export const getProjects = (
    t: (
        key: string,
        values?: Record<string, string | number | Date> | undefined
    ) => string
) => {
    const projectList: IProject[] = [
        {
            name: 'Lucie co ráda fotí',
            slug: 'lucie-co-rada-foti',
            description: 'Rodinné a svatební focení',
            coverImage: '/images/Projects/lucie_small.webp',
            bannerImage: '/images/Projects/lucie_full.webp',
            logo: '/images/Projects/Logo/LucieLogo.svg',
            url: 'https://www.luciefoti.cz/',
            target: '_blank',
            badges: ['Supabase', 'Next.js', 'Cloudinary'],
            pin: true,
            color: 'bg-orange-400',
            content: t('allProjects.LucieCoRadaFoti.text'),
        },
        {
            name: 'Drippy Rugs',
            slug: 'drippy-rugs',
            description: 'Zakázková výroba koberečků',
            coverImage: '/images/Projects/dr_small.webp',
            bannerImage: '/images/Projects/dr_full.webp',
            logo: '/images/Projects/Logo/DRLogo.webp',
            url: 'https://drippyrugs.netlify.app/',
            target: '_blank',
            badges: ['TypeScript', 'Next.js'],
            pin: false,
            color: 'bg-red-400',
            content: t('allProjects.DrippyRugs.text'),
        },
        {
            name: 'Printujto',
            slug: 'printujto',
            description: 'Zakázkový 3D tisk',
            coverImage: '/images/Projects/printujto_small.webp',
            bannerImage: '/images/Projects/printujto_full.webp',
            logo: '/images/Projects/Logo/PrintujToLogo.webp',
            url: 'https://printujto.cz/',
            target: '_blank',
            badges: ['Next.js', 'React', 'Express.js'],
            pin: true,
            color: 'bg-violet-500',
            content: t('allProjects.Printujto.text'),
        },
        {
            name: 'Avantgarda',
            slug: 'avantgarda',
            description: 'Solární studio',
            coverImage: '/images/Projects/avantgarda_small.webp',
            bannerImage: '/images/Projects/avantgarda_full.webp',
            logo: '/images/Projects/Logo/AvantgardaLogo.webp',
            url: 'https://solariumolomouc.cz/',
            target: '_blank',
            badges: ['Next.js'],
            pin: true,
            color: 'bg-orange-500',
            content: t('allProjects.SolariumAvantgarda.text'),
        },
        {
            name: 'Habartovi.cz',
            slug: 'habartovi',
            description: 'Soukromé ubytování a keramická dílna',
            coverImage: '/images/Projects/habartovi_small.webp',
            bannerImage: '/images/Projects/habartovi_full.webp',
            logo: '/images/Projects/Logo/HabartoviLogo.svg',
            url: 'https://www.habartovi.cz/',
            target: '_blank',
            badges: ['WordPress', 'Next.js'],
            pin: true,
            color: 'bg-green-400',
            content: t('allProjects.Habartovi.text'),
        },
    ]
    return projectList
}
