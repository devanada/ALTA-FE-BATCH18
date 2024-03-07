import { useLoaderData } from "react-router-dom";
import { ReactNode, useEffect } from "react";

import Navbar from "./navbar";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  centerY?: boolean;
  centerX?: boolean;
}

const Layout = (props: Props) => {
  const { children, centerX, centerY } = props;
  const loader = useLoaderData();

  useEffect(() => {
    document.title = loader as string;
  }, []);

  return (
    <div className="w-full h-dvh bg-white overflow-auto flex flex-col">
      <Navbar />
      <div
        className={cn(
          "container grow py-4 px-8 flex flex-col",
          centerX && "items-center",
          centerY && "justify-center"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
