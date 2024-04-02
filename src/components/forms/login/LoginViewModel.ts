import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Routes from '../../../routes/routes.ts';
import { useDispatch } from 'react-redux';

const LoginViewModel = () => {
	const [email, setEmailValue] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = (email: string) => {
		console.log(email);
		dispatch({ type: 'SET_EMAIL', payload: email });
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
