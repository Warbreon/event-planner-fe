import { useCallback, useEffect, useState } from 'react';

import useUserAPI from '../../api/UserAPI';
import { useApiRequest, useFetch } from '../../api/hooks/ApiHooks';
import { ALERT_SEVERITY } from '../../components/snackbar/SnackbarComponent';
import { User } from '../../models/User';

const SettingsVM = () => {
	const [snackbarOpen, setOpen] = useState(false);
	const [snackbarText, setText] = useState('');
	const [snackbarSeverity, setSeverity] = useState(ALERT_SEVERITY.SUCCESS);
	const [demotionInProgress, setDemotionInProgress] = useState(false);
	const [promotionInProgress, setPromotionInProgress] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

	const handleSnackbarClose = () => {
		setOpen(false);
	};

	const { fetchAdmins, demoteAdmins, fetchNonAdminUsers, promoteAdmins } = useUserAPI();

	const fetchAdminsFunction = useCallback(() => {
		return fetchAdmins();
	}, [demotionInProgress, promotionInProgress]);

	const { data: adminList, isLoading, error } = useFetch(fetchAdminsFunction);

	const { request: patchData, isLoading: patchIsLoading, error: patchError } = useApiRequest();

	const handleRemoveClick = async (id: number) => {
		setDemotionInProgress(true);
		await patchData(() => demoteAdmins([id]));
	};

	useEffect(() => {
		if (!demotionInProgress && !promotionInProgress) {
			return;
		}

		if (patchIsLoading) {
			setText('Loading...');
			setSeverity(ALERT_SEVERITY.WARNING);
			setOpen(true);
			return;
		}

		if (patchError) {
			setText(patchError.toString());
			setSeverity(ALERT_SEVERITY.ERROR);
			setOpen(true);
			return;
		}

		setText('Success');
		setSeverity(ALERT_SEVERITY.SUCCESS);
		setOpen(true);
		setDemotionInProgress(false);
		setPromotionInProgress(false);
	}, [demotionInProgress, promotionInProgress, patchIsLoading, patchError]);

	const fetchUsersFunction = useCallback(() => {
		return fetchNonAdminUsers();
	}, [promotionInProgress, demotionInProgress]);

	const { data: userList, isLoading: loadingNonAdmins, error: errorNonAdmins } = useFetch(fetchUsersFunction);

	const handleCheckboxChange = (user: User) => {
		const userIndex = selectedUsers.findIndex((u) => u === user.id);
		if (userIndex === -1) {
			setSelectedUsers([...selectedUsers, user.id]);
		} else {
			setSelectedUsers(selectedUsers.filter((_, index) => index !== userIndex));
		}
		console.log('checked on user ' + user);
	};

	const onConfirm = async () => {
		if (selectedUsers.length === 0) return;

		setPromotionInProgress(true);
		await patchData(() => promoteAdmins(selectedUsers));
	};

	const onModalClose = () => {
		setShowModal(false);
	};

	const onAddAdminsClick = () => {
		setShowModal(true);
	};

	return {
		handleRemoveClick,
		adminList,
		isLoading,
		error,
		snackbarOpen,
		snackbarText,
		snackbarSeverity,
		handleSnackbarClose,
		showModal,
		onModalClose,
		loadingNonAdmins,
		userList,
		onConfirm,
		onAddAdminsClick,
		handleCheckboxChange,
		errorNonAdmins,
	};
};

export default SettingsVM;
