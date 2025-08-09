export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  pushed_at: string;
  created_at: string;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  default_branch: string;
}

export interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
}

export interface GitHubReadme {
  content: string;
  encoding: string;
}

export interface GitHubProject {
  name: string;
  framework: string;
  description: string;
  href: string;
  stars: string;
  lastCommitMessage?: string;
  lastCommitDate?: string;
  readmeTitle?: string;
  commitCount?: number;
}

const GITHUB_USERNAME = "frankrmelian";
const GITHUB_API_URL = "https://api.github.com";

export async function fetchGitHubRepos(): Promise<GitHubProject[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "frankmelian.com",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forks and archived repos
    const filteredRepos = repos
      .filter((repo) => !repo.fork && !repo.archived && repo.description)
      .slice(0, 8); // Show top 8 most recently updated repos

    // Fetch additional data for each repo
    const projects = await Promise.all(
      filteredRepos.map(async (repo) => {
        const [commits, readme] = await Promise.all([
          fetchRepoCommits(repo.name),
          fetchRepoReadme(repo.name, repo.default_branch),
        ]);

        return {
          name: repo.name,
          framework: getFrameworkFromLanguage(repo.language),
          description: repo.description || "No description available",
          href: repo.html_url,
          stars: formatStarCount(repo.stargazers_count),
          lastCommitMessage:
            commits[0]?.commit?.message?.split("\n")[0] || undefined,
          lastCommitDate: commits[0]?.commit?.author?.date || undefined,
          readmeTitle: readme || undefined,
          commitCount: commits.length,
        };
      })
    );

    return projects;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    // Return fallback data in case of API failure
    return getFallbackProjects();
  }
}

async function fetchRepoCommits(repoName: string): Promise<GitHubCommit[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}/commits?per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "frankmelian.com",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching commits for ${repoName}:`, error);
    return [];
  }
}

async function fetchRepoReadme(
  repoName: string,
  branch: string
): Promise<string | null> {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "frankmelian.com",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return null;
    }

    const readme: GitHubReadme = await response.json();
    const content = atob(readme.content);

    // Extract the first heading from the README
    const titleMatch = content.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      return titleMatch[1].trim();
    }

    // If no heading found, return the repo name formatted
    return repoName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } catch (error) {
    console.error(`Error fetching README for ${repoName}:`, error);
    return null;
  }
}

function getFrameworkFromLanguage(language: string | null): string {
  if (!language) return "other";

  const languageMap: { [key: string]: string } = {
    TypeScript: "typescript",
    JavaScript: "javascript",
    Python: "python",
    Java: "java",
    HTML: "html",
    CSS: "css",
    Go: "go",
    Rust: "rust",
    Swift: "swift",
    Kotlin: "kotlin",
    Dart: "dart",
  };

  return languageMap[language] || language.toLowerCase();
}

function formatStarCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

function getFallbackProjects(): GitHubProject[] {
  return [
    {
      name: "frankmelian.com",
      framework: "next.js",
      description:
        "Personal portfolio website built with Next.js and TypeScript",
      href: "https://github.com/frankrmelian/frankmelian.com",
      stars: "0",
      lastCommitMessage: "Initial commit",
      readmeTitle: "Frank Melian - Portfolio",
      commitCount: 1,
    },
    {
      name: "example-project",
      framework: "javascript",
      description: "Short description of your project.",
      href: "https://github.com/frankrmelian",
      stars: "0",
      lastCommitMessage: "Update README",
      readmeTitle: "Example Project",
      commitCount: 5,
    },
  ];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays === 0) return "today";
  if (diffInDays === 1) return "1 day ago";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}
