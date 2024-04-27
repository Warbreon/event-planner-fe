import { useFormikContext } from 'formik';
import { Attendee } from '../../models/Attendee';
import ToggleHeader from '../../shared/forms/elements/toggle-header/ToggleHeader';
import useAddGuestsVM from './AddGuestsVM';
import { FC } from 'react';
import GenericButton, { ButtonTypes, IconButton } from '../buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import ModalComponent from '../modal/ModalComponent';
import EventPageGuestListPanel from '../tabs/tab-panel/event-page-guest-list-panel/EventPageGuestListPanel';

interface Props {
	attendees: Attendee[] | null;
}

const AddGuestsSection: FC<Props> = () => {
	const { values, errors, touched } = useFormikContext<{ attendees: Attendee[] }>();
	const { showForm, showModal, onToggle, onAddGuestClick, onModalClose } = useAddGuestsVM({ errors, touched });

	return (
		<div>
			<div>
				<ToggleHeader title='Add guests' isChecked={showForm} onToggle={onToggle} />
			</div>
			{showForm && (
				<>
					<GenericButton
						icon={IconButton.ADD_GUESTS}
						type={ButtonTypes.button}
						styles={BUTTON_STYLES.LIGHT_GRAY_BOX}
						onClick={() => onAddGuestClick()}
					/>
					{showModal && (
						<ModalComponent
							header='Add guests'
							handleClose={onModalClose}
							isOpen={showModal}
							content={<EventPageGuestListPanel attendees={[]} />}
							footer={<></>}
						/>
					)}
				</>
			)}
		</div>
	);
};

export default AddGuestsSection;
