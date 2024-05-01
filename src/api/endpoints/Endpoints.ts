export const ENDPOINTS = {
	getAllEvents: '/events',
	getEventById: (id: number | string) => `/events/${id}`,
	registerToEvent: '/attendee/register',
	createNewEvent: '/events/create/new',

	authenticate: '/auth/authenticate',
	refreshAccessToken: '/auth/refresh',

	getAllAdmins: '/users/admins',
	demoteAdmin: (id: number | string) => `/users/admins/demote/${id}`,
};
