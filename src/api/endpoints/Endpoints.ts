const server = "https://raisav-api.devbstaging.com";

export const ENDPOINTS = {
    getAllEvents: `${server}/api/events`,
    getEventById: (id: number | string) => `${server}/api/events/${id}`,
    registerToEvent: `${server}/api/events/register`,
    createNewEvent: `${server}/api/events/create/new`,

    authenticate: `${server}/authenticate`,
    refreshAccessToken: `${server}/refresh`,
}
