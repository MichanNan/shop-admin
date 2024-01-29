import React from "react";
import prismadb from "@/lib/prismadb";
import SizeTable from "./components/SizeTable";

const Sizes = async () => {
  const sizes = await prismadb.size.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <SizeTable data={sizes} />;
};

export default Sizes;
