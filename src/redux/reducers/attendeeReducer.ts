import { Attendee } from '../../interfaces/attendee';
import { AttendeeActions, SET_ATTENDEES } from '../actions/attendeeActions';

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