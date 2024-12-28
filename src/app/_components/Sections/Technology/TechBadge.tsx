import React from 'react'
import Image from 'next/image'
import { ITool } from '@/_constants/technology'

const TechBadge: React.FC<{ tool: ITool }> = ({ tool }) => {
    return (
        <span
            className={`flex gap-2 md:gap-4 items-center font-league text-xl md:text-4xl bg-gray-200 rounded-xl md:rounded-2xl px-4 py-2 md:px-8 md:py-4`}
        >
            {tool.name}
            <span className='inline-block w-6 h-6 md:w-16 md:h-16'>
                <Image
                    src={tool.image}
                    alt={tool.name}
                    width={64}
                    height={64}
                    priority
                    className='w-full h-full object-cover rounded-full'
                />
            </span>
        </span>
    )
}

export default TechBadge
