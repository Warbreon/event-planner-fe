import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Event } from '../../models/Event';
import { StoreState } from '../store/Store';
import axiosInstance from '../../api/axios/AxiosInstance';
import { ENDPOINTS } from '../../api/endpoints/Endpoints';

interface MyEventsState {
	userEventList: Event[];
	isLoadingUserEvents: boolean;
	createdByUserList: Event[];
	isLoadingCreatedByUser: boolean;
	error: string | null;
}

const initialState: MyEventsState = {
	userEventList: [],
	isLoadingUserEvents: false,
	createdByUserList: [],
	isLoadingCreatedByUser: false,
	error: null,
};

export const fetchUserEvents = createAsyncThunk<Event[], void, { state: StoreState }>(
	'myEvents/fetchUserEvents',
	async (_, { getState }) => {
		const state = getState();
		if (state.myEvents.userEventList.length > 0) {
			return state.myEvents.userEventList;
		}

		const response = await axiosInstance.get<Event[]>(ENDPOINTS.getEventsUserAttending);
		return response.data;
	}
);

export const fetchEventsCreatedByUser = createAsyncThunk<Event[], void, { state: StoreState }>(
	'myEvents/fetchEventsCreatedByUser',
	async (_, { getState }) => {
		const state = getState();
		if (state.myEvents.createdByUserList.length > 0) {
			return state.myEvents.createdByUserList;
		}

		const response = await axiosInstance.get<Event[]>(ENDPOINTS.getEventsCreatedByUser);
		return response.data;
	}
);

const MyEventsSlice = createSlice({
	name: 'myEvents',
	initialState,
	reducers: {
		unregisterFromUserEvent: (state, action: PayloadAction<number>) => {
			state.userEventList = state.userEventList.filter(event => event.id !== action.payload);
		},
		registerToUserEvent: (state, action: PayloadAction<Event>) => {
			state.userEventList.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserEvents.pending, (state) => {
				state.isLoadingUserEvents = true;
				state.error = null;
			})
			.addCase(fetchUserEvents.fulfilled, (state, action: PayloadAction<Event[]>) => {
				state.userEventList = action.payload;
				state.isLoadingUserEvents = false;
				state.error = null;
			})
			.addCase(fetchUserEvents.rejected, (state, action) => {
				state.error = action.error.message ?? null;
				state.isLoadingUserEvents = false;
			})
			.addCase(fetchEventsCreatedByUser.pending, (state) => {
				state.isLoadingCreatedByUser = true;
				state.error = null;
			})
			.addCase(fetchEventsCreatedByUser.fulfilled, (state, action: PayloadAction<Event[]>) => {
				state.createdByUserList = action.payload;
				state.isLoadingCreatedByUser = false;
				state.error = null;
			})
			.addCase(fetchEventsCreatedByUser.rejected, (state, action) => {
				state.error = action.error.message ?? null;
				state.isLoadingCreatedByUser = false;
			});
	},
});

export const { unregisterFromUserEvent, registerToUserEvent  } = MyEventsSlice.actions;
export default MyEventsSlice.reducer;
