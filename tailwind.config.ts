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
            fontFamily: {
                sourceSerif: ['var(--source-serif)'],
                charm: ['var(--charm)'],
                owners: ['var(--owners)'],
            },
        },
    },
    plugins: [],
} satisfies Config
