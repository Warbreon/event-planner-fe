import { configureStore } from '@reduxjs/toolkit';
import attendeesSlice from '../slices/AttendeesSlice';
export const store = configureStore({
	reducer: {
		attendees: attendeesSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
