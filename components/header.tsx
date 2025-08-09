import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import {
  PersonalInfo,
  SocialLinks,
  Navigation as NavigationData,
} from "@/types";

interface HeaderProps {
  personalInfo: PersonalInfo;
  socialLinks: SocialLinks;
  navigation: NavigationData;
}

const Header: React.FC<HeaderProps> = ({
  personalInfo,
  socialLinks,
  navigation,
}) => {
  return (
    <div className="lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-48 self-center lg:self-auto">
      <div className="">
        <h1 className="text-5xl subpixel-antialiased tracking-wide text-on-background">
          {personalInfo.fullName}
        </h1>
        <h2 className="text-surface-500 pt-2 text-base font-normal tracking-wider">
          {personalInfo.professionalTagline}
        </h2>
      </div>
      <Navigation data={navigation}></Navigation>
      <Socials data={socialLinks}></Socials>
    </div>
  );
};

export default Header;
