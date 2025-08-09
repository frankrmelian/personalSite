"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavItem from "./nav-item";

const Navigation: React.FC = () => {
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
        name="ABOUT"
      ></NavItem>
      <NavItem
        active={isActive("/blog")}
        href="/blog"
        num="02"
        name="BLOG"
      ></NavItem>
      <NavItem
        active={isActive("/projects")}
        href="/projects"
        num="03"
        name="PROJECTS"
      ></NavItem>
    </div>
  );
};

export default Navigation;
