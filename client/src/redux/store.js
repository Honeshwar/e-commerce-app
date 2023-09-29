import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
// console.log('cartReducer', cartReducer);


// const persistConfig = {}

const store = configureStore({
    reducer:{
        cart:cartReducer
    },
    devTools:true,
});
export default store;