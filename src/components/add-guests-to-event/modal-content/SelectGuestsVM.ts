import { ChangeEvent, useState } from 'react';
import { User } from '../../../models/User';
import { useDispatch } from 'react-redux';
import { add, removeById } from '../../../redux/slices/CreateEventPageSlice';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../redux/store/Store';

const useSelectGuestsViewModel = (users: User[]) => {
	const [userList, setUserList] = useState<User[]>(users);
	const dispatch = useDispatch();
	const selectedUsers = useSelector((state: StoreState) => state.createEventGuests);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setUserList(
			users.filter((user) => {
				const fullName = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`;
				const searchParts = value.split(' ').filter((part) => part.trim() !== '');
				return searchParts.every((part) => fullName.includes(part));
			})
		);
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
