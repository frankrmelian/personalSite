import React from "react";

interface ProjectItemProps {
  name: string;
  stars: string;
  lib: string;
  description: string;
  href: string;
  lastCommitMessage?: string;
  lastCommitDate?: string;
  readmeTitle?: string;
  commitCount?: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  stars,
  lib,
  description,
  href,
  lastCommitMessage,
  lastCommitDate,
  readmeTitle,
  commitCount,
}) => {
  const formatDate = (dateString: string): string => {
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
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col p-5 transition-all bg-surface-200 hover:scale-105 hover:bg-surface-300 rounded-lg hover:z-10"
    >
      <div className="text-surface-500 mb-4 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <span className="ml-1 text-xs">{stars}</span>
        </div>
        <div className="text-xs font-medium tracking-widest uppercase text-accent-500">
          {lib}
        </div>
      </div>

      <h1 className="mb-2 text-xl subpixel-antialiased text-on-background group-hover:text-primary-500 transition-all truncate">
        {readmeTitle || name}
      </h1>

      <div
        className="text-surface-400 text-xs mb-3 overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </div>

      {/* Commit History Section */}
      {lastCommitMessage && (
        <div className="mb-3 border-t border-surface-300 pt-3 mt-auto">
          <div className="flex items-start mb-2 min-w-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3 mt-0.5 mr-2 flex-shrink-0 text-surface-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-surface-400 truncate mb-1">
                {lastCommitMessage}
              </div>
              <div className="text-xs text-surface-500 truncate">
                {lastCommitDate && formatDate(lastCommitDate)}
                {commitCount && ` • ${commitCount} commits`}
              </div>
            </div>
          </div>
        </div>
      )}
    </a>
  );
};

export default ProjectItem;
