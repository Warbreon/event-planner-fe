import EventHeader from '../../components/event-header/EventHeader';
import ExploreEventsVM from './ExploreEventsViewModel';

const ExploreEvents = () => {
	const { filters, handleFiltersChange } = ExploreEventsVM();

	return (
		<>
			<EventHeader filters={filters} handleFiltersChange={handleFiltersChange} />
			<h2>Explore Events page (HOME PAGE)</h2>
		</>
	);
};

export default ExploreEvents;
