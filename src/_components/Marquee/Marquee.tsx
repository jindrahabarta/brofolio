import React, { JSX } from 'react'

const Marquee: React.FC<{
    children: JSX.Element | JSX.Element[] | string
    duration?: string
    sets?: number
    containerClassName?: string
    className?: string
}> = ({
    children,
    duration = '10s',
    sets = 2,
    containerClassName,
    className,
}) => {
    return (
        <span
            className={`w-full flex items-center text-nowrap overflow-hidden select-none ${
                containerClassName ?? ''
            }`}
        >
            {Array.from({ length: sets }, (_, i) => i).map((_, i) => (
                <span
                    key={i.toString()}
                    style={{
                        animation: `marqueeX ${duration} linear infinite`,
                    }}
                    className={`flex flex-row items-center animate-marqueeX ${
                        className ?? ''
                    }`}
                >
                    {children}
                </span>
            ))}
        </span>
    )
}

export default Marquee
