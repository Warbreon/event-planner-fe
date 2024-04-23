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
		singIn(state, action: PayloadAction<AuthenticationState>) {
			const { signedIn, accessToken, refreshToken, email, role } = action.payload;
			state.signedIn = signedIn;
			state.accessToken = accessToken;
			state.refreshToken = refreshToken;
			state.email = email;
			state.role = role;
		},
		signOut(state) {
			const { signedIn, accessToken, refreshToken, email, role } = initialState;
			state.signedIn = signedIn;
			state.accessToken = accessToken;
			state.refreshToken = refreshToken;
			state.email = email;
			state.role = role;
		},
		refreshAccessToken(state, action: PayloadAction<string>) {
			const newAccessToken = action.payload;
			state.accessToken = newAccessToken;
		},
	},
});

export const { singIn, signOut, refreshAccessToken } = authenticationSlice.actions;
export default authenticationSlice.reducer;
