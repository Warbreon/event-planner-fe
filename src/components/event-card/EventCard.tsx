import { FC } from 'react';
import styles from './EventCard.module.css';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from '../image/Image';
import GuestList from '../guest-list/GuestList';
import DateLocationPrice from '../reusable-labels/DateLocationPrice';
import EventCardVM from './EventCardVM';
import { Link } from 'react-router-dom';
import { Event } from '../../models/Event';
import SnackbarComponent, { ALERT_SEVERITY } from '../snackbar/SnackbarComponent';
import RegisterModal from '../../shared/components/register-modal/RegisterModal';
import EventButton from '../../shared/components/buttons/event-button/EventButton';

export const EventCard: FC<Event> = ({
	id,
	name,
	imageUrl,
	address,
	price,
	eventStart,
	attendees,
	inviteUrl,
	isOpen: isOpenEvent,
	currentUserRegistrationStatus,
}) => {
	const {
		getEventUrl,
		onEventRegistrationClick,
		eventDate = '',
		location,
		isModalOpen,
		handleModalClose,
		registrationError,
		isRegistrationLoading,
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
				<EventButton
					currentUserRegistrationStatus={currentUserRegistrationStatus}
					onClick={onEventRegistrationClick}
					disabled={isRegistrationLoading}
				/>
			</Card>
			<RegisterModal
				isOpen={isModalOpen}
				isOpenEvent={isOpenEvent}
				eventName={name}
				onClose={handleModalClose}
			/>
			<SnackbarComponent open={!!registrationError} message={registrationError ?? ''} severity={ALERT_SEVERITY.ERROR} />
		</Box>
	);
};
