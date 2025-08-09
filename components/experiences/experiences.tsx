import React from "react";
import ExperienceItem from "./experience-item";
import type { Experience } from "../../types";

interface ExperiencesProps {
  data: Experience[];
}

const Experiences: React.FC<ExperiencesProps> = ({ data }) => {
  return (
    <div id="experiences" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest text-on-background">
        Experiences
      </h2>
      {data.map((object, index) => (
        <ExperienceItem
          key={`${object.title}+${object.startDate}`}
          title={object.title}
          company={object.company}
          href={object.href}
          startDate={object.startDate}
          endDate={object.endDate}
          description={object.description}
          logo={object.logo}
          skills={object.skills}
        />
      ))}
    </div>
  );
};

export default Experiences;
