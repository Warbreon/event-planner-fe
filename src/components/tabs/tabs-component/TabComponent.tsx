import { FC, useState, SyntheticEvent } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../tab-panel/TabPanel';
import styles from './TabComponent.module.css';
import AboutEvent from '../../about-event/AboutEvent';
import { Attendee } from '../../../models/Attendee';
import { filterAttendees, filterAttendeesByRegistationStatusAndFullname } from '../../../utils/AttendeeFilter';
import EventPageGuestListPanel from "../tab-panel/event-page-guest-list-panel/EventPageGuestListPanel";
import { Tag } from '../../../models/Tag';
import { Address } from '../../../models/Address';

interface TabsProps {
	description: string;
	tags: Tag[];
	agenda: string[] | null;
	attendees: Attendee[];
	address: Address | null | undefined;
	eventChangePrivelege: () => boolean;
}

const TabComponent: FC<TabsProps> = ({ description, tags, agenda, attendees, address, eventChangePrivelege }) => {
	const [value, setValue] = useState(0);
	const handleTabChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const changeTab = (newValue: number) => {
        setValue(newValue);
    };
	
	const filteredAttendees = eventChangePrivelege() 
		? filterAttendeesByRegistationStatusAndFullname(attendees) 
		: filterAttendees(attendees);

	const guestsTabLabel = `Guests (${filterAttendees(attendees).length})`;

	return (
		<Box>
			<Box className={styles.tabsBox}>
				<Tabs value={value} onChange={handleTabChange}>
					<Tab label='About' />
					<Tab label={guestsTabLabel} />
				</Tabs>
			</Box>
			<TabPanel index={0} value={value}>
				<AboutEvent description={description} eventTags={tags} agenda={agenda} attendees={attendees} address={address} handleChangeTab={changeTab}/>
			</TabPanel>
			<TabPanel index={1} value={value}>
				<EventPageGuestListPanel attendees={filteredAttendees} eventChangePrivelege={eventChangePrivelege}/>
			</TabPanel>
		</Box>
	);
};

export default TabComponent;
