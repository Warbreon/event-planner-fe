import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singIn } from '../../../redux/slices/UserSlice';
import { AuthenticationRequest } from '../../../api/Authentication';
import { useNavigate } from 'react-router';
import ROUTES from '../../../routes/Routes';

const SignInViewModel = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<string>('');
	const dispatch = useDispatch();
	const { authenticate } = AuthenticationRequest();

	const onSubmit = async (userEmail: string, userPassword: string) => {
		const  { accessToken, refreshToken, email, role, error } = await authenticate(userEmail, userPassword);
		if (accessToken && refreshToken && email && role && !error) {
			dispatch(singIn({ signedIn: true, accessToken, refreshToken, email, role }));
			navigate(ROUTES.INDEX);
		} else if (error !== null) {
			setError("Email or password is incorrect. Please check your credentials")
		}
	};

	return {
		onSubmit,
		error,
	};
};

export default SignInViewModel;
