import { Box, Container, Grid } from '@mui/material';
import EventHeader from '../../components/event-header/EventHeader';
import ExploreEventsVM from './ExploreEventsViewModel';
import { EventCard } from '../../components/event-card/EventCard';
import { loadEvents } from './EventDataLoader';
import styles from './ExploreEvents.module.css';
import GenericButton from '../../components/button/GenericButton';

const ExploreEvents = () => {
	const { filters, handleFiltersChange } = ExploreEventsVM();
	const events = loadEvents();

	return (

		<Container className={styles.container}>
			<Grid container spacing={2} className={styles.gridContainer}>
			<EventHeader filters={filters} handleFiltersChange={handleFiltersChange} />
			
			<Box className={styles.eventsContainer}>
				{events.map((event) => (
					<EventCard key={event.id} {...event} />
				))}
			</Box>
			<GenericButton
					text="Load more events"
					onClick={() => {}}
					className="black"
				/>
			</Grid>
		</Container>

	);
};

export default ExploreEvents;