import { FC } from 'react';
import { Alert, Snackbar } from '@mui/material';

export enum ALERT_SEVERITY {
	ERROR = 'error',
	SUCCESS = 'success',
	WARNING = 'warning',
}

interface SnackBarProps {
	open: boolean;
	message: string;
	severity: ALERT_SEVERITY;
	autoHideDuration?: number;
	handleClose?: (event?: React.SyntheticEvent | Event, reason?: string) => void;
	className?: string;
}
const SnackbarComponent: FC<SnackBarProps> = ({ open, handleClose, message, severity, autoHideDuration, className }) => {
	return (
		<Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose} className={className}>
			<Alert onClose={handleClose} severity={severity}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default SnackbarComponent;
