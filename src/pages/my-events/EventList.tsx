import { FC } from 'react';
import { Divider, Box, Typography } from '@mui/material';
import EventCard from './EventCard';
import styles from './EventList.module.css';
import { Event } from '../../models/Event';
import GenericButton, { ButtonTypes, IconButton } from '../../shared/components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';

interface Props {
	events: Event[] | null;
	createdByUser?: boolean;
	onAddEventClick?: () => void;
}

const EventList: FC<Props> = ({ events, createdByUser, onAddEventClick }) => {
	if (events?.length === 0) {
		return <Typography variant='body1'>No events to display...</Typography>;
	}

	return (
		<Box className={styles.eventList}>
			{events?.map((event, i) => (
				<Box key={i} className={styles.eventListItem}>
					<EventCard key={`event ${event.id}`} event={event} createdByUser={createdByUser} />
					{i !== events.length - 1 && <Divider key={`divider ${i}`} />}
				</Box>
			))}

			{createdByUser && (
				<GenericButton
					styles={`${BUTTON_STYLES.LIGHT_GRAY_BOX} ${styles.addEventButton}`}
					type={ButtonTypes.button}
					icon={IconButton.ADD_GUESTS}
					onClick={onAddEventClick}
				/>
			)}
		</Box>
	);
};

export default EventList;
