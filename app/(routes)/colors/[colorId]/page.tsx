import React from "react";
import prismadb from "@/lib/prismadb";
import ColorForm from "./components/ColorForm";

const SizePage = async ({ params }: { params: { colorId: string } }) => {
  let color;
  if (params.colorId === "new") {
    color = null;
  } else {
    color = await prismadb.color.findUnique({
      where: {
        id: params.colorId,
      },
    });
  }

  return (
    <div className="w-full">
      <ColorForm initialData={color} />
    </div>
  );
};

export default SizePage;
