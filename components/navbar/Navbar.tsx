"use client";

import React, { useState } from "react";
import MainNav from "./MainNav";
import { AlignJustify } from "lucide-react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const session = useSession();

  if (session.status === "unauthenticated") return null;
  return (
    <div className={`flex flex-col transition-all`}>
      <div
        className="md:hidden items-center p-4 "
        onClick={() => setShowNav((prev) => !prev)}
      >
        <AlignJustify />
      </div>
      <div>
        <MainNav showNav={showNav} />
      </div>
    </div>
  );
};

export default Navbar;
