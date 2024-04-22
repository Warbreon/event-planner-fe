import { Moment } from "moment";
import { combineDateTime } from "../../../utils/DateConverter";
import { Agenda } from "../../../interfaces/Agenda";
import { formatAgendaItems, parseAgendaItems } from "../../../utils/AgendaUtils";

export interface FormValues {
    imageUrl: File | null;
    eventStartDate: Moment | null;
    eventStartTime: Moment | null;
    eventEndDate: Moment | null;
    eventEndTime: Moment | null;
    eventName: string;
    eventTag: string;
    cardUrl: File | null;
    addressId: number |string | null;
    inviteUrl: string | null;
    agenda: Agenda[] | null;
}

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
        addressId: '',
        inviteUrl: '',
        agenda: parsedAgendaItems,
    };
	const headerText = 'Add new event';

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
            addressId: '',
            inviteUrl: '',
        };

		console.log(submitValues);
	};

	const handleCancelOnClick = () => {
		console.log('Canceled');
	};

    return { initialValues, headerText, onSubmit, handleCancelOnClick }
}

export default EventFormVM;
