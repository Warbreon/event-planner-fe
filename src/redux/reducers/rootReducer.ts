import { combineReducers } from 'redux';
import { attendeeReducer } from './attendeeReducer.ts';

export const rootReducer = combineReducers({
  attendees: attendeeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;