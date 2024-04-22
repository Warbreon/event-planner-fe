enum ROUTES {
	INDEX = '/',
	AUTH = 'auth',
	SIGN_IN = '/signin',
	FORGOT_PASSWORD = '/signin/forgotpassword',
	RESET_PASSWORD = '/resetpassword/:uuid',
	EVENT = '/events/event/:eventId',
	MY_EVENTS = '/events/my',
	ADD_EVENT = '/events/event/new',
	EDIT_EVENT = '/events/event/edit/:eventId',
	SETTINGS = '/settings',
	PRIVACY_POLICY = '/privacy',
	TERMS_OF_SERVICE = '/terms',
	SUPPORT = '/support',
	NOT_FOUND = '*',
}

export default ROUTES;
