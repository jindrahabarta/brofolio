export interface IProject {
    name: string
    description: string
    image: string
    url: string
    badges: string[]
    color?: string
}

export const projectList: IProject[] = [
    {
        name: 'Bakery & hospitality',
        description: 'This is the first project.',
        image: 'https://example.com/image1.jpg',
        url: 'https://example.com/project1',
        badges: ['TypeScript', 'Angular'],
    },
    {
        name: 'Project Two',
        description: 'This is the second project.',
        image: 'https://example.com/image2.jpg',
        url: 'https://example.com/project2',
        badges: ['JavaScript', 'React'],
        color: '#33FF57',
    },
    {
        name: 'Project Three',
        description: 'This is the third project.',
        image: 'https://example.com/image3.jpg',
        url: 'https://example.com/project3',
        badges: ['Python', 'Django'],
    },
]
