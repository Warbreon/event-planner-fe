const SET_EMAIL = 'SET_EMAIL';

const initialState = {
	email: '',
};

const userReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_EMAIL:
			return {
				...state,
				email: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
