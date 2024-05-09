import React from 'react';
import ModalComponent from '../../../components/modal/ModalComponent';
import SelectGuests from '../../../components/add-guests-to-event/modal-content/SelectGuests';
import ButtonComponentGroup from '../../../components/buttons/buton-group/ButtonComponentGroup';
import SnackbarComponent, { ALERT_SEVERITY } from '../../../components/snackbar/SnackbarComponent';
import SettingsModalVM from './SettingsModalVM';
import LoadingIndicator from '../../../components/loading-indicator/LoadingIndicator';

const SettingsModal = () => {
	const { showModal, onModalClose, userList, isLoading, onConfirm, showError, errorMessage } = SettingsModalVM();

	return (
		<div>
			{showModal && (
				<ModalComponent
					header='Add guests'
					handleClose={onModalClose}
					isOpen={showModal}
					content={isLoading ? <LoadingIndicator /> : <SelectGuests users={userList || []} />}
					footer={
						<>
							<ButtonComponentGroup
								onCancel={onModalClose}
								onConfirm={onConfirm}
								closeButtonLabel='Cancel'
								confirmButtonLabel='Add administrators'
							/>
							<SnackbarComponent open={showError} message={errorMessage} severity={ALERT_SEVERITY.ERROR} />
						</>
					}
				/>
			)}
		</div>
	);
};

export default SettingsModal;
