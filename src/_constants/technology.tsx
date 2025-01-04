import CSS from '@/_assets/icons/technology/CSS'
import Framer from '@/_assets/icons/technology/Framer'
import HTML from '@/_assets/icons/technology/HTML'
import Illustrator from '@/_assets/icons/technology/Illustrator'
import JavaScript from '@/_assets/icons/technology/JavaScript'
import Laravel from '@/_assets/icons/technology/Laravel'
import Netlify from '@/_assets/icons/technology/Netlify'
import Next from '@/_assets/icons/technology/Next'
import Node from '@/_assets/icons/technology/Node'
import Photoshop from '@/_assets/icons/technology/Photoshop'
import PHP from '@/_assets/icons/technology/PHP'
import Premiere from '@/_assets/icons/technology/Premiere'
import ReactIcon from '@/_assets/icons/technology/React'
import Tailwindcss from '@/_assets/icons/technology/Tailwindcss'
import TypeScript from '@/_assets/icons/technology/TypeScript'
import WordPress from '@/_assets/icons/technology/WordPress'
import { JSX } from 'react'

interface ITech {
    coding: ITool[]
    design: ITool[]
    other: ITool[]
}

export interface ITool {
    name: string
    image: JSX.Element
    background?: string
    text?: string
}

export const technology: ITech = {
    coding: [
        {
            name: 'HTML',
            image: <HTML />,
            background: '#E44D27',
            text: 'white',
        },
        {
            name: 'CSS',
            image: <CSS />,
            background: '#1472B6',
            text: 'white',
        },
        {
            name: 'JavaScript',
            image: <JavaScript />,
            background: '#EFDB50',
            text: '#323330',
        },
        {
            name: 'Next',
            image: <Next />,
            background: '#171717',
            text: 'white',
        },
        {
            name: 'Node',
            image: <Node />,
            background: '#5FA04F',
            text: '#333333',
        },
        {
            name: 'React',
            image: <ReactIcon />,
            background: '#61DAFB',
            text: 'white',
        },
        {
            name: 'TypeScript',
            image: <TypeScript />,
            background: '#007ACC',
            text: 'white',
        },
        {
            name: 'Tailwindcss',
            image: <Tailwindcss />,
            background: '#38BDF9',
            text: 'white',
        },
        {
            name: 'PHP',
            image: <PHP />,
            background: '#777BB3',
            text: 'white',
        },
        {
            name: 'Laravel',
            image: <Laravel />,
            background: '#F0513F',
            text: 'white',
        },
    ],
    design: [
        {
            name: 'Photoshop',
            image: <Photoshop />,
            background: '#001E36',
            text: '#31a8FF',
        },
        {
            name: 'Illustrator',
            image: <Illustrator />,
            background: '#FAA625',
            text: 'white',
        },
        {
            name: 'Premiere pro',
            image: <Premiere />,
            background: '#2A0634',
            text: 'white',
        },
    ],
    other: [
        {
            name: 'Framer motion',
            image: <Framer />,
            background: '#171717',
            text: 'white',
        },
        {
            name: 'WordPress',
            image: <WordPress />,
            background: '#494949',
            text: 'white',
        },
        {
            name: 'Netlify',
            image: <Netlify />,
            background: '#03BDBA',
            text: 'white',
        },
    ],
}
