enum ROUTES {
	INDEX = '/',
	SIGN_IN = '/signin',
	FORGOT_PASSWORD = SIGN_IN + '/forgotpassword',
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
