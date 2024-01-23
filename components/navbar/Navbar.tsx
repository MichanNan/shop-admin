"use client";

import React, { useState } from "react";
import MainNav from "./MainNav";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div
        className="md:hidden flex items-center p-4 transition-all"
        onClick={() => setShowNav((prev) => !prev)}
      >
        <AlignJustify />
      </div>
      <div>
        <MainNav showNav={showNav} />
      </div>
    </>
  );
};

export default Navbar;
