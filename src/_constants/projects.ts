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
            name: 'Plenklipperen',
            slug: 'plenklipperen',
            description: t('allProjects.Plenklipperen.description'),
            coverImage: '/images/Projects/plenklipperen_full.png',
            bannerImage: '/images/Projects/plenklipperen_full.png',
            logo: '/images/Projects/Logo/PlenklipperenLogo.png',
            url: 'https://plenklipperen.no/',
            target: '_blank',
            badges: ['Next.js', 'TypeScript'],
            pin: true,
            color: 'bg-lime-500',
            content: t('allProjects.Plenklipperen.text'),
        },
        {
            name: 'Vaktmester Bergen',
            slug: 'vaktmester-bergen',
            description: t('allProjects.VaktmesterBergen.description'),
            coverImage: '/images/Projects/vaktmesterbergen_full.png',
            bannerImage: '/images/Projects/vaktmesterbergen_full.png',
            logo: '/images/Projects/Logo/VaktmesterBergenLogo2.png',
            url: 'https://www.vaktmesterbergen.no/',
            target: '_blank',
            badges: ['Next.js', 'TypeScript'],
            pin: true,
            color: 'bg-sky-500',
            content: t('allProjects.VaktmesterBergen.text'),
        },
        {
            name: 'Lucie co ráda fotí',
            slug: 'lucie-co-rada-foti',
            description: t('allProjects.LucieCoRadaFoti.description'),
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
            name: 'Tais Rugs',
            slug: 'tais-rugs',
            description: t('allProjects.TaisRugs.description'),
            coverImage: '/images/Projects/taisrugs_full.png',
            bannerImage: '/images/Projects/taisrugs_full.png',
            logo: '/images/Projects/Logo/TaisRugsLogo.png',
            url: 'https://www.taisrugs.cz/',
            target: '_blank',
            badges: ['Shopify', 'Next.js', 'TypeScript'],
            pin: true,
            color: 'bg-pink-400',
            content: t('allProjects.TaisRugs.text'),
        },
        {
            name: 'Drippy Rugs',
            slug: 'drippy-rugs',
            description: t('allProjects.DrippyRugs.description'),
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
        // {
        //     name: 'Printujto',
        //     slug: 'printujto',
        //     description: 'Zakázkový 3D tisk',
        //     coverImage: '/images/Projects/printujto_small.webp',
        //     bannerImage: '/images/Projects/printujto_full.webp',
        //     logo: '/images/Projects/Logo/PrintujToLogo.webp',
        //     url: 'https://printujto.cz/',
        //     target: '_blank',
        //     badges: ['Next.js', 'React', 'Express.js'],
        //     pin: true,
        //     color: 'bg-violet-500',
        //     content: t('allProjects.Printujto.text'),
        // },

        {
            name: 'Habartovi.cz',
            slug: 'habartovi',
            description: t('allProjects.Habartovi.description'),
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
        {
            name: 'Avantgarda',
            slug: 'avantgarda',
            description: t('allProjects.SolariumAvantgarda.description'),
            coverImage: '/images/Projects/avantgarda_small.webp',
            bannerImage: '/images/Projects/avantgarda_full.webp',
            logo: '/images/Projects/Logo/AvantgardaLogo.webp',
            url: 'https://solariumolomouc.cz/',
            target: '_blank',
            badges: ['Next.js'],
            pin: false,
            color: 'bg-orange-500',
            content: t('allProjects.SolariumAvantgarda.text'),
        },
    ]
    return projectList
}
