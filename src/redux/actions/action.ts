// actions.ts

// Action types
export const SET_EMAIL = 'SET_EMAIL';

// Action creators
export const setEmail = (email: string) => ({
  type: SET_EMAIL,
  payload: email,
});

// Define the type for the action
export type ActionTypes = ReturnType<typeof setEmail>;
