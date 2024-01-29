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
import { Category, Size } from "@prisma/client";
import toast from "react-hot-toast";
import axios from "axios";
import AlertModal from "./Modal";

interface TableElementProps {
  title: string;
  data: Category[] | Size[] | null;
}
const TableElement: React.FC<TableElementProps> = ({ title, data }) => {
  const [isLoading, setIsloading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toDeletedItem, setToDeletedItem] = useState("");
  const router = useRouter();

  const onDelete = async (id: string) => {
    try {
      setIsloading(true);
      await axios.delete(`/api/${title}/${id}`);
      router.push(`/${title}`);
      router.refresh();
      toast.success("deleted!");
    } catch (error) {
      toast.error("Make sure you delete all the related products first!");
    } finally {
      setIsloading(false);
      setIsOpen(false);
    }
  };
  return (
    <>
      <AlertModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Are you sure to delete?"
        description="This action cannot be undone."
        onClose={() => setIsOpen(false)}
        onConfirm={() => onDelete(toDeletedItem)}
      />
      <Table>
        <TableCaption>{`A list of your ${title}.`}</TableCaption>
        <TableHeader className="text-center">
          <TableRow>
            <TableHead className="text-center">{title}</TableHead>
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
                  onClick={() => router.push(`/${title}/${item.id}`)}
                >
                  update
                </Button>
                <Button
                  disabled={isLoading}
                  variant="destructive"
                  className="h-8"
                  onClick={() => {
                    setIsOpen(true);
                    setToDeletedItem(item.id);
                  }}
                >
                  delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableElement;
