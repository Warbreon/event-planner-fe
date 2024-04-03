import { combineReducers } from 'redux';
import { attendeeReducer } from './attendeeReducer';

export const rootReducer = combineReducers({
  attendees: attendeeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;