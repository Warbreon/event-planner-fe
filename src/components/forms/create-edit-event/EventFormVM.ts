import {combineDateTime} from "../../../utils/DateConverter";
import {formatAgendaItems, parseAgendaItems} from "../../../utils/AgendaUtils";
import {FormValues} from "../../../interfaces/FormValues";

const EventFormVM = () => {
    const agenda = ['7:00 am-Introduction', '12:30 pm-Presentations', '8:00 pm-Conclusion'];
    const parsedAgendaItems = parseAgendaItems(agenda);

    // TODO: Fetch from API and get from redux.
    const initialValues: FormValues = {
        imageUrl: null,
        eventStartDate: null,
        eventStartTime: null,
        eventEndDate: null,
        eventEndTime: null,
        eventName: '',
        eventTag: 'news',
        cardUrl: null,
        addressId: null,
        inviteUrl: null,
        agenda: parsedAgendaItems,
    };

    const onSubmit = (values: FormValues) => {
        const eventStart = combineDateTime(values.eventStartDate, values.eventStartTime);
        const eventEnd = combineDateTime(values.eventEndDate, values.eventEndTime);
        const formattedAgenda = formatAgendaItems(values.agenda ?? []);

        const submitValues = {
            imageUrl: values.imageUrl,
            cardUrl: values.cardUrl,
            eventStart,
            eventEnd,
            formattedAgenda,

        };

        console.log(submitValues);
    };

    const handleCancelOnClick = () => {
        console.log('Canceled');
    };

    return {initialValues, onSubmit, handleCancelOnClick}
}

export default EventFormVM;
