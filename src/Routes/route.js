import { createBrowserRouter } from "react-router-dom";
import AddProductPage from "../Views/AddProductPage";
import ProductPage from "../Views/ProductPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductPage/>,
    },
    {
        path: "/add/:id",
        element: <AddProductPage/>,
      },
  ]);
  export {router}