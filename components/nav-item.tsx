import React from "react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  active: boolean;
  num: string;
  name: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, active, num, name }) => {
  return (
    <Link href={href} className="flex flex-row py-3 items-center group">
      <div
        className={
          active
            ? "mr-4 text-primary-500 transition-all group-hover:text-primary-300"
            : "mr-4 text-surface-500 transition-all group-hover:text-primary-500"
        }
      >
        {num}
      </div>
      <div
        className={
          active
            ? "w-16 h-0.5 bg-primary-500 mr-4 transition-all group-hover:w-16 group-hover:bg-primary-300"
            : "w-8 h-0.5 bg-surface-500 mr-4 transition-all group-hover:w-16 group-hover:bg-primary-500"
        }
      />
      <div
        className={
          active
            ? "transition-all text-primary-500 group-hover:text-primary-300"
            : "transition-all text-on-background group-hover:text-primary-500"
        }
      >
        {name}
      </div>
    </Link>
  );
};

export default NavItem;
