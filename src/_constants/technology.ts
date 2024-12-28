interface ITech {
    coding: ITool[]
    design: ITool[]
    other: ITool[]
}

export interface ITool {
    name: string
    image: string
    color?: string
}

export const technology: ITech = {
    coding: [
        {
            name: 'HTML',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'CSS',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'JavaScript',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'Next',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'Node',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'React',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'TypeScript',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'tailwind',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'PHP',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'Laravel',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
    ],
    design: [
        {
            name: 'Photoshop',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'Illustrator',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'Premiere pro',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
    ],
    other: [
        {
            name: 'Framer motion',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'Wordpress',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
        {
            name: 'Netlify',
            image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        },
    ],
}
