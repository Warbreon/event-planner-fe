import { FC, useState, SyntheticEvent } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../tab-panel/TabPanel';
import styles from './TabComponent.module.css';
import AboutEvent from '../../about-event/AboutEvent';
import { filterAttendees } from '../../../utils/AttendeeFilter';
import EventPageGuestListPanel from "../tab-panel/event-page-guest-list-panel/EventPageGuestListPanel";
import { Tag } from '../../../models/Tag';
import { Address } from '../../../models/Address';
import EventPageGuestsVM from "../../guest-list/event-page/EventPageGuestsVM";

interface TabsProps {
	description: string;
	tags: Tag[];
	agenda: string[] | null;
	address: Address | null | undefined;
	eventPageGuestsVM: typeof EventPageGuestsVM.arguments;
}

const TabComponent: FC<TabsProps> = ({ description, tags, agenda, address, eventPageGuestsVM }) => {
	const [value, setValue] = useState(0);
	const handleTabChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const changeTab = (newValue: number) => {
        setValue(newValue);
    };

	const guestsTabLabel = `Guests (${filterAttendees(eventPageGuestsVM.attendeeList).length})`;

	return (
		<Box>
			<Box className={styles.tabsBox}>
				<Tabs value={value} onChange={handleTabChange}>
					<Tab label='About' />
					<Tab label={guestsTabLabel} />
				</Tabs>
			</Box>
			<TabPanel index={0} value={value}>
				<AboutEvent description={description} eventTags={tags} agenda={agenda} attendees={eventPageGuestsVM.attendeeList} address={address} handleChangeTab={changeTab}/>
			</TabPanel>
			<TabPanel index={1} value={value}>
				<EventPageGuestListPanel eventPageGuestsVM={eventPageGuestsVM}/>
			</TabPanel>
		</Box>
	);
};

export default TabComponent;
