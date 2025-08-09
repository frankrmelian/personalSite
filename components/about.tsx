import React from "react";
import { General } from "@/types";

interface AboutProps {
  data: General;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <div id="about" className="mb-16 group">
      <div className="text-on-background text-lg">
        {data.about.map(function (paragraph, index) {
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
