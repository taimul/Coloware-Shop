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

  const fetchProductDetail = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = await res.json();
      // console.log(data);
      dispatch({ type: "GET_PRODUCT_BY_ID", payload: data });
    } catch (err) {
      console.log(err);
    }
  };

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
    productDetail: [],
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
    <Cart.Provider
      value={{
        state,
        dispatch,
        productState,
        productDispatch,
        fetchProductDetail,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
