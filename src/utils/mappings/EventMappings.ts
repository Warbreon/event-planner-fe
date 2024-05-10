import { EventFormValues } from "../../interfaces/EventFormValuesInterface";
import { Event } from "../../models/Event";
import { formatAgendaItems, parseAgendaItems } from "../AgendaUtils";
import { combineDateTime, splitDateTime } from "../DateConverter";
import { EventRequest } from "../../models/request/EventRequest";
import { LocationTags } from "../../constants/LocationTags";
import { Currency } from "../../constants/Currency";

export const mapEventFormValuesToEvent = (formValues: EventFormValues): EventRequest => {
    return {
        name: formValues.eventName,
        description: 'Default Description', // Done with About component
        imageUrl: formValues.imageUrl ? URL.createObjectURL(formValues.imageUrl) : '', // Changed with image saving task
        cardUrl: formValues.cardUrl ? URL.createObjectURL(formValues.cardUrl) : '',
        eventStart: combineDateTime(formValues.eventStartDate, formValues.eventStartTime) ?? '',
        eventEnd: combineDateTime(formValues.eventEndDate, formValues.eventEndTime) ?? '',
        registrationStart: combineDateTime(formValues.registrationStartDate, formValues.registrationStartTime) ?? '',
        registrationEnd: combineDateTime(formValues.registrationEndDate, formValues.registrationEndTime) ?? '',
        agenda: formatAgendaItems(formValues.agenda ?? []),
        price: 0, // Done with Price component
        tickets: 0, // Done with Price component
        inviteUrl: formValues.inviteUrl ?? '',
        addressId: formValues.addressId,
        attendeeIds: formValues.attendeeIds,
        isOpen: formValues.isOpen,
        tagIds: formValues.eventTagIds,
        currency: Currency.USD,
    };
};

export const mapEventToFormValues = (event: Event): EventFormValues => {
    const determineLocationKey = () => {
        if (event.inviteUrl) {
            return LocationTags.ONLINE;
        } else if (event.address?.id) {
            return LocationTags.PHYSICAL;
        } else {
            return LocationTags.TBD;
        }
    };

    const { date: eventStartDate, time: eventStartTime } = splitDateTime(event.eventStart);
    const { date: eventEndDate, time: eventEndTime } = splitDateTime(event.eventEnd);
    const { date: registrationStartDate, time: registrationStartTime } = splitDateTime(event.registrationStart);
    const { date: registrationEndDate, time: registrationEndTime } = splitDateTime(event.registrationEnd);

    return {
        eventName: event.name,
        eventStartDate: eventStartDate,
        eventStartTime: eventStartTime,
        eventEndDate: eventEndDate,
        eventEndTime: eventEndTime,
        registrationStartDate: registrationStartDate,
        registrationStartTime: registrationStartTime,
        registrationEndDate: registrationEndDate,
        registrationEndTime: registrationEndTime,
        agenda: event.agenda ? parseAgendaItems(event.agenda) : [],
        imageUrl: null, // Image URLs cannot be converted to File objects directly; handle previews if needed
        cardUrl: null, // Same as imageUrl
        isOpen: event.isOpen,
        addressId: event.address ? event.address.id : null,
        inviteUrl: event.inviteUrl ?? null,
        attendeeIds: event.attendees ? event.attendees.map(att => att.id) : [],
        eventTagIds: event.tags ? event.tags.map(tag => tag.id) : [],
        locationKey: determineLocationKey(),
        currency: event.currency ?? Currency.USD,
    };
};