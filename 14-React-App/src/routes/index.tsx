import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoutes from "./protected-routes";
import Homepage from "@/pages";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Profile from "@/pages/user/profile";
import EditProfile from "@/pages/user/edit-profile";
import HistoryBorrow from "@/pages/user/history-borrow";
import MainBooks from "@/pages/books";
import DetailBook from "@/pages/books/detail";
import Dashboard from "@/pages/admin";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/edit",
        element: <EditProfile />,
      },
      {
        path: "/profile/borrows",
        element: <HistoryBorrow />,
      },
      {
        path: "/books",
        element: <MainBooks />,
      },
      {
        path: "/books/:id_book",
        element: <DetailBook />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
