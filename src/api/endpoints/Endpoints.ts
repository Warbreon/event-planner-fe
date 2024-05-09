export const ENDPOINTS = {
	getEvents: '/events',
	getEventById: (id: number | string) => `/events/${id}`,
	getEventsUserAttending: '/events/user-registered',
	getEventsCreatedByUser: '/events/created-by-user',
	createNewEvent: '/events/create/new',

	registerToEvent: '/attendee/register',
	getAttendeeNotifications: '/attendee/notifications',
	markNotificationAsViewed: (id: number | string) => `/attendee/${id}/mark-as-viewed`,
	confirmPendingRegistration: (id: number | string) => `/attendee/register/${id}/confirm`,
	declinePendingRegistration: (id: number | string) => `/attendee/register/${id}/decline`,
	
	getAllTags: '/tags',

	authenticate: '/auth/authenticate',
	refreshAccessToken: '/auth/refresh',

	getAllCities: '/addresses/cities',

	getAllUsers: '/users/all',
	getAllAdmins: '/users/admins',
	demoteAdmin: (id: number | string) => `/users/admins/demote/${id}`
};
