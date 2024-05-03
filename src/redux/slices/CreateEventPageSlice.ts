import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/User';

const initialState: User[] = [];

const createEventPageUserSlice = createSlice({
	name: 'createEventGuests',
	initialState,
	reducers: {
		add(state, action: PayloadAction<User>) {
			state.push(action.payload);
		},
		removeById(state, action: PayloadAction<number>) {
			const index = state.findIndex((user) => user.id === action.payload);
			if (index !== -1) {
				state.splice(index, 1);
			}
		},
		removeAll() {
			return [];
		},
	},
});

export const { add, removeById, removeAll } = createEventPageUserSlice.actions;
export default createEventPageUserSlice.reducer;
