import React, { FC } from 'react';
import GenericButton, { ButtonTypes } from '../ButtonComponent';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import styles from './ButtonComponentGroup.module.css';
interface Props {
	confirmButtonLabel: string;
	closeButtonLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ButtonComponentGroup: FC<Props> = ({ confirmButtonLabel, closeButtonLabel, onConfirm, onCancel }) => {
	return (
		<div className={styles.buttonGroup}>
			<div className='cancelButton'>
				<GenericButton
					title={closeButtonLabel}
					styles={`${BUTTON_STYLES.OUTLINED_GREY_BORDER} ${BUTTON_STYLES.MODAL_BUTTON}`}
					type={ButtonTypes.button}
					onClick={onCancel}
				/>
			</div>
			<div className='confirmationButton'>
				<GenericButton title={confirmButtonLabel} styles={`${BUTTON_STYLES.BLACK} ${BUTTON_STYLES.MODAL_BUTTON}`} type={ButtonTypes.submit} onClick={onConfirm}/>
			</div>
		</div>
	);
};

export default ButtonComponentGroup;
