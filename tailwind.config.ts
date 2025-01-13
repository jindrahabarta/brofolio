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
                sourceSerif: 'var(--source-serif)',
                charm: 'var(--charm)',
                owners: 'var(--owners)',
                emberlyRegular: 'var(--emberly-regular)',
                instrument: 'var(--instrument)',
                league: 'var(--league)',
            },
            animation: {
                marqueeLeft: 'marqueeLeft 10s linear infinite',
                marqueeRight: 'marqueeRight 10s linear infinite',
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
            },
        },
    },
    plugins: [],
} satisfies Config
