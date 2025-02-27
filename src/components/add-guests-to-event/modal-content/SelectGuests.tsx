import SearchBar from '../../app-bar/search-bar/SearchBar';
import { ICON_STYLES } from '../../../themes/styles/Icon';
import { TEXTFIELD_STYLES } from '../../../themes/styles/TextField';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SelectGuests.module.css';
import { User } from '../../../models/User';
import { FC } from 'react';
import { Checkbox, Divider, List } from '@mui/material';
import GuestListItem from '../../lists/guest-list/GuestListItem';
import { LIST_ITEM_STYLES } from '../../../themes/styles/ListItem';
import useSelectGuestsViewModel from './SelectGuestsVM';
import { AVATAR_STYLES } from '../../../themes/styles/Avatar';

interface Props {
	users: User[];
}

const SelectGuests: FC<Props> = ({ users }) => {
	const { onInputChange, userList, handleCheckboxChange, selectedUsers } = useSelectGuestsViewModel(users);
	return (
		<div>
			<div className={styles.searchBar}>
				<SearchBar
					styles={TEXTFIELD_STYLES.GUEST_SEARCH_BAR}
					placeholder={'Search for guest...'}
					onChange={onInputChange}
				>
					<SearchIcon className={ICON_STYLES.GUEST_SEARCH_BAR} />
				</SearchBar>
			</div>
			<List>
				{userList.map((user, i, array) => [
					<div className={styles.userList} key={`item ${user.id}`}>
						<Checkbox
							id={user.id.toString()}
							key={`checkbox-${user.id}`}
							checked={selectedUsers.some((x) => x.id === user.id)}
							onChange={() => handleCheckboxChange(user)}
						/>
						<GuestListItem
							key={`list-item-${user.id}`}
							fullName={`${user.firstName}  ${user.lastName}`}
							details={user.jobTitle}
							image={user.imageUrl}
							styles={LIST_ITEM_STYLES.GUEST_LIST_ITEM_IN_MODAL}
							textStyles={LIST_ITEM_STYLES.GUEST_LIST_ITEM_IN_MODAL_TEXT}
							avatarStyle={AVATAR_STYLES.GUEST_LIST_ITEM_MODAL_AVATAR}
							avatarListItemStyle={LIST_ITEM_STYLES.GUEST_LIST_ITEM_IN_MODAL_AVATAR}
						/>
					</div>,
					array.length - 1 !== i ? <Divider component='li' key={'Divider' + i} /> : null,
				])}
			</List>
		</div>
	);
};

export default SelectGuests;
