import React from "react";
import config from "@/lib/config";

const EnvironmentIndicator: React.FC = () => {
  // Only show indicator in non-production environments
  if (config.isProduction && config.isDigitalOcean) {
    return null;
  }

  const getEnvironmentInfo = () => {
    if (config.isGitHubPages) {
      return {
        label: "DEV",
        color: "bg-blue-500",
        description: "GitHub Pages Development Build",
      };
    }

    if (config.isDevelopment) {
      return {
        label: "LOCAL",
        color: "bg-green-500",
        description: "Local Development",
      };
    }

    return {
      label: "STAGING",
      color: "bg-yellow-500",
      description: "Staging Environment",
    };
  };

  const { label, color, description } = getEnvironmentInfo();

  return (
    <div
      className={`fixed top-2 right-2 z-50 ${color} text-white text-xs px-2 py-1 rounded shadow-lg`}
      title={description}
    >
      {label}
    </div>
  );
};

export default EnvironmentIndicator;
