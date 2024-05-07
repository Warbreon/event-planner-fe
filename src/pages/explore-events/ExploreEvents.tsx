import { Box, Container } from '@mui/material';
import EventHeader from '../../components/event-header/EventHeader';
import ExploreEventsVM from './ExploreEventsViewModel';
import { EventCard } from '../../components/event-card/EventCard';
import styles from './ExploreEvents.module.css';
import GenericButton, { ButtonTypes } from '../../components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';

const ExploreEvents = () => {
	const { events, isLoading, error } = ExploreEventsVM();
	
	if (isLoading) return <LoadingIndicator />;
	if (error) return <Container className={styles.container}>{error}</Container>;

	return (
		<Container className={styles.container}>
			<EventHeader />
			<Box className={styles.eventsContainer}>
				{events?.map((event) => (
					<EventCard key={event.id} {...event} />
				))}
			</Box>
			<Box className={styles.loadMore}>
				<GenericButton
					title='Load more events'
					onClick={() => {}}
					styles={BUTTON_STYLES.BLACK}
					type={ButtonTypes.button}
				/>
			</Box>
		</Container>
	);
};

export default ExploreEvents;
