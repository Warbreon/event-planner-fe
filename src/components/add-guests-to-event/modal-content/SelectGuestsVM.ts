import { ChangeEvent, useState } from 'react';
import { User } from '../../../models/User';
import { useDispatch } from 'react-redux';
import { add, removeById } from '../../../redux/slices/CreateEventPageSlice';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../redux/store/Store';
import { useDebouncedCallback } from 'use-debounce';

const useSelectGuestsViewModel = (users: User[]) => {
	const [userList, setUserList] = useState<User[]>(users);
	const dispatch = useDispatch();
	const selectedUsers = useSelector((state: StoreState) => state.createEventGuests);

	const searchUsers = (value: string) => {
		const searchParts = value.toLowerCase().split(' ').filter(part => part.trim() !== '');
		setUserList(
			users.filter(user => {
				const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
				return searchParts.every(part => fullName.includes(part));
			})
		);
	};

	const debouncedSearchUsers = useDebouncedCallback(searchUsers, 500);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		debouncedSearchUsers(value);
	};

	const handleCheckboxChange = (user: User) => {
		const isUserSelected = selectedUsers.some((selectedUser) => selectedUser.id === user.id);
		if (isUserSelected) {
			dispatch(removeById(user.id));
		} else {
			!selectedUsers.includes(user) && dispatch(add(user));
		}
	};

	return { onInputChange, userList, handleCheckboxChange, selectedUsers };
};

export default useSelectGuestsViewModel;
