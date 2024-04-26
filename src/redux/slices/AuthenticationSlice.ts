import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthenticationState {
	signedIn: boolean;
	accessToken: string;
	refreshToken: string;
	email: string;
	role: string;
}

const initialState: AuthenticationState = {
	signedIn: false,
	accessToken: '',
	refreshToken: '',
	email: '',
	role: '',
};

const authenticationSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signIn(state, action: PayloadAction<AuthenticationState>) {
			return {
				...state,
				...action.payload,
			};
		},
		signOut() {
			return {
				...initialState,
			};
		},
		refreshAccessToken(state, action: PayloadAction<string>) {
			return {
				...state,
				accessToken: action.payload,
			};
		},
	},
});

export const { signIn, signOut, refreshAccessToken } = authenticationSlice.actions;
export default authenticationSlice.reducer;
