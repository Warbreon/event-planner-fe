import { Box, Typography } from '@mui/material';
import Image from '../../../components/image/Image';
import { FC } from 'react';
import { Event } from '../../../models/Event';
import DateLocationPrice from '../../../components/reusable-labels/DateLocationPrice';
import GuestList from '../../../components/guest-list/GuestList';
import GenericButton, { ButtonTypes, IconButton } from '../../../shared/components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import styles from './EventCard.module.css';
import { NavLink } from 'react-router-dom';
import EventRegistrationControl from '../../../shared/components/event-registration-control/EventRegistrationControl';
import EventCardVM from './EventCardVM';
import SnackbarComponent from '../../../components/snackbar/SnackbarComponent';

interface Props {
	event: Event;
	createdByUser?: boolean;
}

const EventCard: FC<Props> = ({ event, createdByUser }) => {

	const {
		isSnackbarOpen,
        snackbarMessage,
        snackbarSeverity,
        handleSnackbarClose,
		isEventCancelled,
		eventName,
		formattedEventStart,
		location,
		onEditClick,
		onCancelClick,
		isDateInThePast,
		isNowBetween,
		formatDifferenceInDays
	} = EventCardVM(event);

	const { id, imageUrl, attendees } = event;

	return (
		<Box className={styles.cardContainer} title={eventName}>
			<NavLink to={`/events/event/${id}`}>
				<Image imageUrl={imageUrl} styles='my-events' />
			</NavLink>
			<Box className={styles.eventDetails}>
				<Typography variant='h2'>
					<NavLink to={`/events/event/${id}`} className={styles.linkToEvent} title={eventName}>
						{eventName}
					</NavLink>
				</Typography>
				<DateLocationPrice date={formattedEventStart} location={location} />
				<GuestList attendees={attendees} />
			</Box>
			{!isDateInThePast && (
				<Box className={styles.buttonContainer}>
					{!isEventCancelled && (
						<>
							<EventRegistrationControl
								event={event}
								modalEnabled
								snackbarClassName={styles.snackbar}
							/>
							{createdByUser && (
								<>
									<GenericButton
										type={ButtonTypes.button}
										title='Edit'
										styles={`${BUTTON_STYLES.OUTLINED_GRAY_BORDER} ${styles.editButton}`}
										onClick={onEditClick}
									/>
								</>
							)}
						</>
					)}
					{createdByUser && (
						<GenericButton
							type={ButtonTypes.button}
							icon={isEventCancelled ? IconButton.CANCELLED : IconButton.CANCEL}
							styles={`${BUTTON_STYLES.OUTLINED_GRAY_BORDER} ${styles.cancelButton}`}
							onClick={() => onCancelClick(id)}
							disabled={isEventCancelled}
						/>
					)}
				</Box>
			)}

			{isDateInThePast && !isNowBetween && (
				<Typography variant='body2' className={styles.buttonContainer}>
					{formatDifferenceInDays}
				</Typography>
			)}
			{isDateInThePast && isNowBetween && (
				<Typography variant='body2' className={styles.buttonContainer}>
					Event is happening now!
				</Typography>
			)}
			<SnackbarComponent
				open={isSnackbarOpen}
				message={snackbarMessage}
				autoHideDuration={5000}
				severity={snackbarSeverity}
				handleClose={handleSnackbarClose}
			/>
		</Box>
	);
};

export default EventCard;
