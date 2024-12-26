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
        image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        url: 'https://example.com/project1',
        badges: ['TypeScript', 'Angular'],
    },
    {
        name: 'Project Two',
        description: 'This is the second project.',
        image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        url: 'https://example.com/project2',
        badges: ['JavaScript', 'React'],
        color: '#33FF57',
    },
    {
        name: 'Project Three',
        description: 'This is the third project.',
        image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        url: 'https://example.com/project3',
        badges: ['Python', 'Django'],
    },
]