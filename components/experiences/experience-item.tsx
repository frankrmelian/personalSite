import React from "react";
import Image from "next/image";

interface ExperienceItemProps {
  title: string;
  company: string;
  href: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  skills: string[];
}

interface ExperienceItemProps {
  title: string;
  company: string;
  href: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  skills: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  href,
  startDate,
  endDate,
  description,
  logo,
  skills,
}) => {
  return (
    <div className="group flex flex-row mb-4 p-5 transition-all hover:bg-surface-200 rounded-lg">
      <div className="basis-1/4 mr-2">
        <Image
          src={logo}
          alt="Company Logo"
          width={70}
          height={70}
          className="object-contain object-top pt-2"
        />
      </div>
      <div className="basis-3/4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-all text-on-background hover:text-primary-500"
        >
          {title} | {company}
        </a>
        <div className="mb-2 text-surface-500">
          {startDate} - {endDate}
        </div>
        <div className="text-surface-400 mb-4">{description}</div>
        <div className="flex flex-row">
          {skills
            ? skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-surface-300 text-on-background py-1 px-3 rounded-full text-xs mr-2 hover:bg-primary-500 hover:text-surface-100 transition-all cursor-default"
                >
                  {skill}
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
