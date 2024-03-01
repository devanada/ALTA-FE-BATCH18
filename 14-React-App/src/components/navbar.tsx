import { Link } from "react-router-dom";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useToken } from "@/utils/contexts/token";

const Navbar = () => {
  const { changeToken, token, user } = useToken();

  function handleLogout() {
    changeToken();
    toast("Logout successfully");
  }

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
                <AvatarImage
                  src={user?.profile_picture}
                  alt={user?.full_name}
                />
                <AvatarFallback>LA</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44" align="end" forceMount>
              {token ? (
                <>
                  <DropdownMenuLabel>Hi! {user?.full_name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {user?.role === "admin" ? (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard">Dashboard</Link>
                      </DropdownMenuItem>
                    </>
                  ) : null}
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleLogout()}>
                    Logout
                  </DropdownMenuItem>
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
