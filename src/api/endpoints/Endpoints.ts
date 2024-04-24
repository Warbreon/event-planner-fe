export const ENDPOINTS = {
    getEvents: "/events?userId=1",
    getEventById: (id: number | string) => `/events/${id}?userId=1`,
    registerToEvent: "/events/register",
    createNewEvent: "/events/create/new",

    getAllTags: "/tags",

    authenticate: "/auth/authenticate",
    refreshAccessToken: "/auth/refresh",
}
