/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  styledComponents: true,

  pageExtensions: ["ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**"
      }
    ]
  }
};

module.exports = nextConfig;
