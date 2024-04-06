import { useNavigate } from 'react-router-dom';
import Routes from '../../../routes/routes';

const SignInViewModel = () => {
	const navigate = useNavigate();

	const onSubmit = (email: string, password: string) => {
		console.log('Email:', email);
		console.log('Password:', password);
	};
	const handleForgotPasswordClick = () => {
		navigate(Routes.FORGOT_PASSWORD);
	};

	return {
		onSubmit,
		handleForgotPasswordClick,
	};
};

export default SignInViewModel;
