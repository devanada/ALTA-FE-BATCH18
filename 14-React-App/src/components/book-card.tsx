import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  cover_image: string;
  author: string;
}

const BookCard = (props: Props) => {
  const { title, cover_image, author } = props;

  return (
    <Card>
      <CardContent>
        <img
          className="aspect-[3/4] h-auto w-auto object-cover"
          src={cover_image}
          alt={title}
        />
        <p className="font-bold text-lg text-center">{title}</p>
        <p className="font-light text-base text-center">{author}</p>
      </CardContent>
    </Card>
  );
};

export default BookCard;
