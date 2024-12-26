import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'letsenhance.io',
                port: '',
                pathname: '/**',
                search: '',
            },
        ],
    },
}

export default nextConfig
