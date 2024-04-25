import ROUTES from '../../../routes/Routes';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singIn } from '../../../redux/slices/AuthenticationSlice';
import { useNavigate } from 'react-router';
import { usePost } from '../../../api/hooks/ApiHooks';
import useAuthenticationAPI from '../../../api/AuthenticationAPI';

const SignInViewModel = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<boolean>(false);
	const dispatch = useDispatch();

	const { postData } = usePost();
	const { authenticateUser } = useAuthenticationAPI();
	const onSubmit = async (email: string, password: string) => {
		const {
			accessToken,
			refreshToken,
			email: authenticatedUserEmail,
			role,
		} = await postData(() => authenticateUser(email, password));

		if (accessToken && refreshToken && authenticatedUserEmail && role) {
			dispatch(singIn({ signedIn: true, accessToken, refreshToken, email, role }));
			navigate(ROUTES.INDEX);
		} else {
			setError(true);
		}
	};

	return { onSubmit, error };
};

export default SignInViewModel;
