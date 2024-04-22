import { FormValues } from "../../../interfaces/FormValuesInterface";
import { combineDateTime } from "../../../utils/DateConverter";

const EventFormVM = () => {

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
        isOpen: true,
        registrationStartDate: null,
        registrationStartTime: null,
        registrationEndDate: null,
        registrationEndTime: null,
    };

    const onSubmit = (values: FormValues) => {
        const eventStart = combineDateTime(values.eventStartDate, values.eventStartTime);
        const eventEnd = combineDateTime(values.eventEndDate, values.eventEndTime);
        const registrationStart = combineDateTime(values.registrationStartDate, values.registrationStartTime);
        const registrationtEnd = combineDateTime(values.registrationEndDate, values.registrationEndTime);

        const submitValues = {
            imageUrl: values.imageUrl,
            cardUrl: values.cardUrl,
            eventStart,
            eventEnd,
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