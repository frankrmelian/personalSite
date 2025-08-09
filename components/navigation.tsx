"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavItem from "./nav-item";
import { Navigation as NavigationData } from "@/types";

interface NavigationProps {
  data: NavigationData;
}

const Navigation: React.FC<NavigationProps> = ({ data }) => {
  const pathname = usePathname();

  // Determine which page is active based on the current pathname
  const isActive = (path: string): boolean => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname === path) return true;
    return false;
  };

  return (
    <div
      id="navigation"
      className="flex flex-col py-10 font-medium tracking-widest"
    >
      <NavItem
        active={isActive("/about")}
        href="/about"
        num="01"
        name={data.aboutLabel}
      ></NavItem>
      <NavItem
        active={isActive("/blog")}
        href="/blog"
        num="02"
        name={data.blogLabel}
      ></NavItem>
      <NavItem
        active={isActive("/projects")}
        href="/projects"
        num="03"
        name={data.projectsLabel}
      ></NavItem>
    </div>
  );
};

export default Navigation;
