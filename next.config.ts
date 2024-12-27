import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gratisography.com',
                port: '',
                pathname:
                    '/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'letsenhance.io',
                port: '',
                pathname:
                    '/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'static.vecteezy.com',
                port: '',
                pathname:
                    '/system/resources/thumbnails/036/324/708/small_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg',
                search: '',
            },
        ],
    },
}

export default nextConfig
