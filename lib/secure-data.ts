import { promises as fs } from "fs";
import { TranslationData } from "@/types";
import config from "./config";

/**
 * Securely loads translation data based on environment
 * - Production (Digital Ocean): Uses personal data (en.json)
 * - Development/GitHub Pages: Uses generic data (generic.json)
 */
export async function getSecureTranslationData(): Promise<TranslationData> {
  const isProductionDeployment = config.isProduction && config.isDigitalOcean;

  // Use personal data only in production on Digital Ocean
  const fileName = isProductionDeployment ? "en.json" : "generic.json";

  try {
    const file = await fs.readFile(
      process.cwd() + `/public/translations/${fileName}`,
      "utf-8"
    );

    const data: TranslationData = JSON.parse(file);

    // Add environment info for debugging (non-production only)
    if (!isProductionDeployment) {
      console.log(`🔒 Using ${fileName} for data protection`);
    }

    return data;
  } catch (error) {
    console.error(`Failed to load translation data from ${fileName}:`, error);

    // Fallback to generic data if personal data fails to load
    if (fileName === "en.json") {
      console.log("Falling back to generic data...");
      const fallbackFile = await fs.readFile(
        process.cwd() + `/public/translations/generic.json`,
        "utf-8"
      );
      return JSON.parse(fallbackFile);
    }

    throw error;
  }
}

/**
 * Legacy function for backward compatibility
 * @deprecated Use getSecureTranslationData() instead
 */
export async function getTranslationData(): Promise<TranslationData> {
  return getSecureTranslationData();
}
