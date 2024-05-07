import ROUTES from '../../../routes/Routes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useApiRequest } from '../../../api/hooks/ApiHooks';
import useAuthenticationAPI from '../../../api/AuthenticationAPI';
import { signIn } from '../../../redux/slices/AuthenticationSlice';

const SignInViewModel = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { requestData: postData, isLoading, error, data } = useApiRequest();
	const { authenticateUser } = useAuthenticationAPI();

	const onSubmit = async (email: string, password: string) => {
		await postData(() => authenticateUser(email, password));
	};

	useEffect(() => {
		if (isLoading || error) {
			return;
		}

		const { accessToken, refreshToken, email, role } = data || {};
		if (accessToken && refreshToken && email && role) {
			dispatch(signIn({ signedIn: true, accessToken, refreshToken, email, role }));
			navigate(ROUTES.INDEX);
		}
	}, [data, dispatch, error, isLoading, navigate]);

	return { onSubmit, error };
};

export default SignInViewModel;
