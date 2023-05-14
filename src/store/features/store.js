import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employees from "./employees";
import events from "./events";
import projects from "./projects";
import clients from "./clients";
import logger from "./middleware/logger";
import api from "./middleware/api";

const reducer = combineReducers({
  employees,
  events,
  projects,
  clients,
});

const store = configureStore({
    reducer,
    middleware: [api]
});


export default store;