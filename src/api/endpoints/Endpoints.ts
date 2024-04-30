export const ENDPOINTS = {
    getAllEvents: "/events",
    getEventById: (id: number | string) => `/events/${id}`,
    registerToEvent: "/attendee/register",
    createNewEvent: "/events/create/new",
    getAllUsers: "/users/all",
    authenticate: "/auth/authenticate",
    refreshAccessToken: "/auth/refresh",
}
