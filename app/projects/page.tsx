import React from "react";
import Projects from "@/components/projects/projects";
import Header from "@/components/header";
import { promises as fs } from "fs";
import { TranslationData } from "@/types";
import { fetchGitHubRepos } from "@/lib/github";

export default async function ProjectsPage(): Promise<React.JSX.Element> {
  const file = await fs.readFile(
    process.cwd() + "/public/translations/en.json",
    "utf-8"
  );
  const data: TranslationData = JSON.parse(file);

  // Fetch projects from GitHub instead of using static data
  const githubProjects = await fetchGitHubRepos();

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-6 lg:px-24">
      <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
        <Header data={data.general}></Header>
        <div className="lg:pl-[50%]">
          <Projects data={githubProjects}></Projects>
        </div>
      </div>
    </main>
  );
}
