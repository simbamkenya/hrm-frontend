import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./employees";


const store = configureStore({
    reducer: reducer
})

export default store