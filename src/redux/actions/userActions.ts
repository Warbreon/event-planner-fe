export const SET_EMAIL = 'SET_EMAIL';

export const setEmail = (email: string) => ({
  type: SET_EMAIL,
  payload: email,
});

export type ActionTypes = ReturnType<typeof setEmail>;
