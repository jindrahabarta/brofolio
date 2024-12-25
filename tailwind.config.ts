import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            scale: {
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
                marqueeX: 'marqueeX 40s linear infinite',
            },
            keyframes: {
                marqueeX: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config
