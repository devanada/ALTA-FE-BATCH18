import { useEffect, useState, useMemo, useCallback } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { format, parseISO } from "date-fns";

import { DataTable } from "@/components/data-table";

import { IBorrowAdmin } from "@/utils/apis/borrows/type";
import { getBorrows } from "@/utils/apis/borrows/api";

const BorrowDashboard = () => {
  const [datas, setDatas] = useState<IBorrowAdmin[]>([]);

  const columns = useMemo<ColumnDef<IBorrowAdmin>[]>(() => {
    return [
      {
        accessorKey: "id",
        header: "No",
      },
      {
        accessorKey: "user.full_name",
        header: "Name",
      },
      {
        accessorKey: "book.title",
        header: "Book Title",
      },
      {
        accessorKey: "borrow_date",
        header: "Borrow Date",
        cell: (info) =>
          format(parseISO(info.getValue() as string), "iii, dd MMM yyyy"),
      },
      {
        accessorKey: "due_date",
        header: "Due Date",
        cell: (info) =>
          format(parseISO(info.getValue() as string), "iii, dd MMM yyyy"),
      },
      {
        accessorKey: "return_date",
        header: "Return Date",
        cell: (info) => {
          const cellValue = info.getValue();

          return cellValue
            ? format(parseISO(cellValue as string), "iii, dd MMM yyyy")
            : cellValue;
        },
      },
    ];
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async function () {
    try {
      const result = await getBorrows();
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

export default BorrowDashboard;
