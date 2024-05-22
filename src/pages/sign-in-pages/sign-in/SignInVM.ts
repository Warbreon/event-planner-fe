import ROUTES from '../../../routes/Routes';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useApiRequest } from '../../../api/hooks/ApiHooks';
import useAuthenticationAPI from '../../../api/AuthenticationAPI';
import { signIn } from '../../../redux/slices/AuthenticationSlice';
import { ALERT_SEVERITY } from '../../../components/snackbar/SnackbarComponent';

const SignInVM = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const [isSnackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const [snackbarSeverity, setSnackbarSeverity] = useState(ALERT_SEVERITY.SUCCESS);
	const { request: postData, isLoading, error, data } = useApiRequest();
	const { authenticateUser } = useAuthenticationAPI();

	const handleSnackbarClose = () => setSnackbarOpen(false);

	const onSubmit = async (email: string, password: string) => {
		await postData(() => authenticateUser(email, password));
	};

	useEffect(() => {
		if (location.state?.message) {
			setSnackbarMessage(location.state.message);
			setSnackbarSeverity(location.state.severity);
			setSnackbarOpen(true);
		}
	}, [location.state]);

	useEffect(() => {
		if (error) {
			setSnackbarMessage(error);
			setSnackbarSeverity(ALERT_SEVERITY.ERROR)
			setSnackbarOpen(true);
		} else if (data) {
			const { accessToken, refreshToken, email, role } = data || {};

			if (accessToken && refreshToken && email && role) {
				dispatch(signIn({ signedIn: true, accessToken, refreshToken, email, role }));
				navigate(ROUTES.INDEX);
			}
		}
	}, [data, dispatch, error, isLoading, navigate]);

	return { onSubmit, snackbarMessage, isLoading, snackbarSeverity, isSnackbarOpen, handleSnackbarClose };
};

export default SignInVM;
