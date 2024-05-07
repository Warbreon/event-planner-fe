export const ENDPOINTS = {
	getEvents: '/events',
	getEventById: (id: number | string) => `/events/${id}`,
	registerToEvent: '/attendee/register',
	createNewEvent: '/events/create/new',
	getAllUsers: '/users/all',
	getAllAdmins: '/users/admins',
	demoteAdmin: (id: number | string) => `/users/admins/demote/${id}`,
	getAllTags: '/tags',
	getAllCities: '/addresses/cities',
	authenticate: '/auth/authenticate',
	refreshAccessToken: '/auth/refresh',
};
