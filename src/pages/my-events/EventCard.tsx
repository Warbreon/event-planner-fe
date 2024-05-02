import { Box, Typography } from '@mui/material';
import Image from '../../components/image/Image';
import { FC } from 'react';
import { Event } from '../../models/Event';
import DateLocationPrice from '../../components/reusable-labels/DateLocationPrice';
import GuestList from '../../components/guest-list/GuestList';
import GenericButton, { ButtonTypes, IconButton } from '../../components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import styles from './EventCard.module.css';
import { NavLink } from 'react-router-dom';
import { formatDate } from '../../utils/DateConverter';

interface Props {
	event: Event;
	createdByUser?: boolean;
}

const EventCard: FC<Props> = ({ event, createdByUser }) => {
	const { id, imageUrl, name, eventStart, address, inviteUrl, attendees } = event;
	const location = address ? address.city : inviteUrl ? 'Online' : 'TBD';
	return (
		<Box className={styles.cardContainer} title={name}>
			<NavLink to={`/events/event/${id}`}>
				<Image imageUrl={imageUrl} styles='my-events' />
			</NavLink>
			<Box className={styles.eventDetails}>
				<Typography variant='h2'>
					<NavLink to={`/events/event/${id}`} className={styles.linkToEvent} title={name}>
						{name}
					</NavLink>
				</Typography>
				<DateLocationPrice date={formatDate(eventStart.toString())} location={location} />
				<GuestList attendees={attendees} />
			</Box>
			<Box className={styles.buttonContainer}>
				<GenericButton
					type={ButtonTypes.button}
					icon={IconButton.GOING}
					styles={`${BUTTON_STYLES.BLUE} ${styles.goingButton}`}
					onClick={() => {}}
				/>
				{createdByUser && (
					<GenericButton
						type={ButtonTypes.button}
						title='Edit'
						styles={`${BUTTON_STYLES.OUTLINED_GRAY_BORDER} ${styles.cancelButton}`}
						onClick={() => {}}
					/>
				)}
			</Box>
		</Box>
	);
};

export default EventCard;
