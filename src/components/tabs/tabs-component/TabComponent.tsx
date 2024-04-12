import { FC, useState, SyntheticEvent } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../tab-panel/TabPanel';
import styles from './TabComponent.module.css';
import AboutEvent from '../../about-event/AboutEvent';
import { Event } from '../../../models/Event';
import { Attendee } from '../../../models/Attendee';

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

	const guestsTabLabel = `Guests (${attendees.length})`;

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
				Guests (Edvinas add guests here)
			</TabPanel>
		</Box>
	);
};

export default TabComponent;
