import { ShoppingBasket, Trash2 } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import useBorrowStore from "@/utils/states/borrow";
import { Button } from "./ui/button";

const Cart = () => {
  const { cart, removeBook, clearCart } = useBorrowStore((state) => state);

  function handleBorrow() {
    const body = {
      bookId: cart.map((item) => item.id),
      borrow_date: new Date().toISOString(),
    };

    console.log(body);
    // TODO: Add POST Borrow
    clearCart();
  }

  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBasket />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            This is your list of books that you want to borrow
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4 w-full overflow-auto">
          {cart.map((book) => (
            <div className="flex gap-2 items-center" key={book.id}>
              <img
                className="object-contain w-1/4"
                src={book.cover_image}
                alt={book.title}
              />
              <p className="flex-grow">{book.title}</p>
              <Trash2 onClick={() => removeBook(book)} />
            </div>
          ))}
        </div>
        <SheetFooter>
          <Button onClick={() => handleBorrow()}>Borrow</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
