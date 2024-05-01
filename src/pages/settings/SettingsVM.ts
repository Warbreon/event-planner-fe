import { useState } from 'react';

import useUserAPI from '../../api/UsersAPI';
import { useFetch } from '../../api/hooks/ApiHooks';
import { COLORS } from '../../themes/styles/Colors';

const SettingsVM = () => {
	const mockLocations: string[] = ['Kaunas, Lithuania', 'Warsaw, Poland', 'London, UK', 'Chicago, USA'];

	const randomLocation = () => {
		return mockLocations[Math.floor(Math.random() * mockLocations.length)];
	};

	const [snackbarOpen, setOpen] = useState(false);
	const [snackbarText, setText] = useState('');

	const { fetchAdmins, demoteAdmin } = useUserAPI();

	let { data: adminList, isLoading, error } = useFetch(() => fetchAdmins());

	const handleRemoveClick = (id: number | string) => {
		demoteAdmin(id)
			.catch((error) => {
				setText(error);
				setOpen(true);
			})
			.then(() => {
				if (adminList != null) {
					const adminIndex = adminList.findIndex((admin) => admin.id === id);
					adminList?.splice(adminIndex, 1);
					setText('Success');
					setOpen(true);
				}
			});
	};

	const handleSnackbarClose = () => {
		setOpen(false);
	};

	return {
		handleRemoveClick,
		adminList,
		isLoading,
		error,
		randomLocation,
		snackbarOpen,
		snackbarText,
		handleSnackbarClose,
	};
};

export default SettingsVM;
