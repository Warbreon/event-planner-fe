import { FC, useState, SyntheticEvent } from 'react';
import { Attendee } from '../../../models/Attendee';
import {Box, Divider, Tab, Tabs} from '@mui/material';
import TabPanel from '../tab-panel/TabPanel';
import styles from './TabComponent.module.css';
import SearchBar from "../../app-bar/guest-search-bar/SearchBar";
import {TEXTFIELD_STYLES} from "../../../themes/styles/TextField";
import List from "@mui/material/List";
import EventPageGuestListItem from "../../lists/guest-list/EventPageGuestListItem";
import GenericButton, {ButtonTypes, IconButton} from "../../buttons/ButtonComponent";
import {BUTTON_STYLES} from "../../../themes/styles/Button";

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
				<SearchBar
					style={TEXTFIELD_STYLES.GUEST_SEARCH_BAR}
					placeholder={'Search for guest...'}
				/>
				<List>
					{attendees.map((attendee,i,array) => (
						<>
							<EventPageGuestListItem
								fullName={`${attendee.user.firstName}  ${attendee.user.lastName}`}
								details={attendee.user.jobTitle}
								image={attendee.user.imageUrl}
								registrationStatus={attendee.registrationStatus}
							/>
							{array.length-1 !== i ? <Divider component="li"/> : null}
						</>
					))}
				</List>
				<GenericButton icon={IconButton.ADD_GUESTS} type={ButtonTypes.submit} styles={BUTTON_STYLES.LIGHT_GRAY_BOX} />
			</TabPanel>
		</Box>
	);
};

export default TabComponent;
