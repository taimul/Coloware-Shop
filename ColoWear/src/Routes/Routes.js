import Cart from "../Components/Pages/Cart/Cart";
import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import ProductDetails from "../Components/Pages/Products/ProductDetails";
import Products from "../Components/Pages/Products/Products";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Components/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
