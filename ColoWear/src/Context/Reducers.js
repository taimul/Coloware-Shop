// Reducers.js
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload }; // Update products state with payload value
    default:
      return state;
  }
};
