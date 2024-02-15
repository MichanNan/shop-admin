"use client";
import { Category, Color, Order, Product, Size } from "@/types";
import React from "react";
import { Button } from "./ui/button";

interface PaginationProps {
  data: Order[] | Product[] | Category[] | Color[] | Size[];
  pageStartIndex: number;
  pageEndIndex: number;
  setPageStartIndex: (value: number | ((prev: number) => number)) => void;
  setPageEndIndex: (value: number | ((prev: number) => number)) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  data,
  pageStartIndex,
  pageEndIndex,
  setPageEndIndex,
  setPageStartIndex,
}) => {
  const handleGoPreviousPage = () => {
    if (pageStartIndex > 10 && pageEndIndex <= data.length) {
      setPageStartIndex((prev: number) => prev - 10);
      setPageEndIndex((prev: number) => prev - 10);
    } else if (pageStartIndex < 10) {
      setPageStartIndex(0);
      setPageEndIndex(10);
    }
  };

  const handleGoNextPage = () => {
    if (data.length - pageEndIndex < 10) {
      setPageEndIndex(data.length - 1);
      setPageStartIndex(data.length - 11);
    } else {
      setPageEndIndex((prev) => prev + 10);
      setPageStartIndex((prev) => prev + 10);
    }
  };

  return (
    <div className="flex justify-end gap-4 mr-6">
      {pageStartIndex > 0 ? (
        <Button
          onClick={handleGoPreviousPage}
          variant="outline"
          className="hover:bg-gray-100"
        >
          Previous
        </Button>
      ) : (
        <div className="w-[72px]"></div>
      )}
      {pageEndIndex < data.length - 1 ? (
        <Button
          onClick={handleGoNextPage}
          variant="outline"
          className="hover:bg-gray-100"
        >
          Next
        </Button>
      ) : (
        <div className="w-[72px]"></div>
      )}
    </div>
  );
};

export default Pagination;
