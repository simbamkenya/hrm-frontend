import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./employees";
import eventsReducer from "./events"
import logger from "./middleware/logger";
import api from "./middleware/api";



const store = configureStore({
    reducer: eventsReducer,
    middleware: [api]
})

export default store;