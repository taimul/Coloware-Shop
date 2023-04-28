import Cart from "../Components/Pages/Cart/Cart";
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
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
