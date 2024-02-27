import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "sonner";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

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
      if (role === "user") return <Navigate to="/" />;
    }

    if (userProtected.includes(pathname)) {
      if (role === "admin") return <Navigate to="/" />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
