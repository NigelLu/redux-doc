import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/redux/counter/counterSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
