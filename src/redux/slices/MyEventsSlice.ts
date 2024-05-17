import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Event } from '../../models/Event';
import { StoreState } from '../store/Store';
import axiosInstance from '../../api/axios/AxiosInstance';
import { ENDPOINTS } from '../../api/endpoints/Endpoints';

interface MyEventsState {
	userEventList: Event[];
	isLoadingUserEvents: boolean;
	errorFetchingUserEventList: string | null;
	createdByUserList: Event[];
	isLoadingCreatedByUser: boolean;
	errorFetchingCreatedByUser: string | null;
}

const initialState: MyEventsState = {
	userEventList: [],
	isLoadingUserEvents: false,
	errorFetchingUserEventList: null,
	createdByUserList: [],
	isLoadingCreatedByUser: false,
	errorFetchingCreatedByUser: null,
};

export const fetchUserEvents = createAsyncThunk<Event[], void, { state: StoreState }>(
	'my_events/fetchUserEvents',
	async (_, { getState }) => {
		const state = getState();
		if (state.my_events.userEventList.length > 0) {
			return state.my_events.userEventList;
		}

		const response = await axiosInstance.get<Event[]>(ENDPOINTS.getEventsUserAttending);
		return response.data;
	}
);

export const fetchEventsCreatedByUser = createAsyncThunk<Event[], void, { state: StoreState }>(
	'my_events/fetchEventsCreatedByUser',
	async (_, { getState }) => {
		const state = getState();
		if (state.my_events.createdByUserList.length > 0) {
			return state.my_events.createdByUserList;
		}

		const response = await axiosInstance.get<Event[]>(ENDPOINTS.getEventsCreatedByUser);
		return response.data;
	}
);

const MyEventsSlice = createSlice({
	name: 'my_events',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserEvents.pending, (state) => {
				state.isLoadingUserEvents = true;
				state.errorFetchingUserEventList = null;
			})
			.addCase(fetchUserEvents.fulfilled, (state, action: PayloadAction<Event[]>) => {
				state.userEventList = action.payload;
				state.isLoadingUserEvents = false;
				state.errorFetchingUserEventList = null;
			})
			.addCase(fetchUserEvents.rejected, (state, action) => {
				state.errorFetchingUserEventList = action.error.message ?? null;
				state.isLoadingUserEvents = false;
			})
			.addCase(fetchEventsCreatedByUser.pending, (state) => {
				state.isLoadingCreatedByUser = true;
				state.errorFetchingCreatedByUser = null;
			})
			.addCase(fetchEventsCreatedByUser.fulfilled, (state, action: PayloadAction<Event[]>) => {
				state.createdByUserList = action.payload;
				state.isLoadingCreatedByUser = false;
				state.errorFetchingCreatedByUser = null;
			})
			.addCase(fetchEventsCreatedByUser.rejected, (state, action) => {
				state.errorFetchingCreatedByUser = action.error.message ?? null;
				state.isLoadingCreatedByUser = false;
			});
	},
});

export default MyEventsSlice.reducer;
