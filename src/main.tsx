import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContextProvider } from "./context/AdminContext.tsx";
import { PhoneContextProvider } from "./context/PhoneContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <AdminContextProvider>
         <PhoneContextProvider>
            <RouterProvider router={router} />
         </PhoneContextProvider>
      </AdminContextProvider>
      <ToastContainer position="bottom-right" />
   </React.StrictMode>
);
