// Environment configuration utility
export const config = {
  // Environment flags
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
  isGitHubPages: process.env.DEPLOY_TARGET === "github",
  isDigitalOcean: process.env.DEPLOY_TARGET === "production",

  // Base URLs for different environments
  baseUrl: getBaseUrl(),
  apiUrl: getApiUrl(),

  // Feature flags based on environment
  features: {
    analytics:
      process.env.NODE_ENV === "production" &&
      process.env.DEPLOY_TARGET === "production",
    debugging: process.env.NODE_ENV === "development",
    errorReporting: process.env.NODE_ENV === "production",
  },

  // Site metadata that might vary by environment
  site: {
    name: "Frank Melian",
    url: getBaseUrl(),
    description: "Personal website and portfolio",
  },
};

function getBaseUrl(): string {
  if (process.env.DEPLOY_TARGET === "github") {
    return "https://frankrmelian.github.io/personalSite";
  }

  if (process.env.DEPLOY_TARGET === "production") {
    return "https://your-production-domain.com"; // Update with your Digital Ocean domain
  }

  return "http://localhost:3000";
}

function getApiUrl(): string {
  if (process.env.DEPLOY_TARGET === "production") {
    return process.env.NEXT_PUBLIC_API_URL || "https://api.your-domain.com";
  }

  // For GitHub Pages and development, use mock data or no API
  return "";
}

// Utility functions for conditional rendering/logic
export const shouldLoadAnalytics = () => config.features.analytics;
export const shouldEnableDebugging = () => config.features.debugging;
export const shouldReportErrors = () => config.features.errorReporting;

export default config;
