import React from 'react'

const Noisy: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            className={`absolute inset-0 w-full h-full pointer-events-none opacity-20 ${
                className ?? ''
            }`}
        >
            <filter id='noise-filter'>
                <feTurbulence type='fractalNoise' baseFrequency='1.3' />
            </filter>
            <rect width='100%' height='100%' filter='url(#noise-filter)' />
        </svg>
    )
}

export default Noisy
