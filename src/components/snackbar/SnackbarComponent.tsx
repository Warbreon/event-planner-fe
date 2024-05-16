import { FC } from 'react';
import { Alert, AlertProps, Snackbar } from '@mui/material';

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
	const alertProps: AlertProps = {
        severity,
    };
	
	if (!autoHideDuration) {
        alertProps.onClose = handleClose;
    }
	
	return (
		<Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose} className={className}>
			<Alert {...alertProps}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default SnackbarComponent;
