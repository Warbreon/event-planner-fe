import { EventFormValues } from "../../../interfaces/EventFormValuesInterface";
import { combineDateTime } from "../../../utils/DateConverter";
import { formatAgendaItems, parseAgendaItems } from "../../../utils/AgendaUtils";
import { useFetch } from "../../../api/hooks/ApiHooks";
import useUserAPI from "../../../api/UserAPI";

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
        attendees: []
    };

    const {fetchUsers} = useUserAPI();
    const { data: users, isLoading, error  } =  useFetch(() => fetchUsers());
   
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
            attendees: values.attendees
        };

        console.log(submitValues);
    }

    const handleCancelOnClick = () => {
        console.log('Canceled');
    }

    return { initialValues, onSubmit, handleCancelOnClick, users }
}

export default EventFormVM