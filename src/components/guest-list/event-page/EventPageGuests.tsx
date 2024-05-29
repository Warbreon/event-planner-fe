import { Box, Grid } from '@mui/material';
import GenericButton, { ButtonTypes } from '../../../shared/components/buttons/ButtonComponent';
import GuestList from '../GuestList';
import styles from './EventPageGuests.module.css';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import { FC } from 'react';
import AddGuestSectionModal from "../../add-guests-to-event/page-content/AddGuestSectionModal";
import EventPageGuestsVM from "./EventPageGuestsVM";

interface Props {
	eventPageGuestsVM: typeof EventPageGuestsVM.arguments;
}

const EventPageGuests: FC<Props> = ({eventPageGuestsVM }) => {

	return (
		<Box className={styles.gridWrapper}>
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<GuestList attendees={eventPageGuestsVM.attendeeList!}/>
				</Grid>
				<Grid item xs={2}>
					{eventPageGuestsVM.isUserCreator &&
						<>
							<GenericButton
								title='Add guests'
								type={ButtonTypes.button}
								styles={BUTTON_STYLES.GRAY}
								onClick={eventPageGuestsVM.onModalOpen}
							/>
							{eventPageGuestsVM.showModal && (
								<AddGuestSectionModal
									onModalClose={eventPageGuestsVM.onModalClose}
									onConfirm={eventPageGuestsVM.onConfirm}
									showModal={eventPageGuestsVM.showModal}
									users={eventPageGuestsVM.users || []}
									confirmButtonLabel={eventPageGuestsVM.confirmButtonLabel}
									errorMessage={eventPageGuestsVM.errorMessage}
									isSnackbarOpen={eventPageGuestsVM.isSnackbarOpen}
									handleSnackbarClose={eventPageGuestsVM.handleSnackbarClose}
								/>
							)}
						</>
					}
				</Grid>
			</Grid>
		</Box>
	);
};

export default EventPageGuests;
