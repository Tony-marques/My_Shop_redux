import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/home/HomePage.tsx";
import OrderPage from "../components/pages/order/OrderPage.tsx";
import ErrorPage from "../components/pages/error/ErrorPage.tsx";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
   },
   {
      path: "/order/:firstName",
      element: <OrderPage />,
   },
   {
      path: "*",
      element: <ErrorPage />,
   },
]);
