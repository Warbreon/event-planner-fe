import ROUTES from '../../../routes/Routes';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { usePost } from '../../../api/hooks/ApiHooks';
import useAuthenticationAPI from '../../../api/AuthenticationAPI';
import { signIn } from '../../../redux/slices/AuthenticationSlice';

const SignInViewModel = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<boolean>(false);
	const dispatch = useDispatch();

	const { postData, isLoading, error: errorMessage, data } = usePost();
	const { authenticateUser } = useAuthenticationAPI();

	const onSubmit = async (email: string, password: string) => {
		await postData(() => authenticateUser(email, password));
	};

	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (data) {
			const { accessToken, refreshToken, email, role } = data;
			if (accessToken && refreshToken && email && role) {
				dispatch(signIn({ signedIn: true, accessToken, refreshToken, email, role }));
				navigate(ROUTES.INDEX);
			}  
		} 
		if(errorMessage) {
			setError(true)
		}		
	}, [data, dispatch, errorMessage, isLoading, navigate]);


	return { onSubmit, error };
};

export default SignInViewModel;
