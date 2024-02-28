import { useEffect, useState, useMemo, useCallback } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import { DataTable } from "@/components/data-table";
import Layout from "@/components/layout";

import { IBook } from "@/utils/apis/books/type";
import { getBooks } from "@/utils/apis/books/api";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [datas, setDatas] = useState<IBook[]>([]);
  const [trigger, setTrigger] = useState(false);

  const columns = useMemo<ColumnDef<IBook>[]>(() => {
    console.log(trigger);
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
  }, [trigger]);

  const fetchData = useCallback(async function () {
    try {
      console.log(trigger);
      const result = await getBooks();
      setDatas(result.payload.datas);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }, []);

  return (
    <Layout>
      <Button onClick={() => setTrigger(!trigger)}>Test</Button>
      <DataTable columns={columns} data={datas} />
    </Layout>
  );
};

export default Dashboard;
