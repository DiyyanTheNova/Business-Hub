/** @type {import('next').NextConfig} */
const nextConfig = {
  // REQUIRED for GitHub Pages
  output: 'export',
  basePath: '/sampleonly', // Change this if your repo name is different!
  
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;