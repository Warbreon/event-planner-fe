import { useFormikContext } from 'formik';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import ToggleHeader from '../../shared/forms/elements/toggle-header/ToggleHeader';
import useAddGuestsVM from './AddGuestsVM';
import GenericButton, { ButtonTypes, IconButton } from '../../shared/components/buttons/ButtonComponent';
import ModalComponent from '../../shared/components/modal/ModalComponent';
import ButtonComponentGroup from '../../shared/components/buttons/buton-group/ButtonComponentGroup';
import SelectGuests from './modal-content/SelectGuests';
import DisplaySelectedGuests from './page-content/DisplaySelectedGuests';
import styles from './AddGuestsSection.module.css';
import SnackbarComponent, { ALERT_SEVERITY } from '../snackbar/SnackbarComponent';
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
		errorMessage,
		confirmButtonLabel,
		onToggle,
		onModalOpen,
		onModalClose,
		onConfirm,
		onDeleteClick,
		isSnackbarOpen,
		handleSnackbarClose,
	} = useAddGuestsVM({ setFieldValue });

	const footer = () => (
		<div className={styles.footerContainer}>
			<ButtonComponentGroup
				buttons={[
					{
						label: 'Cancel',
						onClick: onModalClose,
						className: `${BUTTON_STYLES.OUTLINED_GRAY_BORDER} ${BUTTON_STYLES.MODAL_BUTTON}`,
					},
					{
						label: confirmButtonLabel,
						onClick: onConfirm,
						className: `${BUTTON_STYLES.BLACK_BACKGROUND} ${BUTTON_STYLES.MODAL_BUTTON}`,
						type: ButtonTypes.submit,
					},
				]}
				className={styles.modalButtonsContainer}
			/>
			<SnackbarComponent
				open={isSnackbarOpen}
				message={errorMessage}
				autoHideDuration={5000}
				handleClose={handleSnackbarClose}
				severity={ALERT_SEVERITY.ERROR}
				className={styles.snackbar}
			/>
		</div>
	);

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
