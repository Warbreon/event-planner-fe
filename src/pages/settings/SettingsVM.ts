import { useCallback, useState } from 'react';

import useUserAPI from '../../api/UsersAPI';
import { useFetch } from '../../api/hooks/ApiHooks';
import { ALERT_SEVERITY } from '../../components/snackbar/SnackbarComponent';

const SettingsVM = () => {
	const [snackbarOpen, setOpen] = useState(false);
	const [snackbarText, setText] = useState('');
	const [snackbarSeverity, setSeverity] = useState(ALERT_SEVERITY.SUCCESS);

	const handleSnackbarClose = () => {
		setOpen(false);
	};

	const { fetchAdmins, demoteAdmin } = useUserAPI();

	const fetchFunction = useCallback(() => {
		return fetchAdmins();
	}, []);

	const { data: adminList, isLoading, error } = useFetch(fetchFunction);

	const handleRemoveClick = (id: number | string) => {
		demoteAdmin(id)
			.catch((error) => {
				setText(error);
				setSeverity(ALERT_SEVERITY.ERROR);
				setOpen(true);
			})
			.then(() => {
				if (adminList != null) {
					const adminIndex = adminList.findIndex((admin) => admin.id === id);
					adminList?.splice(adminIndex, 1);
					setText('Success');
					setSeverity(ALERT_SEVERITY.SUCCESS);
					setOpen(true);
				}
			});
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
	};
};

export default SettingsVM;
