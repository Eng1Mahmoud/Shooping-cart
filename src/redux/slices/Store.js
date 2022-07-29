import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
let Store = configureStore({ reducer: { Cart: CartSlice } })
export default Store