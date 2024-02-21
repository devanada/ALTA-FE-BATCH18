import { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  centerY?: boolean;
  centerX?: boolean;
}

const Layout = (props: Props) => {
  const { children, centerX, centerY } = props;

  return (
    <div className="w-full h-dvh bg-white overflow-auto flex flex-col">
      <nav>Test</nav>
      <div
        className={cn(
          "container grow py-4 px-8 flex flex-col",
          centerX && "items-center",
          centerY && "justify-center"
        )}
      >
        {children}
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;
