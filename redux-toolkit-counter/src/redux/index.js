import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/couterSlice';

export default configureStore({
    reducer:{
        counter: counterReducer
    }
})