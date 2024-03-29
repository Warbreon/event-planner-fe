import { Attendee } from "../../types/attendees";

export const SET_ATTENDEES = 'SET_ATTENDEES';

type SetAttendeesAction = {
    type: typeof SET_ATTENDEES;
    payload: Attendee[];
}

export const setAttendees = (attendees: Attendee[]): SetAttendeesAction => ({
    type: SET_ATTENDEES,
    payload: attendees,
});

export type AttendeeActions = SetAttendeesAction
