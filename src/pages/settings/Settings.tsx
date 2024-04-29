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
} from '@mui/material';

import styles from './Settings.module.css';
import GenericButton, { ButtonTypes, IconButton } from '../../components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import GuestListItem from '../../components/lists/guest-list/GuestListItem';
import SettingsVM from './SettingsVM';

const Settings = () => {
	const settingsVM = SettingsVM();

	return (
		<Box className={styles.settingsContainer}>
			<Typography variant='h1'>Settings page</Typography>
			<Typography variant='body1'>View and manage who can create events</Typography>
			<TableContainer component={Paper} elevation={0}>
				<Table aria-label='table of system administrators'>
					<TableHead className={styles.adminTableHeader}>
						<TableRow>
							<TableCell className={styles.userColumn}>
								<Typography variant='body2'>Admin</Typography>
							</TableCell>
							<TableCell className={styles.permissionColumn}>
								<Typography variant='body2'>Permissions</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{settingsVM.rows.map((row) => (
							<TableRow key={row.firstName} className={styles.adminTableRow}>
								<TableCell component='th' scope='row'>
									<GuestListItem
										image={row.avatarUrl}
										fullName={`${row.firstName} ${row.lastName}`}
										details={row.jobTitle + ' • ' + row.homeOfficeLocation}
									/>
								</TableCell>
								<TableCell>
									<Box className={styles.permissionContainer}>
										<Typography variant='body2'>{row.permission}</Typography>
										<GenericButton
											type={ButtonTypes.button}
											title='Remove'
											onClick={settingsVM.handleDeleteClick}
											styles={BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL}
										/>
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
		</Box>
	);
};

export default Settings;
