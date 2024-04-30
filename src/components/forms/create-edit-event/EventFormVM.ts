import { EventFormValues } from "../../../interfaces/EventFormValuesInterface";
import { combineDateTime } from "../../../utils/DateConverter";
import { formatAgendaItems, parseAgendaItems } from "../../../utils/AgendaUtils";

const EventFormVM = () => {
    const agenda = ['7:00 am-Introduction', '12:30 pm-Presentations', '8:00 pm-Conclusion'];
    const parsedAgendaItems = parseAgendaItems(agenda);

    // TODO: Fetch from API and get from redux.
    const initialValues: EventFormValues = {
        imageUrl: null,
        eventStartDate: null,
        eventStartTime: null,
        eventEndDate: null,
        eventEndTime: null,
        eventName: '',
        eventTag: 'news',
        cardUrl: null,
        addressId: null,
        inviteUrl: '',
        agenda: parsedAgendaItems,
        isOpen: true,
        registrationStartDate: null,
        registrationStartTime: null,
        registrationEndDate: null,
        registrationEndTime: null,
        locationKey: 'physical',
    };

    const determineLocationKey = (values: EventFormValues) => {
        if (values.inviteUrl) {
            return 'online';
        } else if (values.addressId) {
            return 'physical';
        } else {
            return 'tbd';
        }
    };

    initialValues.locationKey = determineLocationKey(initialValues);

    const onSubmit = (values: EventFormValues) => {
        const eventStart = combineDateTime(values.eventStartDate, values.eventStartTime);
        const eventEnd = combineDateTime(values.eventEndDate, values.eventEndTime);
        const formattedAgenda = formatAgendaItems(values.agenda ?? []);
        const registrationStart = combineDateTime(values.registrationStartDate, values.registrationStartTime);
        const registrationtEnd = combineDateTime(values.registrationEndDate, values.registrationEndTime);

        const submitValues = {
            imageUrl: values.imageUrl,
            cardUrl: values.cardUrl,
            eventStart,
            eventEnd,
            formattedAgenda,
            registrationStart,
            registrationtEnd,
            isOpen: values.isOpen,
            addressId: values.addressId,
            inviteUrl: values.inviteUrl,
        };

        console.log(submitValues);
    };

    const handleCancelOnClick = () => {
        console.log('Canceled');
    };

    return { initialValues, onSubmit, handleCancelOnClick }
}

export default EventFormVM;
