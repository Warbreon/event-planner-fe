import { Box, Container } from '@mui/material';
import EventHeader from '../../components/event-header/EventHeader';
import ExploreEventsVM from './ExploreEventsViewModel';
import { EventCard } from '../../components/event-card/EventCard';
import styles from './ExploreEvents.module.css';
import GenericButton, { ButtonTypes } from '../../components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import ErrorAlert from '../../components/error/ErrorAlert';
import SnackbarComponent from '../../components/snackbar/SnackbarComponent';

const ExploreEvents = () => {
	const { 
		events, 
		isLoading, 
		error, 
		loadMore, 
		hasMore, 
		notFound,
		isSnackbarOpen,
		snackbarMessage,
		snackbarSeverity,
		handleSnackbarClose
	} = ExploreEventsVM();
	
	if (isLoading) return <LoadingIndicator />;

	return (
		<Container className={styles.container}>
			<EventHeader />
			{error ? <ErrorAlert message={error} />
			: 
			<>
				<Box className={styles.eventsContainer}>
					{events?.map((event) => (
						<EventCard key={event.id} {...event} />
					))}
					{notFound && <p>{notFound}</p>}
				</Box>
				{hasMore && (
					<Box className={styles.loadMore}>
						<GenericButton
							title='Load more events'
							onClick={loadMore}
							styles={BUTTON_STYLES.BLACK}
							type={ButtonTypes.button}
						/>
					</Box>
				)}
			</>
			}
			<SnackbarComponent
				open={isSnackbarOpen}
				message={snackbarMessage}
				severity={snackbarSeverity}
				autoHideDuration={5000}
				handleClose={handleSnackbarClose}
			/>
		</Container>
	);
};

export default ExploreEvents;
