import { Box, Container, Grid } from '@mui/material';
import EventHeader from '../../components/event-header/EventHeader';
import ExploreEventsVM from './ExploreEventsViewModel';
import { EventCard } from '../../components/event-card/EventCard';
import { loadEvents } from './EventDataLoader';
import styles from './ExploreEvents.module.css';
import GenericButton, { ButtonTypes } from '../../components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';

const ExploreEvents = () => {
	const { filters, handleFiltersChange } = ExploreEventsVM();
	const events = loadEvents();

	return (

		<Container className={styles.container}>
			<EventHeader filters={filters} handleFiltersChange={handleFiltersChange} />
			<Box className={styles.eventsContainer}>
				{events.map((event) => (
					<EventCard key={event.id} {...event} />
				))}
			</Box>
			<Box className={styles.loadMore}>
			<GenericButton
					title="Load more events"
					onClick={() => { } }
					styles={BUTTON_STYLES.BLACK} 
					type={ButtonTypes.button}
			/>
			</Box>
		</Container>

	);
};

export default ExploreEvents;