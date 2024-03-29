import { Attendee } from '../../types/attendees';
import { AttendeeActions, SET_ATTENDEES } from '../actions/attendeeActions.ts';

type AttendeeState = {
    list: Attendee[];
}

const initialState: AttendeeState = {
    list: [],
};

export const attendeeReducer = (
    state = initialState,
    action: AttendeeActions
): AttendeeState => {
    switch (action.type) {
        case SET_ATTENDEES:
            return { ...state, list: action.payload };
        default:
            return state;
    }
};