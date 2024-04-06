export interface CardEvent {
    id: number,
    name: string,
    imageUrl: string,
    address: CardAddress[] | null,
    price: number | null,
    eventStart: string
}

export interface CardAddress {
    city: string
}