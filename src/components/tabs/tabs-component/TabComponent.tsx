import { FC, useState, SyntheticEvent } from 'react';
import { Attendee } from '../../../models/Attendee1';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../tab-panel/TabPanel';
import styles from './TabComponent.module.css';

interface TabsProps {
	aboutEvent: string;
	attendees: Attendee[];
}

const TabComponent: FC<TabsProps> = ({ aboutEvent, attendees }) => {
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
				Detais (Justinas add about here)
			</TabPanel>
			<TabPanel index={1} value={value}>
				Guests (Edvinas add guests here)
			</TabPanel>
		</Box>
	);
};

export default TabComponent;
