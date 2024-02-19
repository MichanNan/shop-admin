import React from "react";
import prismadb from "@/lib/prismadb";
import ColorTable from "./components/ColorTable";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/utils";

const Colors = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }
  const colors = await prismadb.color.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <ColorTable data={colors} />;
};

export default Colors;
