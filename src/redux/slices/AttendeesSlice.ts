import { Attendee } from '../../interfaces/attendee';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AttendeeState {
    list: Attendee[];
}

const initialState: AttendeeState = {
    list: [],
};

export const attendeesSlice = createSlice({
  name: 'attendees',
  initialState,
  reducers: {
    setAttendees: (state, action: PayloadAction<Attendee[]>) => {
        state.list = action.payload;
    },
  },
});

export const { setAttendees } = attendeesSlice.actions;

export default attendeesSlice.reducer;