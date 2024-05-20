import { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Divider } from '@mui/material';
import { ICON_STYLES } from '../../../../themes/styles/Icon';
import SearchBar from '../../../app-bar/search-bar/SearchBar';
import { TEXTFIELD_STYLES } from '../../../../themes/styles/TextField';
import List from '@mui/material/List';
import GuestListItem from '../../../lists/guest-list/GuestListItem';
import GenericButton, { ButtonTypes, IconButton } from '../../../buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../../../themes/styles/Button';
import { Attendee } from '../../../../models/Attendee';
import EventPageGuestListPanelVM from './EventPageGuestListPanelVM';
import { LIST_ITEM_STYLES } from '../../../../themes/styles/ListItem';
import Typography from '@mui/material/Typography';
import { TYPOGRAPHY_STYLES } from '../../../../themes/styles/Typography';
import styles from './EventPageGuestListPanel.module.css'
import { AVATAR_STYLES } from '../../../../themes/styles/Avatar';

type Props = {
	attendees: Attendee[];
	isUserAdminOrCreator: boolean;
};
const EventPageGuestListPanel: FC<Props> = ({ attendees, isUserAdminOrCreator }) => {
	const { 
		onPlusButtonClick, 
		onInputChange, 
		handleConfirmOnClick, 
		handleDeclineOnClick,
		getButtonStyles,
		filteredAttendees
	} = EventPageGuestListPanelVM(attendees);
	return (
		<div className={styles.container}>
			{attendees.length !== 0 && (
				<Box className={styles.searchBar}>
					<SearchBar
						styles={TEXTFIELD_STYLES.GUEST_SEARCH_BAR}
						placeholder={'Search for guest...'}
						onChange={onInputChange}
					>
						<SearchIcon className={ICON_STYLES.GUEST_SEARCH_BAR} />
					</SearchBar>
				</Box>
			)}
			<List>
				{filteredAttendees.map((attendee, i, array) => [
					<GuestListItem
						key={attendee.user.id}
						fullName={`${attendee.user.firstName}  ${attendee.user.lastName}`}
						details={attendee.user.jobTitle}
						image={attendee.user.imageUrl}
						styles={LIST_ITEM_STYLES.GUEST_LIST_ITEM}
						textStyles={LIST_ITEM_STYLES.GUEST_LIST_ITEM_TEXT}
						avatarStyle={AVATAR_STYLES.GUEST_LIST_ITEM_AVATAR}
					>
						<>
							{!!attendee.registrationStatus &&
								(attendee.registrationStatus === 'PENDING' ? (
									<div className={styles.buttons}>
										<GenericButton
											type={ButtonTypes.button}
											title='Decline'
											onClick={() => handleDeclineOnClick(attendee.id)}
											styles={getButtonStyles(attendee.id, 'decline')}
										/>
										<GenericButton
											type={ButtonTypes.button}
											title='Confirm'
											onClick={() => handleConfirmOnClick(attendee.id)}
											styles={getButtonStyles(attendee.id, 'confirm')}
										/>
									</div>
								) : (
									isUserAdminOrCreator && (
										<Typography variant={'caption'} className={TYPOGRAPHY_STYLES.GUEST_REGISTRATION_STATUS}>
											{attendee.registrationStatus === 'REJECTED' ? 'Rejected' : 'Confirmed'}
										</Typography>
									)
								))}
						</>
					</GuestListItem>,
					array.length - 1 !== i ? <Divider component='li' key={'Divider' + i} /> : null,
				])}
			</List>
			{isUserAdminOrCreator && (	
				<GenericButton
					icon={IconButton.ADD_GUESTS}
					type={ButtonTypes.button}
					styles={BUTTON_STYLES.LIGHT_GRAY_BOX}
					onClick={onPlusButtonClick}
				/>
			)}
		</div>
	);
};

export default EventPageGuestListPanel;
