import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { User } from '../../../models/User';
import useUserAPI from '../../../api/UserAPI';
import { useFetch } from '../../../api/hooks/ApiHooks';

const SettingsModalVM = () => {
	const [showModal, setShowModal] = useState<boolean>(true);
	const [currentlySelectedUsers, setCurrentlySelectedUsers] = useState<User[]>([]);
	const [showError, setShowError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>('');

	const { fetchNonAdminUsers } = useUserAPI();

	const fetchUsersFunction = useCallback(() => {
		return fetchNonAdminUsers();
	}, []);

	const { data: userList, isLoading, error } = useFetch(fetchUsersFunction);

	useEffect(() => {
		if (error) {
			setErrorMessage(error);
			setShowError(true);
		}
	}, [userList, isLoading, error]);

	const onModalClose = () => {
		setShowModal(!showModal);
	};

	const onConfirm = () => {
		return;
	};

	return { showModal, onModalClose, userList, isLoading, onConfirm, showError, errorMessage };
};

export default SettingsModalVM;
