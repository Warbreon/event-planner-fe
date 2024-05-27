import { useNavigate, useParams } from "react-router";
import { useApiRequest } from "../../../api/hooks/ApiHooks";
import useAuthenticationAPI from "../../../api/AuthenticationAPI";
import { useEffect, useState } from "react";
import { ALERT_SEVERITY } from "../../../components/snackbar/SnackbarComponent";
import ROUTES from "../../../routes/Routes";

interface FormValues {
	newPassword: string;
	confirmNewPassword: string;
}

const PasswordResetVM = () => {
	const navigate = useNavigate();
	const { token } = useParams();
	const { request, isLoading, error, data } = useApiRequest();
	const { changePassword } = useAuthenticationAPI();
	const [isSnackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(ALERT_SEVERITY.SUCCESS);
	const handleSnackbarClose = () => setSnackbarOpen(false);

	const onSubmit = (values: FormValues) => {
		request(() => changePassword(token ?? '', values.newPassword));
	};

	useEffect(() => {
		if (error) {
		  setSnackbarMessage(error);
		  setSnackbarSeverity(ALERT_SEVERITY.ERROR)
		  setSnackbarOpen(true);
		} else if (data) {
		  setSnackbarMessage('Password reset successfully');
		  setSnackbarSeverity(ALERT_SEVERITY.SUCCESS)
		  setSnackbarOpen(true);
		  navigate(ROUTES.SIGN_IN, { state: { message: 'Password reset successfully', severity: ALERT_SEVERITY.SUCCESS } });
		}
	  }, [error, data, navigate]);

	return { onSubmit, isLoading, isSnackbarOpen, handleSnackbarClose, snackbarMessage, snackbarSeverity };
};

export default PasswordResetVM;
