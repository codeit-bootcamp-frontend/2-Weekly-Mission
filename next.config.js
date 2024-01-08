/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['codeit-images.codeit.com', 'example.com', 'another-domain.com'],
  },
};

module.exports = nextConfig;
