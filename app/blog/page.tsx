import React from "react";
import Header from "@/components/header";
import { promises as fs } from "fs";
import { TranslationData } from "@/types";

export default async function BlogPage(): Promise<React.JSX.Element> {
  const file = await fs.readFile(
    process.cwd() + "/public/translations/en.json",
    "utf-8"
  );
  const data: TranslationData = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-6 lg:px-24">
      <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
        <Header data={data.general}></Header>
        <div className="lg:pl-[50%]">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-on-background mb-8">Blog</h1>
            <div className="text-surface-400 text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-lg mb-4">Blog coming soon...</p>
              <p className="text-sm">
                This space will feature articles about development, design, and
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
