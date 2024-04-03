import { combineReducers } from "@reduxjs/toolkit";
import { eventFiltersReducer } from "./eventFiltersReducer";

export const rootReducer = combineReducers({
    eventFilters: eventFiltersReducer
});

export type RootState = ReturnType<typeof rootReducer>;