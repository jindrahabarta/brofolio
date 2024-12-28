'use client'
import React from 'react'

const AccordionItem = ({
    title,
    answer,
    onClick,
    accordionOpen,
    id,
}: {
    title: string
    answer: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
    accordionOpen: boolean
    id: number
}) => {
    return (
        <div className='py-2'>
            <button
                onClick={onClick}
                id={id.toString()}
                className='flex justify-between w-full border-b border-black/40 pb-2'
            >
                <h3 className='font-semibold text-left pointer-events-none'>
                    <span className='min-w-12 inline-block'>
                        <strong>{(id + 1).toString().padStart(2, '0')}</strong>
                    </span>{' '}
                    {title}
                </h3>

                <svg
                    className='fill-orange shrink-0 ml-8 pointer-events-none'
                    width='16'
                    height='16'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <rect
                        y='7'
                        width='16'
                        height='2'
                        rx='1'
                        className={`transform origin-center transition duration-200 ease-out ${
                            accordionOpen && '!rotate-180'
                        }`}
                    />
                    <rect
                        y='7'
                        width='16'
                        height='2'
                        rx='1'
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                            accordionOpen && '!rotate-180'
                        }`}
                    />
                </svg>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-800 text-sm ${
                    accordionOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className='overflow-hidden text-base mt-1'>{answer}</div>
            </div>
        </div>
    )
}

export default AccordionItem
