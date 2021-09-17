// import { createContext, useContext } from "react";
// import { cartReducer } from "./Reducers";
// import ProductListing from "../components/ProductListing";

// const Cart = createContext();

// function Context({ children }) {

//     const [state, dispatch] = useReducer(cartReducer, {
//         products: ProductListing.products,
//         cart: []
//     });

//     return <Cart.Provider value={{ state, dispatch }}>
//         {children}
//     </Cart.Provider>
// };

// export default Context;

// export const CartState = () => {
//     return useContext(Cart);
// };

