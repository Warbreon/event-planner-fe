import { Box, Grid } from '@mui/material';
import GenericButton, { ButtonTypes } from '../../buttons/ButtonComponent';
import GuestList from '../GuestList';
import styles from './EventPageGuests.module.css';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import { FC } from 'react';
interface Props {
	onAddGuests: () => void;
}

const EventPageGuests: FC<Props> = ({ onAddGuests }) => {
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
						onClick={onAddGuests}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default EventPageGuests;
