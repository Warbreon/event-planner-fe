import { useFormikContext } from 'formik';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import ToggleHeader from '../../shared/forms/elements/toggle-header/ToggleHeader';
import useAddGuestsVM from './AddGuestsVM';
import GenericButton, { ButtonTypes, IconButton } from '../buttons/ButtonComponent';
import DisplaySelectedGuests from './page-content/DisplaySelectedGuests';
import styles from './AddGuestsSection.module.css';
import { Typography } from '@mui/material';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import AddGuestSectionModal from "./page-content/AddGuestSectionModal";

const AddGuestsSection = () => {
	const { setFieldValue } = useFormikContext<{ attendeeIds: number[] }>();
	const {
		users,
		error, 
		isLoading,
		showForm,
		showModal,
		currentlySelectedUsers,
		showError,
		errorMessage,
		confirmButtonLabel,
		onToggle,
		onModalOpen,
		onModalClose,
		onConfirm,
		onDeleteClick,
	} = useAddGuestsVM({ setFieldValue });

	if(error) {
		return <Typography variant='body1'>There is a problem retrieving user list</Typography>
	}

	if(isLoading) {
		return <LoadingIndicator/>
	}

	return (
		<div>
			<div className={styles.header}>
				<ToggleHeader
					title='Add guests'
					isChecked={showForm}
					onToggle={onToggle}
					showToggle={currentlySelectedUsers.length === 0}
				/>
			</div>
			{showForm && (
				<>
					{currentlySelectedUsers.length > 0 && (
						<DisplaySelectedGuests guestList={currentlySelectedUsers} onDelete={onDeleteClick} />
					)}
					<GenericButton
						icon={IconButton.ADD_GUESTS}
						type={ButtonTypes.button}
						styles={BUTTON_STYLES.LIGHT_GRAY_BOX_CREATE_EVENT}
						onClick={() => onModalOpen()}
					/>
					{showModal && (
						<AddGuestSectionModal
							onModalClose={onModalClose}
							onConfirm={onConfirm}
							showModal={showModal}
							users={users}
							confirmButtonLabel={confirmButtonLabel}
							showError={showError}
							errorMessage={errorMessage}
						/>
					)}
				</>
			)}
		</div>
	);
};

export default AddGuestsSection;
