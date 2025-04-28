import { log } from 'console'
import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/_constants/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                motionOrange: '#f79533',
                motionGrape: '#f37055',
                motionPurple: '#a166ab',
                motionBlue: '#1098ad',
                motionEmerald: '#07b39b',
                motionGreen: '#4ade90',
                motionPink: '#c184a0',
            },
            scale: {
                '33': '0.33',
                '115': '1.15',
                '120': '1.2',
            },
            fontFamily: {
                // sourceSerif: 'var(--source-serif)',
                // charm: 'var(--charm)',
                owners: 'var(--owners)',
                // emberlyRegular: 'var(--emberly-regular)',
                instrument: 'var(--instrument)',
                league: 'var(--league)',
                morn: 'var(--morn)',
            },
            animation: {
                marqueeLeft: 'marqueeLeft 10s linear infinite',
                marqueeRight: 'marqueeRight 10s linear infinite',
                logoFirst: 'logoFirst 3s ease-out infinite',
            },
            keyframes: {
                marqueeLeft: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
                marqueeRight: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(100%)' },
                },
                logoFirst: {
                    '0%': {
                        transform: 'translateX(0) translateY(0)',
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'translateX(1.5rem) translateY(1.5rem)',
                        opacity: '0',
                    },
                },
            },
        },
    },
    plugins: [],
} satisfies Config
