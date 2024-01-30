import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AlertModal from "./Modal";
import { Button } from "@/components/ui/button";
import { Category, Color, Order, Product, Size } from "@prisma/client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { format } from "date-fns";
import axios from "axios";

interface TableElementProps {
  title: string;
  data: Category[] | Size[] | Color[] | Product[] | Order[] | null;
}
const TableElement: React.FC<TableElementProps> = ({ title, data }) => {
  const [isLoading, setIsloading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toDeletedItem, setToDeletedItem] = useState("");
  const [dataIsProduct, setDataIsProduct] = useState(false);
  const [dataIsOrder, setDataIsOrder] = useState(false);
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

  useEffect(() => {
    if (title === "products") {
      setDataIsProduct(true);
    } else if (title === "orders") {
      setDataIsOrder(true);
    } else {
      setDataIsProduct(false);
      setDataIsOrder(false);
    }
  }, []);

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
            {dataIsProduct && (
              <TableHead className="text-center">Price</TableHead>
            )}
            <TableHead className="text-center">Date</TableHead>
            {dataIsOrder && (
              <TableHead className="text-center">isPaid</TableHead>
            )}
            {!dataIsOrder && (
              <TableHead className="text-center">Actions</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item.id} className="text-center">
              <TableCell className="font-medium">
                {!dataIsOrder &&
                  (item as Product | Category | Size | Color).name}
                {dataIsOrder && item.id}
              </TableCell>
              {dataIsProduct && (
                <TableCell>{(item as Product).price}</TableCell>
              )}
              <TableCell>{format(item.createdAt, "MMMM do, yyyy")}</TableCell>
              <TableCell className="flex gap-2 justify-center">
                {!dataIsOrder && (
                  <Button
                    variant="outline"
                    className="h-8"
                    onClick={() => router.push(`/${title}/${item.id}`)}
                  >
                    update
                  </Button>
                )}
                {!dataIsOrder && (
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
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableElement;
