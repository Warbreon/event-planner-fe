export interface CardEvent {
    id: number,
    name: string,
    imageUrl: string,
    address: CardAddress | null,
    price: number,
    eventStart: string,
    attendees: CardAttendee[],
    inviteUrl?: string | null;
}

export interface CardAddress {
    id: number;
    venueName: string;
    city: string;
    street: string;
    building: string;
    zip: string;
}

export interface CardAttendee {
    id: number,
    user: CardUser
}

export interface CardUser {
    id: number;
    firstName: string;
    lastName: string;
    jobTitle: string;
    imageUrl: string;
}