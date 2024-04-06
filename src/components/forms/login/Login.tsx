import { Box, Typography } from '@mui/material';
import LoginViewModel from './LoginViewModel';
import FormikTextField from '../elements/FormikTextField';
import styles from './Login.module.css';
import GenericButton from '../../buttons/login-password-change/ButtonComponent';

import { emailPasswordSchema } from '../../../utils/schemas/emailPasswordSchema';
import Form from '../Form';
import PageHeader from '../../headers/page-headers/PageHeader';

const Login = () => {
	const viewModel = LoginViewModel();

	return (
		<Box className={styles.loginForm}>
			<PageHeader variant = 'center' text='Welcome to'/>
			<PageHeader variant = 'center' text='Cognizant events' subheader='Sign in with your work email address'/>
			<Form
				initialValues={{ email: '', password: '' }}
				validationSchema={emailPasswordSchema}
				onSubmit={(values) => {
					viewModel.onSubmit(values.email, values.password);
				}}
			>
				<FormikTextField
					id='email'
					title='Email address'
					name='email'
					placeholder='e.g., name@cognizant.com'
					type='email'
					textFieldClassName={styles.textInput}
				/>

				<FormikTextField 
					id='password' 
					title='Password' 
					name='password' 
					type='password' 
					textFieldClassName={styles.textInput}
				/>


				<a href='/signin/forgotpassword' className='forgot-password' onClick={viewModel.handleForgotPasswordClick}>
					Forgot password?
				</a>

				<div>
					<GenericButton title='Sign in'/>
				</div>
				
			</Form>
		</Box>
	);
};

export default Login;
