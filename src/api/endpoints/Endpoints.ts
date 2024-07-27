export const ENDPOINTS = {
	getEvents: '/events',
	getEventById: (id: number) => `/events/${id}`,
	getEventsUserAttending: '/events/user-registered',
	getEventsCreatedByUser: '/events/created-by-user',
	createNewEvent: '/events/create/new',
	editEvent: (id: number) => `/events/edit/${id}`,
	cancelEvent: (id: number) => `/events/cancel/${id}`,

	registerToEvent: '/attendee/register',
	unregisterFromEvent: (eventId: number | string) => `/attendee/unregister/${eventId}`,
	getUsers: '/users',
	demoteAdmins: (ids: number[]) => `/users/demoteAdmins/${ids}`,
	promoteAdmins: (ids: number[]) => `/users/promoteAdmins/${ids}`,
	getUserInfo: '/users/current/info',
	getAttendeeNotifications: '/attendee/notifications',
	markNotificationAsViewed: (id: number) => `/attendee/${id}/mark-as-viewed`,
	confirmPendingRegistration: (id: number) => `/attendee/register/${id}/confirm`,
	declinePendingRegistration: (id: number) => `/attendee/register/${id}/decline`,
	updateEventAttendees: (eventId: number) =>`attendee/${eventId}/updateAttendees`,
	getEventAttendees: (eventId: number) =>`attendee/${eventId}`,
	
	getAllTags: '/tags',

	authenticate: '/auth/authenticate',
	refreshAccessToken: '/auth/refresh',

	getAllCities: '/addresses/cities',
	getAllVenues: '/addresses',

	getProdWebSocketConnection: 'https://raisav-api.devbstaging.com/ws',
	getWebSocketNotificationsSubscription: '/user/queue/notifications',

	confirmEventCreator: (eventId: number, userId: number) =>`/events/event/creator?eventId=${eventId}&userId=${userId}`,
	
	resetPassword: '/auth/reset-password',
	changePassword: '/auth/change-password',

	processPayment: '/payment/process',
	refundPayment: '/payment/refund',
};
