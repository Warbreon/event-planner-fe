import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Routes from '../../../routes/routes.ts';

const LoginViewModel = () => {
	const [emailValue, setEmailValue] = useState('');
	const navigate = useNavigate();

	const handleClick = (setEmail: Function) => {
		setEmail(emailValue);
		console.log(emailValue);
	};

	const handleInputChange = (email: string) => {
		setEmailValue(email);
		console.log(email);
	};

	const handleForgotPasswordClick = () => {
		navigate.apply(Routes.FORGOT_PASSWORD);
	};

	return {
		handleClick,
		handleForgotPasswordClick,
		handleInputChange,
		setEmailValue,
	};
};

export default LoginViewModel;
