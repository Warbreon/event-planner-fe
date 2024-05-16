import { useEffect, useState } from "react";
import useAuthenticationAPI from "../../../api/AuthenticationAPI";
import { useApiRequest } from "../../../api/hooks/ApiHooks";
import { ALERT_SEVERITY } from "../../../components/snackbar/SnackbarComponent";

interface FormValues {
    email: string;
}

const ForgotPasswordVM = () => {
    const { request, isLoading, error, data } = useApiRequest();
    const { resetPassword } = useAuthenticationAPI();
    const [isSnackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(ALERT_SEVERITY.SUCCESS);
    const onSubmit = (values: FormValues) => {
        request(() => resetPassword(values.email));
    }
    const handleSnackbarClose = () => setSnackbarOpen(false);

    useEffect(() => {
        if (error) {
            setSnackbarMessage(error)
            setSnackbarSeverity(ALERT_SEVERITY.ERROR);
            setSnackbarOpen(true);
        } else if (data) {
            setSnackbarMessage('Reset email sent successfully');
            setSnackbarSeverity(ALERT_SEVERITY.SUCCESS);
            setSnackbarOpen(true);
        }
    }, [error, data]);

    return { onSubmit, isLoading, handleSnackbarClose, isSnackbarOpen, snackbarMessage, snackbarSeverity }
}

export default ForgotPasswordVM