import { Moment } from "moment";
import { combineDateTime, fromDisplayTimeFormat } from "../../../utils/DateConverter";
import { Agenda } from "../../../interfaces/Agenda";
import { parseAgendaItems } from "../../../utils/AgendaUtils";

interface FormValues {
    imageUrl: File | null;
    eventStartDate: Moment | null;
    eventStartTime: Moment | null;
    eventEndDate: Moment | null;
    eventEndTime: Moment | null;
    agenda: Agenda[] | null;
}

const EventFormVM = () => {
    const agenda = ['7:00 pm-Introduction', '7:30 pm-Presentations', '8:00 pm-Conclusion'];
    const parsedAgendaItems = parseAgendaItems(agenda).map((item: Agenda): Agenda => (
        { time: fromDisplayTimeFormat(item.time as string), description: item.description }
    ));

    // TODO: Fetch from API and get from redux.
    const initialValues: FormValues = {
        imageUrl: null,
        eventStartDate: null,
        eventStartTime: null,
        eventEndDate: null,
        eventEndTime: null,
        agenda: parsedAgendaItems,
    };

    const headerText = 'Add new event';

    const onSubmit = (values: FormValues) => {
        const eventStart = combineDateTime(values.eventStartDate, values.eventStartTime);
        const eventEnd = combineDateTime(values.eventEndDate, values.eventEndTime);

        const submitValues = {
            imageUrl: values.imageUrl,
            eventStart,
            eventEnd
        };

        console.log(submitValues);
    }

    const handleCancelOnClick = () => {
        console.log('Canceled');
    }

    return { initialValues, headerText, onSubmit, handleCancelOnClick }
}

export default EventFormVM