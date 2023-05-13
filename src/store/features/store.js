import { configureStore } from "@reduxjs/toolkit";
import reducer from "./employees";
import logger from "./middleware/logger";
import api from "./middleware/api";



const store = configureStore({
    reducer,
    middleware: [api]
})

export default store;