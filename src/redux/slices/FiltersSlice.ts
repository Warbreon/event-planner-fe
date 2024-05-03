import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EventFiltersState } from "../../pages/explore-events/eventFiltersInterface";

const initialState: EventFiltersState = {
    eventTag: [],
    date: '365',
    location: 'all',
    name: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setEventTags: (state, action: PayloadAction<number[]>) => {
            state.eventTag = action.payload;
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload;
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        }
    },
});

export const { setEventTags, setDate, setLocation, setName } = filtersSlice.actions;
export default filtersSlice.reducer;
