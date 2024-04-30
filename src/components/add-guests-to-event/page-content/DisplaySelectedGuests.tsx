import { Box, Divider, List } from '@mui/material';
import GuestListItem from '../../lists/guest-list/GuestListItem';
import { LIST_ITEM_STYLES } from '../../../themes/styles/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './DisplaySelectedGuest.module.css'
import { User } from '../../../models/User';
import { FC } from 'react';

interface Props {
  guestList: User[];
	onDelete: (id: number) => void;
}

const DisplaySelectedGuests: FC<Props> = ({guestList, onDelete}) => {
	//const {selecterUserList, onDeleteClick} = useDisplaySelectedGuestsViewModel(guestList);
	return (
		<div className={styles.selectedGuestList}>
			<List>
				{guestList.map((user, i, array) => [
					<div className={styles.userList} key={`item ${user.id}`}>
						<GuestListItem
							key={user.id}
							fullName={`${user.firstName}  ${user.lastName}`}
							details={user.jobTitle}
							image={user.imageUrl}
							styles={LIST_ITEM_STYLES.GUEST_LIST_ITEM}
						/>
						<div className={styles.removeIcon}  onClick={() => onDelete(user.id)}>
							<DeleteIcon />
						</div>
					</div>,
					array.length - 1 !== i ? <Divider component='li' key={'Divider' + i} /> : null,
				])}
			</List>
		</div>
	);
};

export default DisplaySelectedGuests;
