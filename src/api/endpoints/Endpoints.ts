export const ENDPOINTS = {
	getEvents: '/events',
	getEventById: (id: number | string) => `/events/${id}`,
	getEventsUserAttending: '/events/user-registered',
	getEventsCreatedByUser: '/events/created-by-user',
	registerToEvent: '/attendee/register',
	createNewEvent: '/events/create/new',
	getAllUsers: '/users/all',
	getAllTags: '/tags',
	authenticate: '/auth/authenticate',
	refreshAccessToken: '/auth/refresh',
	getAllCities: '/addresses/cities',
	getAllAdmins: '/users/admins',
	demoteAdmin: (id: number | string) => `/users/admins/demote/${id}`
};
