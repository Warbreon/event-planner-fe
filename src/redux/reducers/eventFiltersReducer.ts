import { EventFiltersActions, SET_DATE_FILTER, SET_TAG_FILTER, SET_LOCATION_FILTER } from "../actions/eventFiltersActions";

type EventFiltersState = {
    eventTag: string;
    date: string;
    location: string;
}

const initialState: EventFiltersState = {
    eventTag: 'All events',
    date: 'This year',
    location: 'All locations',
}

export const eventFiltersReducer = (state = initialState, action: EventFiltersActions): EventFiltersState => {
    switch (action.type) {
        case SET_DATE_FILTER:
            return { ...state, date: action.payload };
        case SET_LOCATION_FILTER:
            return { ...state, location: action.payload };
        case SET_TAG_FILTER:
            return { ...state, eventTag: action.payload };
        default:
            return state;
    }
}