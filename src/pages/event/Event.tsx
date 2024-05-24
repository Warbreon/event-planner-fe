import { Container, Grid, Box, Divider } from '@mui/material';
import styles from './Event.module.css';
import BreadCrumbComponent from '../../components/breadcrumb/BreadCrumbComponent';
import PageHeader, { HeaderVariant } from '../../components/headers/page-headers/PageHeader';
import DateLocationPrice from '../../components/reusable-labels/DateLocationPrice';
import Image from '../../components/image/Image';
import TabComponent from '../../components/tabs/tabs-component/TabComponent';
import EventDetailsPanel from '../../components/event-details-panel/EventDetailsPanel';
import EventPageGuests from '../../components/guest-list/event-page/EventPageGuests';
import GenericButton, { ButtonTypes, IconButton } from '../../components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import EventPageVM from './EventPageVM';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import RelatedEvents from '../../components/related-events/RelatedEvents';

const Event = () => {
	const {
		onAddGuestsClick,
		onEventRegistrationClick,
		isUserAdminOrCreator,
		event,
		isLoading,
		location,
		eventDate,
		startTime,
		endTime,
		duration, 
		eventName,
	} = EventPageVM();

	if (isLoading) {
		return <LoadingIndicator />;
	}

	const {
		inviteUrl,
		address,
		imageUrl = '',
		attendees = [],
		price = 0,
		currency = '',
		description = '',
		agenda = [],
		tags = [],
		isCancelled
	} = event || {};
	return (
		<Container className={styles.eventContainer}>
			<BreadCrumbComponent eventName={eventName} />
			<Grid container spacing={2} className={styles.gridContainer}>
				<Grid item xs={8} className={styles.gridItem}>
					<Box component='section' className={styles.desciption}>
						<DateLocationPrice date={eventDate} location={location} />
						<PageHeader text={eventName} variant={HeaderVariant.EVENT_PAGE} />
						<Divider className={styles.divider} />
						<EventPageGuests
							onAddGuests={onAddGuestsClick}
							attendees={attendees}
							isUserAdminOrCreator={isUserAdminOrCreator}
						/>
						<Image styles='event-page' imageUrl={imageUrl} />
						<TabComponent
							address={address}
							description={description}
							tags={tags}
							agenda={agenda}
							attendees={attendees}
							isUserAdminOrCreator={isUserAdminOrCreator}
						/>
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
							currency={currency}
							address={address}
							inviteUrl={inviteUrl}
						/>
						{!isCancelled && (
							<GenericButton
								type={ButtonTypes.button}
								styles={BUTTON_STYLES.GRAY}
								icon={IconButton.REGISTER}
								onClick={onEventRegistrationClick}
							/>
						)}
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
