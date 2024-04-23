import { FC, useState, SyntheticEvent } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../tab-panel/TabPanel';
import styles from './TabComponent.module.css';
import AboutEvent from '../../about-event/AboutEvent';
import { Attendee } from '../../../models/Attendee';
import { filterAttendees } from '../../../utils/AttendeeFilter';
import EventPageGuestListPanel from "../tab-panel/event-page-guest-list-panel/EventPageGuestListPanel";

interface TabsProps {
	description: string;
	tags: string[];
	agenda: string[] | null;
	attendees: Attendee[];
}

const TabComponent: FC<TabsProps> = ({ description, tags, agenda, attendees }) => {
	const [value, setValue] = useState(0);
	const handleTabChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	const filteredAttendees = filterAttendees(attendees);

	const guestsTabLabel = `Guests (${filteredAttendees.length})`;
	/*const guestsTabLabel = `Guests (${attendees.length})`;*/

	return (
		<Box>
			<Box className={styles.tabsBox}>
				<Tabs value={value} onChange={handleTabChange}>
					<Tab label='About' />
					<Tab label={guestsTabLabel} />
				</Tabs>
			</Box>
			<TabPanel index={0} value={value}>
				<AboutEvent description={description} eventTags={tags} agenda={agenda} attendees={attendees} />
			</TabPanel>
			<TabPanel index={1} value={value}>
				<EventPageGuestListPanel attendees={attendees}/>
			</TabPanel>
		</Box>
	);
};

export default TabComponent;
