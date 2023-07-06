/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    compiler: {
        removeConsole: true
    },
}

module.exports = nextConfig
