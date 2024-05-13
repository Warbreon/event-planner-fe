import { FC } from 'react';
import styles from './EventCard.module.css';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from '../image/Image';
import GuestList from '../guest-list/GuestList';
import DateLocationPrice from '../reusable-labels/DateLocationPrice';
import EventCardVM from './EventCardVM';
import { Link } from 'react-router-dom';
import { Event } from '../../models/Event';
import EventRegistrationControl from '../../shared/components/event-registration-control/EventRegistrationControl';

interface Props {
	event: Event;
}

export const EventCard: FC<Props> = ({ event }) => {
	const {
		id,
		name,
		imageUrl,
		address,
		price,
		eventStart,
		attendees,
		inviteUrl,
	} = event;
	
	const {
		getEventUrl,
		eventDate = '',
		location,
	} = EventCardVM({ id, eventStart, address, inviteUrl });

	return (
		<Box className={styles.container}>
			<Card className={styles.card}>
				<Link to={getEventUrl()} className={styles.linkToEvent}>
					<CardContent className={styles.content}>
						<Image imageUrl={imageUrl} />
						<Box className={styles.dateLocationPrice}>
							<DateLocationPrice date={eventDate} location={location} price={price} />
						</Box>
						<Typography variant='body1' className={styles.name}>
							{name}
						</Typography>
						<Box className={styles.guests}>
							<GuestList attendees={attendees} />
						</Box>
					</CardContent>
				</Link>
				<EventRegistrationControl
					event={event}
					modalEnabled
					snackbarClassName={styles.snackbar}
				/>
			</Card>
		</Box>
	);
};
