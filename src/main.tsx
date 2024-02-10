import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContextProvider } from "./context/AdminContext.tsx";
import { PhoneContextProvider } from "./context/PhoneContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Provider store={store}>
         <AdminContextProvider>
            <PhoneContextProvider>
               <RouterProvider router={router} />
            </PhoneContextProvider>
         </AdminContextProvider>
         <ToastContainer position="bottom-right" />
      </Provider>
   </React.StrictMode>
);
