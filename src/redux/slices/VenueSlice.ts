import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Address } from '../../models/Address';
import { StoreState } from '../store/Store';
import axiosInstance from '../../api/axios/AxiosInstance';
import { ENDPOINTS } from '../../api/endpoints/Endpoints';

interface VenueListState {
	list: Address[];
	isLoading: boolean;
	error: string | null;
}

const initialState: VenueListState = {
	list: [],
	isLoading: false,
	error: null,
};

export const fetchVenues = createAsyncThunk<Address[], void, { state: StoreState }>(
	'venue/fetchVenues',
	async (_, { getState }) => {
		const state = getState();
		if (state.venues.list.length > 0) {
			return state.venues.list;
		}

		const response = await axiosInstance.get<Address[]>(ENDPOINTS.getAllVenues);
		return response.data;
	}
);

const venueSlice = createSlice({
	name: 'venues',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchVenues.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchVenues.fulfilled, (state, action: PayloadAction<Address[]>) => {
				state.list = action.payload;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(fetchVenues.rejected, (state, action) => {
				state.error = action.error.message ?? null;
				state.isLoading = false;
			});
	},
});

export default venueSlice.reducer;