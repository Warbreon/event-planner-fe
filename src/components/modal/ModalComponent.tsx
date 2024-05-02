import { Box, Modal } from '@mui/material';
import { FC, ReactNode } from 'react';
import styles from './Modal.module.css';
import PageHeader from '../headers/page-headers/PageHeader';
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
	isOpen: boolean;
	handleClose?: () => void;
	header?: string;
	subheader?: string;
	content: ReactNode;
	footer: ReactNode;
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
					<Box className={styles.modalBoxHeaderContent}>
						{!!header && (
							<PageHeader text={header} subheader={subheader ? subheader : ''} className='event-form-section' />
						)}
					</Box>
					<Box onClick={handleClose} className={styles.modalBoxHeaderContentCloseIcon}>
						<CloseIcon />
					</Box>
				</Box>

				<Box className={styles.modalContent}>{content}</Box>
				<Box className={styles.modalBoxFooter}>{footer}</Box>
			</Box>
		</Modal>
	);
};

export default ModalComponent;
