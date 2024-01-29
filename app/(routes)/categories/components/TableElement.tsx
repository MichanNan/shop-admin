import React from "react";

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
const TableElement = () => {
  const router = useRouter();
  return (
    <div>
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
          <TableRow className="text-center">
            <TableCell className="font-medium">Hat</TableCell>
            <TableCell>2023-01-01</TableCell>
            <TableCell className="flex gap-2 justify-center">
              <Button
                variant="outline"
                className="h-8"
                onClick={() => router.push("/categories/new")}
              >
                update
              </Button>
              <Button variant="destructive" className="h-8">
                delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TableElement;
