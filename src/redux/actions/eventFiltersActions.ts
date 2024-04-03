export const SET_DATE_FILTER = 'SET_DATE_FILTER';
export const SET_LOCATION_FILTER = 'SET_LOCATION_FILTER';
export const SET_TAG_FILTER = 'SET_TAG_FILTER';

export const setDateFilter = (date: string) => ({
    type: SET_DATE_FILTER,
    payload: date,
});

export const setLocationFilter = (location: string) => ({
    type: SET_LOCATION_FILTER,
    payload: location,
});

export const setTagFilter = (tag: string) => ({
    type: SET_TAG_FILTER,
    payload: tag,
});

export type EventFiltersActions = ReturnType<typeof setDateFilter> | ReturnType<typeof setLocationFilter> | ReturnType<typeof setTagFilter>;