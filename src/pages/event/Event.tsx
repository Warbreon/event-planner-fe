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
import SearchBar from "../../components/app-bar/guest-search-bar/SearchBar";
import List from "@mui/material/List";
import GuestListItem from "../../components/lists/GuestListItem";
import React from 'react';
import {TEXTFIELD_STYLES} from "../../themes/styles/textField";


const Event = () => {
	const { onAddGuestsClick, onEventRegistrationClick, event, location, eventDate, startTime, endTime, duration } =
		EventPageVM();
	const { name, inviteUrl, address, imageUrl, attendees, price } = event;
	return (
		<Container className={styles.eventContainer}>
			<BreadCrumbComponent eventName={name} />
			<Grid container spacing={2} className={styles.gridContainer}>
				<Grid item xs={9} className={styles.gridItem}>
					<Box component='section' className={styles.desciption}>
						<DateLocationPrice date={eventDate} location={location} />
						<PageHeader text={name} variant={HeaderVariant.EVENT_PAGE} />
						<Divider />
						<EventPageGuests onAddGuests={onAddGuestsClick} />
						<Image styles='event-page' imageUrl={imageUrl} />
						<TabComponent aboutEvent='' attendees={attendees} />
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
						<GenericButton
							type={ButtonTypes.button}
							styles={BUTTON_STYLES.GRAY}
							icon={IconButton.REGISTER}
							onClick={onEventRegistrationClick}
						/>
					</Box>
				</Grid>
			</Grid>
			<Box component='section' className={styles.moreEventsLikeThis}>
				<h3>More events like this:</h3>
			</Box>
		</Container>
	);
};

export default Event;
