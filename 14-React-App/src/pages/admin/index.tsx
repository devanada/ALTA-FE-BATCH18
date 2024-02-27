import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { DataTable } from "@/components/data-table";
import Layout from "@/components/layout";

import { IBook } from "@/utils/apis/books/type";
import { getBooks } from "@/utils/apis/books/api";

const columns: ColumnDef<IBook>[] = [
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

const Dashboard = () => {
  const [datas, setDatas] = useState<IBook[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooks();
      setDatas(result.payload.datas);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }
  return (
    <Layout>
      <DataTable columns={columns} data={datas} />
    </Layout>
  );
};

export default Dashboard;
