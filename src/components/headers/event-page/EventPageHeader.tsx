import { Box,  Grid } from '@mui/material';
import GenericButton, { ButtonTypes } from '../../buttons/ButtonComponent';
import GuestList from '../../guest-list/GuestList';
import styles from './EventPageHeader.module.css';
import { BUTTON_STYLES } from '../../../themes/styles/button';
import { FC } from 'react';
interface Props {
	onAddGuests: () => void;
}

const EventPageHeader: FC<Props> = ({  onAddGuests }) => {
	return (
		<Box className={styles.gridWrapper}>
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<GuestList />
				</Grid>
				<Grid item xs={2}>
					<GenericButton
						title='Add guests'
						type={ButtonTypes.button}
						styles={BUTTON_STYLES.GRAY}
						onCLick={onAddGuests}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default EventPageHeader;
