import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UrlPathState {
    previousPath: string;
    rejectedAttendeeIds: number[];
}

const initialState: UrlPathState = {
    previousPath: '',
    rejectedAttendeeIds: [],
}

const urlPathSlice = createSlice({
	name: 'urlPath',
	initialState,
	reducers: {
        setPrevious(state, action: PayloadAction<string>) {
            state.previousPath = action.payload
        },
        clean() {
            return {
                ...initialState
            }
        },
        saveRejectedAttendee(state, action: PayloadAction<number[]>) {
            action.payload.forEach(id => {
                if (!state.rejectedAttendeeIds.includes(id)) {
                    state.rejectedAttendeeIds.push(id);
                }
            });
        },
        removeRejectedAttendee(state, action: PayloadAction<number>) {
            state.rejectedAttendeeIds = state.rejectedAttendeeIds.filter(id => id !== action.payload);
        }
	},
});

export const { setPrevious, clean, saveRejectedAttendee, removeRejectedAttendee } = urlPathSlice.actions;
export default urlPathSlice.reducer;
