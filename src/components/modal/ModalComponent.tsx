import { Box, Modal, Typography } from '@mui/material';
import { FC, ReactNode, useState } from 'react';
import styles from './Modal.module.css';
import PageHeader from '../headers/page-headers/PageHeader';
import GenericButton, { ButtonTypes, IconButton } from '../buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
interface ModalProps {
	isOpen: boolean;
	header?: string;
	subheader?: string;
	footer: ReactNode;
	content: ReactNode;
	handleClose?: () => void;
}

const ModalComponent: FC<ModalProps> = ({ isOpen, header, subheader, content, footer, handleClose }) => {
	return (
		<Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box className={styles.modalBox}>
				<Box className={styles.modalBoxHeader}>
					{!!header && (
						<PageHeader text={header} subheader={subheader ? subheader : ''} className='event-form-section' />
					)}
					<GenericButton
						icon={IconButton.CLOSE_MODAL}
						type={ButtonTypes.button}
						styles={BUTTON_STYLES.LIGHT_GRAY_BOX}
						onClick={handleClose}
					/>
				</Box>

				{content}

				<Box className={styles.modalBoxFooter}>{footer}</Box>
			</Box>
		</Modal>
	);
};

export default ModalComponent;
