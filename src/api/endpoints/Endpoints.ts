export const ENDPOINTS = {
	getEvents: '/events',
	getEventById: (id: number) => `/events/${id}`,
	getEventsUserAttending: '/events/user-registered',
	getEventsCreatedByUser: '/events/created-by-user',
	createNewEvent: '/events/create/new',

	registerToEvent: '/attendee/register',
	getAttendeeNotifications: '/attendee/notifications',
	markNotificationAsViewed: (id: number) => `/attendee/${id}/mark-as-viewed`,
	confirmPendingRegistration: (id: number) => `/attendee/register/${id}/confirm`,
	declinePendingRegistration: (id: number) => `/attendee/register/${id}/decline`,
	
	getAllTags: '/tags',

	authenticate: '/auth/authenticate',
	refreshAccessToken: '/auth/refresh',

	getAllCities: '/addresses/cities',

	getAllUsers: '/users/all',
	getAllAdmins: '/users/admins',
	getUserInfo: '/users/current/info',
	demoteAdmin: (id: number) => `/users/admins/demote/${id}`
};
