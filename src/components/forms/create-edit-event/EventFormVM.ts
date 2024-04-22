import { EventFormValues } from "../../../interfaces/EventFormValuesInterface";
import { combineDateTime } from "../../../utils/DateConverter";
import { Agenda } from "../../../interfaces/Agenda";
import { formatAgendaItems, parseAgendaItems } from "../../../utils/AgendaUtils";

interface FormValues {
    imageUrl: File | null;
    eventStartDate: Moment | null;
    eventStartTime: Moment | null;
    eventEndDate: Moment | null;
    eventEndTime: Moment | null;
    eventName: string;
    eventTag: string;
    cardUrl: File | null;
    agenda: Agenda[] | null;
}

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
        agenda: parsedAgendaItems,
        isOpen: true,
        registrationStartDate: null,
        registrationStartTime: null,
        registrationEndDate: null,
        registrationEndTime: null,
    };

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
        };

        console.log(submitValues);
    }

    const handleCancelOnClick = () => {
        console.log('Canceled');
    }

    return { initialValues, onSubmit, handleCancelOnClick }
}

export default EventFormVM