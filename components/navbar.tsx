import { UserButton } from "@clerk/nextjs";
import React, { FC } from "react";

import { MainNav } from "@/components/main-nav";

interface navbarProps {}

const Navbar: FC<navbarProps> = ({}) => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>store switcher</div>
        <MainNav />
        <div className="ml-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
