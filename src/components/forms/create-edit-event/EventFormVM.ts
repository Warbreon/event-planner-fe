import { Moment } from 'moment';
import { combineDateTime } from '../../../utils/DateConverter';

export interface FormValues {
    imageUrl: File | null;
    eventStartDate: Moment | null;
    eventStartTime: Moment | null;
    eventEndDate: Moment | null;
    eventEndTime: Moment | null;
    address: string;
    inviteUrl: string;
}

const EventFormVM = () => {
    const initialValues: FormValues = {
        imageUrl: null,
        eventStartDate: null,
        eventStartTime: null,
        eventEndDate: null,
        eventEndTime: null,
        address: '',
        inviteUrl: '',
    };

    const headerText = 'Add new event';

    const onSubmit = (values: FormValues) => {
        const eventStart = combineDateTime(values.eventStartDate, values.eventStartTime);
        const eventEnd = combineDateTime(values.eventEndDate, values.eventEndTime);

        const submitValues = {
            eventStart,
            eventEnd,
            ...values
        };

        console.log(submitValues);
    }

    const handleCancelOnClick = () => {
        console.log('Canceled');
    }

    return { initialValues, headerText, onSubmit, handleCancelOnClick };
}

export default EventFormVM;
