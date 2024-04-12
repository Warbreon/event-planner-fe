import { combineDateTime } from "../../../utils/DateConverter";

const EventFormVM = () => {

    // TODO: Fetch from API and get from redux.
    const initialValues = {
        imageUrl: null,
        eventStartDate: null,
        eventStartTime: null,
        eventEndDate: null,
        eventEndTime: null,
    };

    const headerText = 'Add new event';

    const onSubmit = (values: any) => {
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