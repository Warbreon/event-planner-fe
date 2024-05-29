import { FC } from 'react';
import { Alert } from '@mui/material';

interface ErrorAlertProps {
    message: string;
}

const ErrorAlert: FC<ErrorAlertProps> = ({ message }) => {
    return (
        <Alert severity="error" sx={{ mt: 3, mx: 'auto' }}>
            {message}
        </Alert>
    );
};

export default ErrorAlert;
