import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import { General } from "@/types";

interface HeaderProps {
  data: General;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <div className="lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-48 self-center lg:self-auto">
      <div className="">
        <h1 className="text-5xl subpixel-antialiased tracking-wide text-on-background">
          {data.name}
        </h1>
        <h2 className="text-surface-500 pt-2 text-base font-normal tracking-wider">
          {data.headline}
        </h2>
      </div>
      <Navigation></Navigation>
      <Socials data={data.socials}></Socials>
    </div>
  );
};

export default Header;
