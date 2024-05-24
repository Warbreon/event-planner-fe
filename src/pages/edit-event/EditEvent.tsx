import { Typography } from '@mui/material';
import EventForm from '../../components/forms/create-edit-event/EventForm';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import useEditEventViewModel from './EditEventVM';
import styles from './EditEvent.module.css';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/Routes';

const EditEvent = () => {
	const { event, isCheckingEditPermissions,  error, loadingEventError, isCreatedByUser, fullyLoaded } = useEditEventViewModel();

	if (isCheckingEditPermissions) {
		return <LoadingIndicator />;
	}

	if (!isCheckingEditPermissions && !isCreatedByUser) {
		return <Navigate to={ROUTES.NOT_FOUND}/>;
	}

	if (error || loadingEventError) {
		return (
			<section className={styles.errorMessageContainer}>
				<Typography variant='body1'>{error || loadingEventError}</Typography>
			</section>
		);
	}

	if (!fullyLoaded) {
		return <LoadingIndicator />;
	}

	return (
			<EventForm headerTitle='Edit an event' event={event} />
	);
};

export default EditEvent;
