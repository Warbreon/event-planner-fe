import React, { useState, ChangeEvent, useEffect } from 'react';
import { TEXTFIELD_STYLES } from '../../../themes/styles/TextField';
import { ICON_STYLES } from '../../../themes/styles/Icon';
import SearchBar from '../../../components/app-bar/search-bar/SearchBar';
import SearchIcon from '@mui/icons-material/Search';
import { List, Checkbox, Divider } from '@mui/material';
import GuestListItem from '../../../components/lists/guest-list/GuestListItem';
import { LIST_ITEM_STYLES } from '../../../themes/styles/ListItem';
import { AVATAR_STYLES } from '../../../themes/styles/Avatar';
import { User } from '../../../models/User';
import styles from '../../../components/add-guests-to-event/modal-content/SelectGuests.module.css';

interface Props {
	users: User[];
	handleCheckboxChange: (user: User) => void;
}

const SelectNewAdmins: React.FC<Props> = ({ users, handleCheckboxChange }) => {
	const [userList, setUserList] = useState<User[]>(users);

	useEffect(() => {
		setUserList(users);
	}, [users]);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.toLowerCase();
		setUserList(
			users.filter((user) => {
				const fullName = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`;
				const searchParts = value.split(' ').filter((part) => part.trim() !== '');
				return searchParts.every((part) => fullName.includes(part));
			})
		);
	};

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
						<Checkbox id={user.id.toString()} key={`checkbox-${user.id}`} onChange={() => handleCheckboxChange(user)} />
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

export default SelectNewAdmins;
