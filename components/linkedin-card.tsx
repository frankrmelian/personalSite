"use client";

import React from "react";
import { LinkedInProfile, formatLinkedInDate } from "@/lib/linkedin";
import { SocialLinks } from "@/types";

interface LinkedInCardProps {
  profile: LinkedInProfile;
  socialLinks: SocialLinks;
}

const LinkedInCard: React.FC<LinkedInCardProps> = ({
  profile,
  socialLinks,
}) => {
  return (
    <div className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest text-on-background">
        Professional Profile
      </h2>

      {/* Main Profile Card */}
      <div className="bg-surface-200 rounded-lg p-6 mb-6 hover:bg-surface-300 transition-all">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start">
            {profile.profilePicture && (
              <div className="mr-4 flex-shrink-0">
                <img
                  src={profile.profilePicture}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
                  onError={(e) => {
                    // Hide image if it fails to load
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-on-background mb-2">
                {profile.firstName} {profile.lastName}
              </h3>
              <p className="text-lg text-primary-500 mb-2 leading-relaxed">
                {profile.headline}
              </p>
              <p className="text-surface-400 text-sm mb-4">
                {profile.location.region}, {profile.location.country} •{" "}
                {profile.industry}
              </p>
            </div>
          </div>
          <a
            href={socialLinks.linkedInProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-highlight-500 hover:text-highlight-400 transition-all flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        <div className="text-white text-base leading-relaxed whitespace-pre-line">
          {profile.summary}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-on-background mb-4">
          Experience
        </h4>
        <div className="space-y-4">
          {profile.positions.slice(0, 1).map((position, index) => (
            <div
              key={index}
              className="bg-surface-200 rounded-lg p-4 hover:bg-surface-300 transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h5 className="font-medium text-white text-lg">
                    {position.title}
                  </h5>
                  <p className="text-white text-base">{position.companyName}</p>
                </div>
                <div className="text-surface-400 text-xs text-right">
                  <p>
                    {formatLinkedInDate(position.startDate)} -{" "}
                    {position.isCurrent
                      ? "Present"
                      : position.endDate
                      ? formatLinkedInDate(position.endDate)
                      : "Present"}
                  </p>
                  <p>{position.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      {profile.educations.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-on-background mb-4">
            Education
          </h4>
          <div className="space-y-4">
            {profile.educations.map((education, index) => (
              <div
                key={index}
                className="bg-surface-200 rounded-lg p-4 hover:bg-surface-300 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="font-medium text-white text-lg">
                      {education.schoolName}
                    </h5>
                    <p className="text-white text-base">
                      {education.degreeName}
                    </p>
                    {education.fieldOfStudy && (
                      <p className="text-white text-sm">
                        {education.fieldOfStudy}
                      </p>
                    )}
                  </div>
                  <div className="text-surface-400 text-xs">
                    <p>
                      {formatLinkedInDate(education.startDate)} -{" "}
                      {education.endDate
                        ? formatLinkedInDate(education.endDate)
                        : "Present"}
                    </p>
                  </div>
                </div>
                {education.description && (
                  <p className="text-white text-base">
                    {education.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      <div>
        <h4 className="text-lg font-semibold text-on-background mb-4">
          Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {profile.skills.slice(0, 12).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-surface-300 text-surface-400 text-sm rounded-full hover:bg-surface-400 hover:text-on-background transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkedInCard;
