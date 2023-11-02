/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
    },
}

module.exports = {
    images: {
        domains: ['toktik-bucket.s3.ap-southeast-2.amazonaws.com'],
    },
}
