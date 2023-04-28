import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer, productReducer } from "./Reducers";
const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: products });
  }, [products]);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    byGender: "",
    byCategory: "",
    byType: "",
    searchQuery: "",
  });
  //   console.log(productState);
  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
