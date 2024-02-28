import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const session = localStorage.getItem("token");

  return (
    <div className="bg-background/95 sticky left-0 right-0 top-0 z-20 border-b backdrop-blur">
      <nav className="container flex h-16 items-center px-4">
        <div className="mr-4 flex">
          <Link className="text-lg font-semibold text-nowrap" to="/">
            Library App
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-end h-full w-full">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback>LA</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44" align="end" forceMount>
              {session ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem asChild>
                  <Link to="/login">Login</Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
