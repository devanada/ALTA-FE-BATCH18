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
import { getDetailBook } from "@/utils/apis/books/api";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: () => {
          return "Homepage - Library App";
        },
      },
      {
        path: "/login",
        element: <Login />,
        loader: () => {
          return "Login - Library App";
        },
      },
      {
        path: "/register",
        element: <Register />,
        loader: () => {
          return "Register - Library App";
        },
      },
      {
        path: "/profile",
        element: <Profile />,
        loader: () => {
          return "Profile - Library App";
        },
      },
      {
        path: "/profile/edit",
        element: <EditProfile />,
        loader: () => {
          return "Edit Profile - Library App";
        },
      },
      {
        path: "/profile/borrows",
        element: <HistoryBorrow />,
        loader: () => {
          return "My Borrow History - Library App";
        },
      },
      {
        path: "/books",
        element: <MainBooks />,
        loader: () => {
          return "Books - Library App";
        },
      },
      {
        path: "/books/:id_book",
        element: <DetailBook />,
        loader: async ({ params }) => {
          const book = await getDetailBook(params.id_book as string);
          return `${book.payload.title} - Library App`;
        },
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => {
          return "Dashboard - Library App";
        },
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
