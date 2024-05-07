import { FC } from 'react';
import { Divider, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import GuestListItem from '../../lists/guest-list/GuestListItem';
import { LIST_ITEM_STYLES } from '../../../themes/styles/ListItem';
import { User } from '../../../models/User';
import styles from './DisplaySelectedGuest.module.css';
import { ICON_STYLES } from '../../../themes/styles/Icon';
import { AVATAR_STYLES } from '../../../themes/styles/Avatar';

interface Props {
	guestList: User[];
	onDelete: (id: number) => void;
}

const DisplaySelectedGuests: FC<Props> = ({ guestList, onDelete }) => {
	return (
		<div className={styles.selectedGuestList}>
			<List>
				{guestList.map((user, i) => [
					<div className={styles.userList} key={`item ${user.id}`}>
						<GuestListItem
							key={user.id}
							fullName={`${user.firstName}  ${user.lastName}`}
							details={user.jobTitle}
							image={user.imageUrl}
							styles={LIST_ITEM_STYLES.GUEST_LIST_ITEM}
							textStyles={LIST_ITEM_STYLES.GUEST_LIST_ITEM_TEXT}
							avatarStyle={AVATAR_STYLES.GUEST_LIST_ITEM_AVATAR}
						/>
						<div className={styles.removeIcon} onClick={() => onDelete(user.id)}>
							<DeleteIcon className={ICON_STYLES.GRAY_ICON}/>
						</div>
					</div>,
					<Divider component='li' key={'Divider' + i} />,
				])}
			</List>
		</div>
	);
};

export default DisplaySelectedGuests;
