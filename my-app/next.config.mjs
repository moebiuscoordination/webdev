/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    basePath: '/webdev', // Add your repo name here
    assetPrefix: '/webdev/', // Add your repo name here
};

export default nextConfig;
