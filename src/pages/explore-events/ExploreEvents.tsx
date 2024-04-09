import { Box, Button, Container } from '@mui/material';
import EventHeader from '../../components/event-header/EventHeader';
import ExploreEventsVM from './ExploreEventsViewModel';
import { EventCard } from '../../components/event-card/EventCard';
import { loadEvents } from './EventDataLoader';
import styles from './ExploreEvents.module.css';

const ExploreEvents = () => {
	const { filters, handleFiltersChange } = ExploreEventsVM();
	const events = loadEvents();

	return (
		<Container>
			<EventHeader filters={filters} handleFiltersChange={handleFiltersChange} />
			
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