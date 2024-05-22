export const ENDPOINTS = {
	getEvents: '/events',
	getEventById: (id: number) => `/events/${id}`,
	getEventsUserAttending: '/events/user-registered',
	getEventsCreatedByUser: '/events/created-by-user',
	createNewEvent: '/events/create/new',
	cancelEvent: (id: number) => `/events/cancel/${id}`,

	registerToEvent: '/attendee/register',
	getUsers: '/users',
	demoteAdmins: (ids: number[]) => `/users/demoteAdmins/${ids}`,
	promoteAdmins: (ids: number[]) => `/users/promoteAdmins/${ids}`,
	getUserInfo: '/users/current/info',
	getAttendeeNotifications: '/attendee/notifications',
	markNotificationAsViewed: (id: number) => `/attendee/${id}/mark-as-viewed`,
	confirmPendingRegistration: (id: number) => `/attendee/register/${id}/confirm`,
	declinePendingRegistration: (id: number) => `/attendee/register/${id}/decline`,
	
	getAllTags: '/tags',

	authenticate: '/auth/authenticate',
	refreshAccessToken: '/auth/refresh',

	getAllCities: '/addresses/cities',
	getAllVenues: '/addresses',

	getLocalWebSocketConnection: 'http://localhost:8080/ws',
	getProdWebSocketConnection: 'https://raisav-api.devbstaging.com/ws',
	getWebSocketNotificationsSubscription: '/user/queue/notifications',
	
	resetPassword: '/auth/reset-password',
	changePassword: '/auth/change-password',
};
