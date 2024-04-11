import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
	loggedIn: boolean;
	email: string;
}

interface LogInPayload {
	email: string;
}

const initialState: UserState = {
	loggedIn: false,
	email: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logIn: (state, action: PayloadAction<LogInPayload>) => {
			state.loggedIn = true;
			state.email = action.payload.email;
		},
		logOut: (state) => {
			state = initialState;
		},
	},
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
