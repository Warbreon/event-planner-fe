import { EventFormValues } from '../../interfaces/EventFormValuesInterface';
import { formatAgendaItems, parseAgendaItems } from '../AgendaUtils';
import { combineDateTime, splitDateTime } from '../DateConverter';
import { LocationTags } from '../../constants/LocationTags';
import { Currency } from '../../constants/Currency';
import { getBase64 } from '../Base64Encoder';
import { Event } from '../../models/Event';

export const mapEventFormValuesToEvent = async (formValues: EventFormValues) => {
	const imageBase64 = formValues.imageBase64 ? await getBase64(formValues.imageBase64 as unknown as File) : null;
	const cardImageBase64 = formValues.cardImageBase64
		? await getBase64(formValues.cardImageBase64 as unknown as File)
		: null;
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
		addressId: formValues.inviteUrl ? 0 : formValues.addressId,
		inviteUrl: formValues.addressId === 0 ? null : formValues.inviteUrl,
		attendeeIds: formValues.attendeeIds,
		isOpen: formValues.isOpen,
		tagIds: formValues.eventTagIds,
		currency: formValues.currency,
	};
};

export const mapEventToFormValues = (event: Event | null): EventFormValues => {
	const determineLocationKey = () => {
		if (event) {
			if (event.address) {
				return LocationTags.PHYSICAL;
			}
			if (event.inviteUrl) {
				return LocationTags.ONLINE;
			}
			return LocationTags.TBD;
		}

		return LocationTags.PHYSICAL;
	};

	const { date: eventStartDate, time: eventStartTime } = splitDateTime(event ? event.eventStart : '');
	const { date: eventEndDate, time: eventEndTime } = splitDateTime(event ? event.eventEnd : '');
	const { date: registrationStartDate, time: registrationStartTime } = splitDateTime(
		event ? event.registrationStart : ''
	);
	const { date: registrationEndDate, time: registrationEndTime } = splitDateTime(event ? event.registrationEnd : '');

	return {
		eventName: event ? event.name : '',
		eventStartDate: eventStartDate,
		eventStartTime: eventStartTime,
		eventEndDate: eventEndDate,
		eventEndTime: eventEndTime,
		registrationStartDate: registrationStartDate,
		registrationStartTime: registrationStartTime,
		registrationEndDate: registrationEndDate,
		registrationEndTime: registrationEndTime,
		agenda: event && event.agenda ? parseAgendaItems(event.agenda) : [],
		isOpen: event ? event.isOpen : true,
		addressId: event && event.address && !event.inviteUrl ? event.address.id : 0,
		inviteUrl: event && event.inviteUrl && !event.address ? event.inviteUrl : null,
		attendeeIds: event && event.attendees ? event.attendees.map((att) => att.id) : [],
		eventTagIds: event && event.tags ? event.tags.map((tag) => tag.id) : [],
		locationKey: determineLocationKey(),
		currency: event ? event.currency : Currency.USD,
		tickets: event ? event.tickets : 0,
		description: event ? event.description : '',
		price: event ? event.price : 0,
		imageBase64: null,
		cardImageBase64: null,
	};
};
