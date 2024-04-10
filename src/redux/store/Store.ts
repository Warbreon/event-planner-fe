import { configureStore } from '@reduxjs/toolkit';
import attendeesSlice from '../slices/AttendeesSlice';
import userSlice from '../slices/UserSlice';

export const store = configureStore({
	reducer: {
		attendees: attendeesSlice,
		user: userSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
