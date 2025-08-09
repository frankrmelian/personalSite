import React from "react";
import About from "@/components/about";
import Header from "@/components/header";
import { getSecureTranslationData } from "@/lib/secure-data";

export default async function Home(): Promise<React.JSX.Element> {
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
          <About data={data.aboutSection}></About>
        </div>
      </div>
    </main>
  );
}
