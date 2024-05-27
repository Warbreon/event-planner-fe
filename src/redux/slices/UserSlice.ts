import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../models/User';
import { StoreState } from '../store/Store';
import axiosInstance from '../../api/axios/AxiosInstance';
import { ENDPOINTS } from '../../api/endpoints/Endpoints';

interface UserListState {
	list: User[];
	isLoading: boolean;
	error: string | null;
}

const initialState: UserListState = {
	list: [],
	isLoading: false,
	error: null,
};

export const fetchUsers = createAsyncThunk<User[], void, { state: StoreState }>(
	'user/fetchUsers',
	async (_, { getState }) => {
		const state = getState();
		if (state.users.list.length > 0) {
			return state.users.list;
		}

		const response = await axiosInstance.get<User[]>(ENDPOINTS.getUsers);
		return response.data;
	}
);

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
				state.list = action.payload;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.error = action.error.message ?? null;
				state.isLoading = false;
			});
	},
});

export default userSlice.reducer;
