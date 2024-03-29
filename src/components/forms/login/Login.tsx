import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setEmail } from '../../../redux/actions/action.ts'; // Import the setEmail action creator

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

	const boxStyles = {
		position: 'fixed',
		maxWidth: '400px',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		padding: '16px',
		textAlign: 'center',
	};

	const welcomeMessage = {
		fontSize: '1.4rem',
	};

	const directionStyles = {
		position: 'relative',
		fontSize: '0.516rem',
		fontWeight: 400,
		marginTop: '0.3rem',
		marginBottom: '1.4rem',
	};

	return (
		<Box sx={boxStyles}>
			<Typography variant='body1' sx={welcomeMessage}>
				Welcome to <br/>
				Cognizant events
			</Typography>
			<Typography variant='body2' sx={directionStyles}>
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
					{' '}
					{/* Add onClick event handler */}
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
