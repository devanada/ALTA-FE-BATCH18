import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "@/components/ui/sonner";
import App from "@/routes";
import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
