import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./employees";
// import eventsReducer from "./events";
import projectsReducer from "./projects"
import logger from "./middleware/logger";
import api from "./middleware/api";



const store = configureStore({
    reducer: projectsReducer,
    middleware: [api]
})

export default store;