import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Category } from "@prisma/client";
import toast from "react-hot-toast";
import axios from "axios";

interface TableElementProps {
  data: Category[] | null;
}
const TableElement: React.FC<TableElementProps> = ({ data }) => {
  const [isLoading, setIsloading] = useState(false);

  const router = useRouter();

  const onDelete = async (id: string) => {
    try {
      setIsloading(true);
      await axios.delete(`/api/categories/${id}`);
      router.push("/categories");
      router.refresh();
      toast.success("Category deleted!");
    } catch (error) {
      toast.error(
        "Make sure you delete all products using the category first!"
      );
    } finally {
      setIsloading(false);
    }
  };
  return (
    <Table>
      <TableCaption>A list of your categories.</TableCaption>
      <TableHeader className="text-center">
        <TableRow>
          <TableHead className="text-center">Category</TableHead>
          <TableHead className="text-center">Date</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item) => (
          <TableRow key={item.id} className="text-center">
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>2023-01-01</TableCell>
            <TableCell className="flex gap-2 justify-center">
              <Button
                variant="outline"
                className="h-8"
                onClick={() => router.push(`/categories/${item.id}`)}
              >
                update
              </Button>
              <Button
                disabled={isLoading}
                variant="destructive"
                className="h-8"
                onClick={() => onDelete(item.id)}
              >
                delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableElement;
