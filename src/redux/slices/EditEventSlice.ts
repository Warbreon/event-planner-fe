import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from '../../models/User';

const initialState: User[] = [];

const editEvenPageAttendeeSlice = createSlice({
  name: 'editEventGuests',
  initialState,
  reducers: {
    saveFetchedAttendee(state, action: PayloadAction<User[]>) {
      state.push(...action.payload);
    },
    removeAllFetchedAttendees() {
      return [];
    }
  }
});

export const {saveFetchedAttendee, removeAllFetchedAttendees} = editEvenPageAttendeeSlice.actions;
export default editEvenPageAttendeeSlice.reducer;