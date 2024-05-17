import { EventFormValues } from "../../interfaces/EventFormValuesInterface";
import { formatAgendaItems, parseAgendaItems } from "../AgendaUtils";
import { combineDateTime, splitDateTime } from "../DateConverter";
import { EventRequest } from "../../models/request/EventRequest";
import { LocationTags } from "../../constants/LocationTags";
import { Currency } from "../../constants/Currency";
import { getBase64 } from "../Base64Encoder";

export const mapEventFormValuesToEvent =  async (formValues: EventFormValues) => {
    const imageBase64 = formValues.imageBase64 ?  await getBase64(formValues.imageBase64 as unknown as File) : null;
    const cardImageBase64 = formValues.cardImageBase64 ?  await getBase64(formValues.cardImageBase64 as unknown as File) : null;
    return {
        name: formValues.eventName,
        description: formValues.description, 
        imageBase64: imageBase64,
        cardImageBase64: cardImageBase64,
        eventStart: combineDateTime(formValues.eventStartDate, formValues.eventStartTime) ?? '',
        eventEnd: combineDateTime(formValues.eventEndDate, formValues.eventEndTime) ?? '',
        registrationStart: combineDateTime(formValues.registrationStartDate, formValues.registrationStartTime) ?? '',
        registrationEnd: combineDateTime(formValues.registrationEndDate, formValues.registrationEndTime) ?? '',
        agenda: formatAgendaItems(formValues.agenda ?? []),
        price: formValues.price, 
        tickets: formValues.tickets, 
        inviteUrl: formValues.inviteUrl ?? '',
        addressId: formValues.addressId,
        attendeeIds: formValues.attendeeIds,
        isOpen: formValues.isOpen,
        tagIds: formValues.eventTagIds,
        currency: Currency.EUR,
    };
};

// export const mapEventToFormValues = async (event: EventRequest) => {

//     const determineLocationKey = () => {
//         if (event.inviteUrl) {
//             return LocationTags.ONLINE;
//         } else if (event.addressId) {
//             return LocationTags.PHYSICAL;
//         } else {
//             return LocationTags.TBD;
//         }
//     };

//     const { date: eventStartDate, time: eventStartTime } = splitDateTime(event.eventStart);
//     const { date: eventEndDate, time: eventEndTime } = splitDateTime(event.eventEnd);
//     const { date: registrationStartDate, time: registrationStartTime } = splitDateTime(event.registrationStart);
//     const { date: registrationEndDate, time: registrationEndTime } = splitDateTime(event.registrationEnd);

//     const imageBase64 = event.imageBase64 ? await getBase64(event.imageBase64 as unknown as File) : null;
//     const cardImageBase64 = event.cardImageBase64 ?  await getBase64(event.cardImageBase64 as unknown as File) : null;



//     return {
//         eventName: event.name,
//         eventStartDate: eventStartDate,
//         eventStartTime: eventStartTime,
//         eventEndDate: eventEndDate,
//         eventEndTime: eventEndTime,
//         registrationStartDate: registrationStartDate,
//         registrationStartTime: registrationStartTime,
//         registrationEndDate: registrationEndDate,
//         registrationEndTime: registrationEndTime,
//         agenda: event.agenda ? parseAgendaItems(event.agenda) : [],
//         imageBase64: imageBase64, 
//         cardImageBase64: cardImageBase64, 
//         isOpen: event.isOpen,
//         addressId: event.addressId,
//         inviteUrl: event.inviteUrl ?? null,
//         attendeeIds: event.attendeeIds,
//         eventTagIds: event.tagIds,
//         locationKey: determineLocationKey(),
//         currency: event.currency ?? Currency.EUR,
//         tickets: event.tickets,
//         description: event.description,
//         price: event.price
//     };
// };

// export const mapEventToFormValues = (event: Event): EventFormValues => {
//     const determineLocationKey = () => {
//         if (event.inviteUrl) {
//             return LocationTags.ONLINE;
//         } else if (event.address?.id) {
//             return LocationTags.PHYSICAL;
//         } else {
//             return LocationTags.TBD;
//         }
//     };

//     const { date: eventStartDate, time: eventStartTime } = splitDateTime(event.eventStart);
//     const { date: eventEndDate, time: eventEndTime } = splitDateTime(event.eventEnd);
//     const { date: registrationStartDate, time: registrationStartTime } = splitDateTime(event.registrationStart);
//     const { date: registrationEndDate, time: registrationEndTime } = splitDateTime(event.registrationEnd);

//     const imageBase64 = values.imageBase64 ? await getBase64(values.imageBase64 as unknown as File) : null;
//     const cardImageBase64 = values.cardImageBase64 ? await getBase64(values.cardImageBase64 as unknown as File) : null;



//     return {
//         eventName: event.name,
//         eventStartDate: eventStartDate,
//         eventStartTime: eventStartTime,
//         eventEndDate: eventEndDate,
//         eventEndTime: eventEndTime,
//         registrationStartDate: registrationStartDate,
//         registrationStartTime: registrationStartTime,
//         registrationEndDate: registrationEndDate,
//         registrationEndTime: registrationEndTime,
//         agenda: event.agenda ? parseAgendaItems(event.agenda) : [],
//         imageBase64: null, 
//         cardImageBase64: null, 
//         isOpen: event.isOpen,
//         addressId: event.address ? event.address.id : null,
//         inviteUrl: event.inviteUrl ?? null,
//         attendeeIds: event.attendees ? event.attendees.map(att => att.id) : [],
//         eventTagIds: event.tags ? event.tags.map(tag => tag.id) : [],
//         locationKey: determineLocationKey(),
//         currency: event.currency ?? Currency.USD,
//         tickets: event.tickets,
//         description: event.description,
//         price: event.price
//     };
// };