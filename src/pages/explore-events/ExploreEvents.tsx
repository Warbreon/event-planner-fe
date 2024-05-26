import { Box, Container } from '@mui/material';
import EventHeader from '../../components/event-header/EventHeader';
import ExploreEventsVM from './ExploreEventsViewModel';
import { EventCard } from '../../components/event-card/EventCard';
import styles from './ExploreEvents.module.css';
import GenericButton, { ButtonTypes } from '../../shared/components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import ErrorAlert from '../../components/error/ErrorAlert';

const ExploreEvents = () => {
	const { 
		events, 
		isLoading, 
		error, 
		loadMore, 
		hasMore, 
		notFound,
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
						<EventCard key={event.id} event={event} />
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
		</Container>
	);
};

export default ExploreEvents;
