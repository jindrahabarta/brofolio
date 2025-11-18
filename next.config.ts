import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

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

            {
                protocol: 'https',
                hostname: 'easy-peasy.ai',
                port: '',
                pathname:
                    '/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/42549638-3207-452d-9f52-41e057be59c4/2ac41247-57bf-4313-bfb7-38f9bf7b8715.png',
                search: '',
            },
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'https',
                hostname: 'cristiandavideconte.github.io',
            },
        ],
    },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
