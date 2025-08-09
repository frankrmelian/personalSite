import React from "react";
import Header from "@/components/header";
import { getSecureTranslationData } from "@/lib/secure-data";

export default async function BlogPage(): Promise<React.JSX.Element> {
  const data = await getSecureTranslationData();

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-6 lg:px-24">
      <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
        <Header
          personalInfo={data.personalInfo}
          socialLinks={data.socialLinks}
          navigation={data.navigation}
        ></Header>
        <div className="lg:pl-[50%]">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-on-background mb-8">
              {data.pages.blog.title}
            </h1>
            <div className="text-surface-400 text-center py-16">
              <div className="text-6xl mb-4">
                {data.pages.blog.comingSoonEmoji}
              </div>
              <p className="text-lg mb-4">
                {data.pages.blog.comingSoonMessage}
              </p>
              <p className="text-sm">{data.pages.blog.comingSoonDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
