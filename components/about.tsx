import React from "react";
import { AboutSection } from "@/types";

interface AboutProps {
  data: AboutSection;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const aboutParagraphs = [
    data.personalStory,
    data.professionalJourney,
    data.personalInterests,
    data.closingStatement,
  ];

  return (
    <div id="about" className="mb-16 group">
      <div className="text-on-background text-lg">
        {aboutParagraphs.map(function (paragraph, index) {
          return (
            <div key={index} className="mb-6">
              {paragraph}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
