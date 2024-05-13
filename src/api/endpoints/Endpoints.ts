export const ENDPOINTS = {
	getEvents: '/events',
	getEventById: (id: number | string) => `/events/${id}`,
	getEventsUserAttending: '/events/user-registered',
	getEventsCreatedByUser: '/events/created-by-user',
	registerToEvent: '/attendee/register',
	unregisterFromEvent: (eventId: number | string) => `/attendee/unregister/${eventId}`,
	createNewEvent: '/events/create/new',
	getAllUsers: '/users/all',
	getUserInfo: '/users/current/info',
	getAllTags: '/tags',
	authenticate: '/auth/authenticate',
	refreshAccessToken: '/auth/refresh',
	getAllCities: '/addresses/cities',
	getAllAdmins: '/users/admins',
	demoteAdmin: (id: number | string) => `/users/admins/demote/${id}`
};
