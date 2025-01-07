import React, { cloneElement } from 'react'
import { ITool } from '@/_constants/technology'

const TechBadge: React.FC<{ tool: ITool }> = ({ tool }) => {
    return (
        <span
            style={{
                backgroundColor: tool.background ?? '#e5e7eb', // bg-gray-200
                color: tool.text ?? 'white',
            }}
            className={`flex gap-2 sm:gap-4 items-center font-league text-xl sm:text-3xl rounded-xl sm:rounded-2xl px-4 py-2 sm:px-6 sm:py-3`}
        >
            {tool.name}
            <span className='inline-flex w-6 h-6 sm:w-12 sm:h-12 items-center justify-center rounded-full overflow-hidden bg-white'>
                {cloneElement(
                    tool.image,
                    { className: 'w-4 h-4 sm:w-7 sm:h-7' },
                    ''
                )}
            </span>
        </span>
    )
}

export default TechBadge
