import React, { useState } from 'react';
import LoginPageButton from '../login/login-page-button/LoginPageButton.tsx';
import './Login.css';
import { Box, Typography } from '@mui/material';
import TextInput from '../login/TextInput/TextInput.tsx';
import LoginViewModel from './LoginViewModel.ts';

const Login = () => {
	const viewModel = LoginViewModel();
	const [email, setEmail] = useState('');

	return (
		<Box className='login-form'>
			<Typography variant='body1' className='welcome-message'>
				Welcome to <br />
				Cognizant events
			</Typography>
			<Typography id='directions' variant='body2'>
				Sign in with your work email address
			</Typography>
			<form className='top-margin'>
				<TextInput
					label='Email address'
					required
					placeholder='e.g., name@cognizant.com'
					fieldName='name'
					onChange={(e) => {
						viewModel.handleInputChange(e.target.value);
						setEmail(e.target.value);
					}}
				/>
				<br />
				<TextInput label='Password' required fieldName='password' />
				<a href='/signin/forgotpassword' className='forgot-password' onClick={viewModel.handleForgotPasswordClick}>
					Forgot password?
				</a>
				<LoginPageButton title='Sign in' onClick={() => viewModel.handleClick(email)} />
			</form>
		</Box>
	);
};

export default Login;
