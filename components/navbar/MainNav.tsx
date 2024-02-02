"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface MainNavProps {
  showNav: boolean;
}

const MainNav: React.FC<MainNavProps> = ({ showNav }) => {
  const session = useSession();

  if (!session) {
    return null;
  }
  const pathname = usePathname();
  const routes = [
    {
      href: `/`,
      label: "Overview",
      active: pathname === `/`,
    },
    {
      href: `/categories`,
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
    <>
      <nav
        className={`flex flex-col space-y-6 font-xl pl-8 fixed z-30 w-[12rem] ${
          showNav ? "left-0 bg-white" : "-left-full"
        } md:static md:mt-5 md:flex-row transition-all`}
      >
        <p className="font-bold mt-5">Welcom, {session?.data?.user?.name}</p>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-md font-medium transition-colors hover:text-primary hover:font-bold",
              route.active ? "text-black font-bold" : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}

        <Button
          className="w-[5rem] bg-slate-500 -translate-x-2 -translate-y-1"
          onClick={() => signOut()}
        >
          Sign Out
        </Button>
      </nav>
    </>
  );
};

export default MainNav;
