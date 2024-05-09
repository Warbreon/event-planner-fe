export const ENDPOINTS = {
	getEvents: '/events',
	getEventById: (id: number | string) => `/events/${id}`,
	registerToEvent: '/attendee/register',
	createNewEvent: '/events/create/new',
	getUsers: '/users',
	demoteAdmins: (ids: (number | string)[]) => `/users/demoteAdmins/${ids}`,
	promoteAdmins: (ids: (number | string)[]) => `/users/promoteAdmins/${ids}`,
	getAllTags: '/tags',
	getAllCities: '/addresses/cities',
	authenticate: '/auth/authenticate',
	refreshAccessToken: '/auth/refresh',
};
