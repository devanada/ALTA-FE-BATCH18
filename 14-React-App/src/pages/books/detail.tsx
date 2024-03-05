import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout";

import { getDetailBook } from "@/utils/apis/books/api";
import { IBook } from "@/utils/apis/books/type";
import useBorrowStore from "@/utils/states/borrow";
import { Button } from "@/components/ui/button";

const DetailBook = () => {
  const { addBook, cart } = useBorrowStore((state) => state);
  const params = useParams();

  const [data, setData] = useState<IBook>();

  const isInCart = useMemo(() => {
    const checkCart = cart.find((item) => item.id === +params.id_book!);

    if (checkCart) return true;

    return false;
  }, [cart]);

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

  function handleBorrow() {
    toast("Book has been added to cart");
    addBook(data!);
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
            <Button onClick={() => handleBorrow()} disabled={isInCart}>
              {isInCart ? "In Cart" : "Borrow"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default DetailBook;
