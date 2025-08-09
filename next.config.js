/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/personalSite",
  assetPrefix: "/personalSite",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
