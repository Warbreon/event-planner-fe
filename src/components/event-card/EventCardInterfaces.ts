export interface IEvent {
    id: number,
    name: string,
    imageUrl: string,
    address: IAddress[] | null,
    price: number | null,
    eventStart: string
}

export interface IAddress {
    city: string
}