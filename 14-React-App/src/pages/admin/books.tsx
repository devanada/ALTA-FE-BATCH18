import { useEffect, useState, useMemo, useCallback } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import { DataTable } from "@/components/data-table";

import { IBook } from "@/utils/apis/books/type";
import { getBooks } from "@/utils/apis/books/api";

const BookDashboard = () => {
  const [datas, setDatas] = useState<IBook[]>([]);

  const columns = useMemo<ColumnDef<IBook>[]>(() => {
    return [
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "author",
        header: "Author",
      },
      {
        accessorKey: "category",
        header: "Category",
      },
      {
        accessorKey: "isbn",
        header: "ISBN",
      },
    ];
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async function () {
    try {
      const result = await getBooks();
      setDatas(result.payload.datas);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }, []);

  return (
    <>
      <DataTable columns={columns} data={datas} />
    </>
  );
};

export default BookDashboard;
