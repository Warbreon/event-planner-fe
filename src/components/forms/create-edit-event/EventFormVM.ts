import { Moment } from "moment";
import { combineDateTime } from "../../../utils/DateConverter";

interface FormValues {
    imageUrl: File | null;
    eventStartDate: Moment | null;
    eventStartTime: Moment | null;
    eventEndDate: Moment | null;
    eventEndTime: Moment | null;
    cardUrl: File | null;
}

const EventFormVM = () => {

    // TODO: Fetch from API and get from redux.
    const initialValues: FormValues = {
        imageUrl: null,
        eventStartDate: null,
        eventStartTime: null,
        eventEndDate: null,
        eventEndTime: null,
        cardUrl: null,
    };

    const headerText = 'Add new event';

    const onSubmit = (values: FormValues) => {
        const eventStart = combineDateTime(values.eventStartDate, values.eventStartTime);
        const eventEnd = combineDateTime(values.eventEndDate, values.eventEndTime);

        const submitValues = {
            imageUrl: values.imageUrl,
            cardUrl: values.cardUrl,
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