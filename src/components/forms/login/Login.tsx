import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setEmail } from '../../../redux/actions/action.ts';
import LoginPageButton from '../login/login-page-button/LoginPageButton.tsx';
import './Login.css';
import { Box, Typography } from '@mui/material';
import TextInput from '../login/TextInput/TextInput.tsx';
import Routes from '../../../routes/routes.ts';
import { useNavigate } from 'react-router-dom';

const Login = ({ setEmail }) => {
	const [emailValue, setEmailValue] = useState('');
	const history = useNavigate();

	const handleClick = () => {
		setEmail(emailValue);
		console.log(emailValue);
	};

	const handleForgotPasswordClick = () => {
		history.apply(Routes.FORGOT_PASSWORD);
	};

	return (
		<Box className='login-form'>
			<Typography variant='body1' className='welcome-message'>
				Welcome to <br />
				Cognizant events
			</Typography>
			<Typography id='directions' variant='body2'>
				Sign in with your work email address
			</Typography>
			<div className='spacing'>
				<TextInput
					label='Email address'
					required
					placeholder='e.g., name@cognizant.com'
					fieldName='email'
					value={emailValue}
					onChange={(e) => setEmailValue(e.target.value)}
				/>
				<br />
				<TextInput label='Password' required fieldName='password' />
				<a href='/signin/forgotpassword' onClick={handleForgotPasswordClick}>
					<p className='grey-underlined'>Forgot password?</p>
				</a>
				<LoginPageButton title='Sign in' onClick={handleClick} />
			</div>
		</Box>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setEmail: (email) => dispatch(setEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
