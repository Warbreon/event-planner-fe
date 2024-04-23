import ROUTES from '../../../routes/Routes';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singIn } from '../../../redux/slices/AuthenticationSlice';
import { useNavigate } from 'react-router';
import { usePost } from '../../../api/hooks/ApiHooks';
import { authenticateUser } from '../../../api/AuthenticationAPI';

const SignInViewModel = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<string>('');
	const dispatch = useDispatch();

	const { postData } = usePost();
	const onSubmit = async (email: string, password: string) => {

		const {
			accessToken,
			refreshToken,
			email: authenticatedUserEmail,
			role,
			error } = await postData(() => authenticateUser(email, password));

		if (accessToken && refreshToken && authenticatedUserEmail && role && !error) {
			dispatch(singIn({ signedIn: true, accessToken, refreshToken, email, role }));
			navigate(ROUTES.INDEX);
		} else if (error !== null) {
			setError('Email or password is incorrect. Please check your credentials');
		}
	};

	return { onSubmit, error };
};

export default SignInViewModel;
