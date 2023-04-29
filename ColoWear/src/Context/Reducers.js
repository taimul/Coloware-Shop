// Reducers.js
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload }; // Update products state with payload value

    //get product details by id
    case "GET_PRODUCT_BY_ID":
      const product = action.payload;
      return { ...state, productDetail: product };

    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_GENDER":
      return { ...state, byGender: action.payload, byType: "", byCategory: "" };
    case "FILTER_BY_TYPE":
      return { ...state, byType: action.payload, byGender: "", byCategory: "" };
    case "FILTER_BY_CATEGORY":
      return { ...state, byCategory: action.payload, byGender: "", byType: "" };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
      };
    default:
      return state;
  }
};
