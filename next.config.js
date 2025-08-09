/** @type {import('next').NextConfig} */

// Determine deployment target
const isGitHubPages = process.env.DEPLOY_TARGET === "github";
const isProduction =
  process.env.NODE_ENV === "production" &&
  process.env.DEPLOY_TARGET === "production";

const nextConfig = {
  // GitHub Pages configuration
  ...(isGitHubPages && {
    output: "export",
    basePath: "/personalSite",
    assetPrefix: "/personalSite",
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),

  // Production (Digital Ocean) configuration
  ...(isProduction && {
    // Standard Next.js app for production
    compress: true,
    poweredByHeader: false,
    generateEtags: false,
    images: {
      domains: ["your-domain.com"], // Add your production domain
    },
  }),

  // Development configuration
  ...(!isGitHubPages &&
    !isProduction && {
      // Local development settings
      images: {
        unoptimized: true,
      },
    }),

  // Common configurations
  // experimental: {
  //   optimizeCss: isProduction, // Disabled - requires critters package
  // },

  // Environment variables that should be available to the client
  env: {
    DEPLOY_TARGET: process.env.DEPLOY_TARGET || "development",
  },
};

module.exports = nextConfig;
