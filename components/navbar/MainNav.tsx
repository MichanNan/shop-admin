"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

interface MainNavProps {
  showNav: boolean;
}

const MainNav: React.FC<MainNavProps> = ({ showNav }) => {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/`,
      label: "Overview",
      active: pathname === `/`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categories",
      active: pathname === `/categories`,
    },
    {
      href: `/sizes`,
      label: "Sizes",
      active: pathname === `/sizes`,
    },
    {
      href: `/colors`,
      label: "Colors",
      active: pathname === `/colors`,
    },
    {
      href: `/products`,
      label: "Products",
      active: pathname === `/products`,
    },
    {
      href: `/orders`,
      label: "Orders",
      active: pathname === `/orders`,
    },
  ];
  return (
    <nav
      className={`flex flex-col space-y-6  font-xl pt-3 pl-8 fixed ${
        showNav ? "left-0" : "-left-full"
      } md:static md:w-2 transition-all`}
    >
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
