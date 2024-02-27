import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "sonner";

import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout";

import { getDetailBook } from "@/utils/apis/books/api";
import { IBook } from "@/utils/apis/books/type";

const DetailBook = () => {
  const params = useParams();

  const [data, setData] = useState<IBook>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailBook(params.id_book!);
      setData(result.payload);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <Layout>
      <Card>
        <CardContent className="flex flex-col md:flex-row gap-4 pt-6">
          <img
            className="aspect-[3/4] object-cover w-60"
            src={data?.cover_image}
            alt={data?.title}
          />
          <div>
            <p className="font-bold text-xl">{data?.title}</p>
            <p className="font-light">by {data?.author}</p>
            <p className="text-justify">{data?.description}</p>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default DetailBook;
