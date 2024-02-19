import React from "react";
import prismadb from "@/lib/prismadb";
import SizeForm from "./components/SizeForm";

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  let size;
  if (params.sizeId === "new") {
    size = null;
  } else {
    size = await prismadb.size.findUnique({
      where: {
        id: params.sizeId,
      },
    });
  }

  return (
    <div className="w-full">
      <SizeForm initialData={size} />
    </div>
  );
};

export default SizePage;
