import { configureStore } from "@reduxjs/toolkit";
import attendeesSlice from "../features/attendees/attendeesSlice";

export const store = configureStore({
  reducer: {
    attendees: attendeesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;