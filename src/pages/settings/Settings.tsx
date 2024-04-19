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
	Avatar,
} from '@mui/material';
import React from 'react';

import styles from './Settings.module.css';
import GenericButton, { ButtonTypes, IconButton } from '../../components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';

function createData(
	avatarUrl: string,
	firstName: string,
	lastName: string,
	jobTitle: string,
	homeOfficeLocation: string,
	permission: string
) {
	return { avatarUrl, firstName, lastName, jobTitle, homeOfficeLocation, permission };
}

const rows = [
	createData(
		'https://avatar.iran.liara.run/public/82',
		'Jolyne',
		'Cujoh',
		'HR Manage',
		'Miami, USA',
		'System administrator'
	),
	createData(
		'http://placebear.com/250/250',
		'Jotaro',
		'Cujoh',
		'Operations Manager',
		'Kairo, Egypt',
		'System administrator'
	),
	createData(
		'http://placebeard.it/250/250',
		'Josuke',
		'Higashikata',
		'HR Intern',
		'Morioh, Japan',
		'System administrator'
	),
	createData('http://placebacon.net/400/300', 'Joseph', 'Joestar', 'CFO', 'London, UK', 'Admin'),
	createData('https://avatar.iran.liara.run/public/20', 'Giorno', 'Giovanna', 'CEO', 'Rome, Italy', 'Admin'),
];

const Settings = () => {
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
						{rows.map((row) => (
							<TableRow key={row.firstName} className={styles.adminTableRow}>
								<TableCell component='th' scope='row'>
									<Box>
										<Avatar className='adminAvatar' alt={`${row.firstName} ${row.lastName}`} src={row.avatarUrl} />
									</Box>
									<Box>
										<Typography variant='h2'>{row.firstName + ' ' + row.lastName}</Typography>
										<Typography variant='body2'>
											{row.jobTitle} &bull; {row.homeOfficeLocation}
										</Typography>
									</Box>
								</TableCell>
								<TableCell>
									<Typography variant='body2'>{row.permission}</Typography>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<GenericButton
				icon={IconButton.ADD_GUESTS}
				type={ButtonTypes.button}
				styles={BUTTON_STYLES.LIGHT_GRAY}
				onClick={() => null}
			/>
		</Box>
	);
};

export default Settings;
