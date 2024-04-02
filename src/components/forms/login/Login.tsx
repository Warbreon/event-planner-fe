import React from 'react';
import { connect } from 'react-redux';
import { setEmail } from '../../../redux/actions/action.ts';
import LoginPageButton from '../login/login-page-button/LoginPageButton.tsx';
import './Login.css';
import { Box, Typography } from '@mui/material';
import TextInput from '../login/TextInput/TextInput.tsx';
import LoginViewModel from './LoginViewModel.ts';

const Login = ({ setEmail }) => {
	const viewModel = LoginViewModel();

	return (
		<Box className='login-form'>
			<Typography variant='body1' className='welcome-message'>
				Welcome to <br />
				Cognizant events
			</Typography>
			<Typography id='directions' variant='body2'>
				Sign in with your work email address
			</Typography>
			<div className='top-margin'>
				<TextInput
					label='Email address'
					required
					placeholder='e.g., name@cognizant.com'
					fieldName='name'
					onChange={(e) => {
						viewModel.handleInputChange(e.target.value);
					}}
				/>
				<br />
				<TextInput label='Password' required fieldName='password' />
				<a href='/signin/forgotpassword' className='forgot-password' onClick={viewModel.handleForgotPasswordClick}>
					Forgot password?
				</a>
				<LoginPageButton title='Sign in' onClick={() => viewModel.handleClick(setEmail)} />
			</div>
		</Box>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setEmail: (email) => dispatch(setEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
