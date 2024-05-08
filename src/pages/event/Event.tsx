import { Container, Grid, Box, Divider } from '@mui/material';
import styles from './Event.module.css';
import BreadCrumbComponent from '../../components/breadcrumb/BreadCrumbComponent';
import PageHeader, { HeaderVariant } from '../../components/headers/page-headers/PageHeader';
import DateLocationPrice from '../../components/reusable-labels/DateLocationPrice';
import Image from '../../components/image/Image';
import TabComponent from '../../components/tabs/tabs-component/TabComponent';
import EventDetailsPanel from '../../components/event-details-panel/EventDetailsPanel';
import EventPageGuests from '../../components/guest-list/event-page/EventPageGuests';
import EventPageVM from './EventPageVM';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import RelatedEvents from '../../components/related-events/RelatedEvents';
import RegisterModal from '../../shared/components/register-modal/RegisterModal';
import SnackbarComponent, { ALERT_SEVERITY } from '../../components/snackbar/SnackbarComponent';
import EventButton from '../../shared/components/buttons/event-button/EventButton';

const Event = () => {
	const {
		onAddGuestsClick,
		onEventRegistrationClick,
		event,
		isEventLoading,
		location,
		eventDate,
		startTime,
		endTime,
		duration,
		isModalOpen,
		closeModal,
		error,
		isRegistrationLoading,
		registrationStatus,
	} = EventPageVM();

	if (isEventLoading) {
		return <LoadingIndicator />;
	}

	const {
		name = '',
		inviteUrl,
		address,
		imageUrl = '',
		attendees = [],
		price = 0,
		description = '',
		agenda = [],
		tags = [],
		isOpen: isOpenEvent = true,
	} = event || {};

	return (
		<Container className={styles.eventContainer}>
			<BreadCrumbComponent eventName={name} />
			<Grid container spacing={2} className={styles.gridContainer}>
				<Grid item xs={8} className={styles.gridItem}>
					<Box component='section' className={styles.desciption}>
						<DateLocationPrice date={eventDate} location={location} />
						<PageHeader text={name} variant={HeaderVariant.EVENT_PAGE} />
						<Divider className={styles.divider} />
						<EventPageGuests onAddGuests={onAddGuestsClick} attendees={attendees} />
						<Image styles='event-page' imageUrl={imageUrl} />
						<TabComponent description={description} tags={tags} agenda={agenda} attendees={attendees} />
					</Box>
				</Grid>
				<Grid item xs={3} className={styles.gridItem}>
					<Box component='section' className={styles.details}>
						<EventDetailsPanel
							eventDate={eventDate}
							startTime={startTime}
							endTime={endTime}
							duration={duration}
							price={price}
							address={address}
							inviteUrl={inviteUrl}
						/>
						<EventButton
							currentUserRegistrationStatus={registrationStatus}
							onClick={onEventRegistrationClick}
							disabled={isRegistrationLoading}
						/>
						<RegisterModal
							isOpen={isModalOpen}
							isOpenEvent={isOpenEvent}
							eventName={name}
							onClose={closeModal}
						/>
						<SnackbarComponent open={!!error} message={error ?? ''} severity={ALERT_SEVERITY.ERROR} />
					</Box>
				</Grid>
			</Grid>
			<Box component='section' className={styles.moreEventsLikeThis}>
				<RelatedEvents event={event} />
			</Box>
		</Container>
	);
};

export default Event;
