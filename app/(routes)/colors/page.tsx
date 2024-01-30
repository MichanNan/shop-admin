import React from "react";
import prismadb from "@/lib/prismadb";
import ColorTable from "./components/ColorTable";

const Sizes = async () => {
  const colors = await prismadb.color.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <ColorTable data={colors} />;
};

export default Sizes;
