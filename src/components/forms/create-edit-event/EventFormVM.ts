const EventFormVM = () => {

    // TODO: Fetch from API and get from redux.
    const initialValues = {
        imageUrl: null,
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
    };

    const headerText = 'Add new event';

    const onSubmit = (values) => {
        const startDateTime = new Date(`${values.startDate}T${values.startTime}`);
        const endDateTime = new Date(`${values.endDate}T${values.endTime}`);

        const submitValues = {
            imageUrl: values.imageUrl,
            startDateTime,
            endDateTime
        };

        console.log(submitValues);
    }

    const handleCancelOnClick = () => {
        console.log('Canceled');
    }

    return { initialValues, headerText, onSubmit, handleCancelOnClick }
}

export default EventFormVM