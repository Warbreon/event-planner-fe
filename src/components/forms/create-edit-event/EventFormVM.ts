import {Moment} from 'moment';
import {combineDateTime} from '../../../utils/DateConverter';
import {LocationTypeInterface} from '../../location/LocationTypeInterface';
import {useCallback, useState} from 'react';

export interface FormValues {
    imageUrl: File | null;
    eventStartDate: Moment | null;
    eventStartTime: Moment | null;
    eventEndDate: Moment | null;
    eventEndTime: Moment | null;
    location: string | null;
}

const EventFormVM = () => {
    const initialValues: FormValues = {
        imageUrl: null,
        eventStartDate: null,
        eventStartTime: null,
        eventEndDate: null,
        eventEndTime: null,
        location: null,
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

    const [locationFilters, setLocationFilters] = useState<LocationTypeInterface>(
        {
            eventType: 'physical',
        },
    );

    const handleLocationFiltersChange = useCallback(
        (newLocationFilters: Partial<LocationTypeInterface>) => {
            setLocationFilters((prevLocationFilters) => ({
                ...prevLocationFilters,
                ...newLocationFilters,
            }));
        },
        [],
    );

    return {initialValues, headerText, onSubmit, handleCancelOnClick, locationFilters, handleLocationFiltersChange};
}

export default EventFormVM;
