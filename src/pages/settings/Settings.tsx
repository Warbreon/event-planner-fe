import {
	Typography,
	Box,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	Snackbar,
} from '@mui/material';

import styles from './Settings.module.css';
import GenericButton, { ButtonTypes, IconButton } from '../../components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import GuestListItem from '../../components/lists/guest-list/GuestListItem';
import SettingsVM from './SettingsVM';
import { parseRoleToPermission, UserRoles } from '../../utils/PermissionParser';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import PageHeader from '../../components/headers/page-headers/PageHeader';

const Settings = () => {
	const {
		handleRemoveClick,
		adminList,
		isLoading,
		error,
		randomLocation,
		snackbarOpen,
		snackbarText,
		handleSnackbarClose,
	} = SettingsVM();

	if (isLoading) {
		return <LoadingIndicator />;
	}

	return (
		<Box className={styles.settingsContainer}>
			{error ? (
				<Typography variant='body1'>{error}</Typography>
			) : (
				<>
					<PageHeader text='Settings' subheader='View and manage who can create events' />
					<TableContainer component={Paper} elevation={0} className={styles.tableContainer}>
						<Table aria-label='table of system administrators'>
							<TableHead className={styles.adminTableHeader}>
								<TableRow>
									<TableCell className='user-column'>
										<Typography variant='body2'>Admin</Typography>
									</TableCell>
									<TableCell className='permission-column'>
										<Typography variant='body2'>Permissions</Typography>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{adminList?.map((adminUser) => (
									<TableRow key={adminUser.id} className='admin-table-row'>
										<TableCell component='th' scope='row'>
											<GuestListItem
												image={adminUser.imageUrl}
												fullName={`${adminUser.firstName} ${adminUser.lastName}`}
												details={adminUser.jobTitle + ' • ' + randomLocation()}
											/>
										</TableCell>
										<TableCell>
											<Box className='permission-container'>
												<Typography variant='body2'>{parseRoleToPermission(adminUser.role)}</Typography>
												{adminUser.role === UserRoles.EVENT_ADMIN && (
													<GenericButton
														type={ButtonTypes.button}
														title='Remove'
														onClick={() => {
															handleRemoveClick(adminUser.id);
														}}
														styles={`${BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL} remove-admin-button`}
													/>
												)}
											</Box>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<GenericButton
						icon={IconButton.ADD_GUESTS}
						type={ButtonTypes.button}
						styles={BUTTON_STYLES.LIGHT_GRAY_BOX}
						onClick={() => null}
					/>
					<Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} message={snackbarText} />
				</>
			)}
		</Box>
	);
};

export default Settings;
