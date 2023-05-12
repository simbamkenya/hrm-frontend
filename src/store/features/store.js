import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./employees";
import logger from "./middleware/logger";
import api from "./middleware/api";


const store = configureStore({
    reducer,
    middleware: [logger, api]
})

export default store;