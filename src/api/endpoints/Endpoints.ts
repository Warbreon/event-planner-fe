export const ENDPOINTS = {
    getAllEvents: `/events?userId=1`,
    getEventById: (id: number | string) => `/events/${id}?userId=1`,
    registerToEvent: `/events/register`,
    createNewEvent: `/events/create/new`,

    authenticate: `/auth/authenticate`,
    refreshAccessToken: `/auth/refresh`,
}
