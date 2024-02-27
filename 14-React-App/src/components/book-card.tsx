import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  cover_image: string;
  author: string;
  id: number;
}

const BookCard = (props: Props) => {
  const { title, cover_image, author, id } = props;

  return (
    <Card>
      <CardContent className="flex flex-col">
        <img
          className="aspect-[3/4] h-auto w-auto object-cover"
          src={cover_image}
          alt={title}
        />
        <Link className="font-bold text-lg text-center" to={`/books/${id}`}>
          {title}
        </Link>
        <p className="font-light text-base text-center">{author}</p>
      </CardContent>
    </Card>
  );
};

export default BookCard;
