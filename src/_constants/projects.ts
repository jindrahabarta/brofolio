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
        image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        url: 'https://example.com/project1',
        badges: ['TypeScript', 'Next.js'],
        color: 'bg-red-400',
    },
    {
        name: 'Habartovi.cz',
        slug: 'habartovi',
        description: 'Soukromé ubytování a keramická dílna',
        image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        url: 'https://example.com/project2',
        badges: ['WordPress', 'Next.js'],
        color: 'bg-green-500',
    },
    {
        name: 'Printujto',
        slug: 'printujto',
        description: 'Zakázkový 3D tisk',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg',
        url: 'https://example.com/project3',
        badges: ['Next.js', 'React', 'Express.js'],
        color: 'bg-violet-500',
    },
    {
        name: 'Avantgarda',
        slug: 'avantgarda',
        description: 'Solární studio',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg',
        url: 'https://example.com/project3',
        badges: ['Next.js'],
        color: 'bg-orange-500',
    },
]
