import { FC } from 'react';
import styles from './EventCard.module.css';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from '../image/Image';
import GuestList from '../guest-list/GuestList';
import GenericButton, { ButtonTypes, IconButton } from '../buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import DateLocationPrice from '../reusable-labels/DateLocationPrice';
import EventCardVM from './EventCardVM';
import { Link } from 'react-router-dom';
import { Event } from '../../models/Event';

export const EventCard: FC<Event> = ({ id, name, imageUrl, address, price, eventStart, attendees, inviteUrl }) => {
	const {
		getEventUrl,
		onEventRegistrationClick,
		eventDate = '',
		location,
	} = EventCardVM({ eventStart, address, inviteUrl });

	return (
		<Box className={styles.container}>
			<Card className={styles.card}>
				<Link to={getEventUrl(id)} className={styles.linkToEvent}>
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
				<GenericButton
					type={ButtonTypes.button}
					styles={BUTTON_STYLES.GRAY}
					icon={IconButton.REGISTER}
					onClick={onEventRegistrationClick}
				/>
			</Card>
		</Box>
	);
};
