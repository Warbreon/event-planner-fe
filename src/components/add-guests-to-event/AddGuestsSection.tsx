import { FC } from 'react';
import { useFormikContext } from 'formik';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import ToggleHeader from '../../shared/forms/elements/toggle-header/ToggleHeader';
import useAddGuestsVM from './AddGuestsVM';
import GenericButton, { ButtonTypes, IconButton } from '../buttons/ButtonComponent';
import ModalComponent from '../modal/ModalComponent';
import ButtonComponentGroup from '../buttons/buton-group/ButtonComponentGroup';
import SelectGuests from './modal-content/SelectGuests';
import { User } from '../../models/User';
import DisplaySelectedGuests from './page-content/DisplaySelectedGuests';
import styles from './AddGuestsSection.module.css'

interface Props {
	users: User[];
}

const AddGuestsSection: FC<Props> = ({ users }) => {
	const { setFieldValue } = useFormikContext<{ attendees: number[] }>();
	const { showForm, showModal, currentlySelectedUsers, onToggle, onModalOpen, onModalClose, onConfirm, onDeleteClick } =
		useAddGuestsVM({ setFieldValue });

	return (
		<div>
			<div className={currentlySelectedUsers.length > 0 ? styles.headerBox: 'header-container'}>
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
						styles={BUTTON_STYLES.LIGHT_GRAY_BOX}
						onClick={() => onModalOpen()}
					/>
					{showModal && (
						<ModalComponent
							header='Add guests'
							handleClose={onModalClose}
							isOpen={showModal}
							content={<SelectGuests users={users} />}
							footer={
								<ButtonComponentGroup
									onCancel={onModalClose}
									onConfirm={onConfirm}
									closeButtonLabel='Cancel'
									confirmButtonLabel='Confirm'
								/>
							}
						/>
					)}
				</>
			)}
		</div>
	);
};

export default AddGuestsSection;
