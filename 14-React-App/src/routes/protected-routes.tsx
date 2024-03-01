import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "sonner";

import { useToken } from "@/utils/contexts/token";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const { token, user } = useToken();

  const authProtected = ["/login", "/register"];
  const protectedByToken = [
    "/profile",
    "/profile/edit",
    "/profile/borrows",
    "/dashboard",
  ];
  const adminProtected = ["/dashboard"];
  const userProtected = ["/profile/borrows"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (protectedByToken.includes(pathname)) {
    if (!token) {
      toast("You need to login first");
      return <Navigate to="/login" />;
    }

    if (adminProtected.includes(pathname)) {
      if (user?.role === "user") return <Navigate to="/" />;
    }

    if (userProtected.includes(pathname)) {
      if (user?.role === "admin") return <Navigate to="/" />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
