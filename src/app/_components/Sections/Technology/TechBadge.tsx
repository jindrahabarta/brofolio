import React, { cloneElement } from 'react'
import { ITool } from '@/_constants/technology'

const TechBadge: React.FC<{ tool: ITool }> = ({ tool }) => {
    return (
        <span
            style={{
                backgroundColor: tool.background ?? '#e5e7eb', // bg-gray-200
                color: tool.text ?? 'white',
            }}
            className={`flex gap-2 sm:gap-4 items-center font-league text-xl sm:text-4xl rounded-xl sm:rounded-2xl px-4 py-2 sm:px-8 sm:py-4`}
        >
            {tool.name}
            <span className='inline-flex w-6 h-6 sm:w-16 sm:h-16 items-center justify-center rounded-full overflow-hidden bg-white'>
                {cloneElement(
                    tool.image,
                    { className: 'w-4 h-4 sm:w-10 sm:h-10' },
                    ''
                )}
            </span>
        </span>
    )
}

export default TechBadge
