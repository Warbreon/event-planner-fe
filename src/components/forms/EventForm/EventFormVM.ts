const EventFormVM = () => {

    // TODO: Fetch from API and get from redux.
    const initialValues = { imageUrl: null };

    const headerText = 'Add new event';

    const onSubmit = () => {
        console.log('Submitted');
    }

    const handleCancelOnClick = () => {
        console.log('Canceled');
    }

    return { initialValues, headerText, onSubmit, handleCancelOnClick }
}

export default EventFormVM