import { useCallback, useEffect, useState } from 'react';

import useUserAPI from '../../api/UsersAPI';
import { useApiRequest, useFetch } from '../../api/hooks/ApiHooks';
import { ALERT_SEVERITY } from '../../components/snackbar/SnackbarComponent';

const SettingsVM = () => {
	const [snackbarOpen, setOpen] = useState(false);
	const [snackbarText, setText] = useState('');
	const [snackbarSeverity, setSeverity] = useState(ALERT_SEVERITY.SUCCESS);
	const [demotionInProgress, setDemotionInProgress] = useState(false);

	const handleSnackbarClose = () => {
		setOpen(false);
	};

	const { fetchAdmins, demoteAdmin } = useUserAPI();

	const fetchFunction = useCallback(() => {
		return fetchAdmins();
	}, [demotionInProgress]);

	const { data: adminList, isLoading, error } = useFetch(fetchFunction);

	const { request: patchData, isLoading: patchIsLoading, error: patchError } = useApiRequest();

	const handleRemoveClick = async (id: number | string) => {
		setDemotionInProgress(true);
		await patchData(() => demoteAdmin(id));
	};

	useEffect(() => {
		if (!demotionInProgress) {
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
	}, [demotionInProgress, patchIsLoading, patchError]);

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
