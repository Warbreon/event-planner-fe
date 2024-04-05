import { loadEvents } from './EventDataLoader';
import { EventCard } from '../../components/event-card/EventCard';
import styles from './ExploreEvents.module.css';
import { Box, Button, Container } from '@mui/material';

const ExploreEvents = () => {
	const events = loadEvents();
	return (
		<Container>
			<Box className={styles.eventsContainer}>
				{events.map((event) => (
					<EventCard key={event.id} {...event} />
				))}
			</Box>
			<Box className={styles.loadMoreButtonContainer}>
				<Button className={styles.loadMoreButton} onClick={()=>{}}>
					Load more events
				</Button>
			</Box>
		</Container>
	);
};

export default ExploreEvents;