import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { getSecureTranslationData } from "@/lib/secure-data";
import config from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

// Generate metadata using the translation data and environment config
export async function generateMetadata(): Promise<Metadata> {
  const data = await getSecureTranslationData();

  // Environment-aware metadata
  const baseUrl = config.baseUrl;
  const titleSuffix = config.isDevelopment ? " (Dev)" : "";

  return {
    title: `${data.siteMetadata.title}${titleSuffix}`,
    description: data.siteMetadata.description,
    metadataBase: new URL(baseUrl),
    manifest: "/icons/site.webmanifest",
    icons: {
      icon: [
        { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icons/favicon.ico", sizes: "any" },
      ],
      apple: "/icons/apple-touch-icon.png",
      other: [
        {
          rel: "android-chrome-192x192",
          url: "/icons/android-chrome-192x192.png",
          sizes: "192x192",
        },
        {
          rel: "android-chrome-512x512",
          url: "/icons/android-chrome-512x512.png",
          sizes: "512x512",
        },
      ],
    },
  };
}
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Show environment indicator in development */}
        {config.features.debugging && (
          <div
            className={`fixed top-2 right-2 z-50 ${
              config.isGitHubPages ? "bg-blue-500" : "bg-green-500"
            } text-white text-xs px-2 py-1 rounded shadow-lg`}
          >
            {config.isGitHubPages ? "DEV" : "LOCAL"}
          </div>
        )}
      </body>
    </html>
  );
}
