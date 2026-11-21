/** @type {import('next').NextConfig} */
const basePath = process.env.PAGES_BASE_PATH

const nextConfig = {
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
  output: 'export',
}

export default nextConfig
